# Use Node.js 18 Alpine para menor tamanho
FROM node:18-alpine AS base

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm ci --only=production

# Rebuild para arquitetura correta
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

# Disable telemetry durante build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Imagem de produção
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Criar pasta public e copiar conteúdo se existir
RUN mkdir -p ./public
COPY --from=builder /app/public ./public

# Definir permissões corretas para cache do Next.js
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar arquivos de build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
