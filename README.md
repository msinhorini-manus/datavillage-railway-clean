# 🚀 Data Village ERP Summit 2026

## 🌟 Deploy Automático no Railway

Este é o projeto **Data Village ERP Summit 2026** configurado para deploy automático no Railway.

### ✨ Tecnologias

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para styling moderno
- **API Routes** serverless integradas
- **Docker** multi-stage otimizado

### 🎯 Deploy no Railway

#### Método 1: Interface Web (Recomendado)
1. Acesse [railway.app](https://railway.app)
2. Clique em "Deploy from GitHub repo"
3. Conecte este repositório: `msinhorini-manus/datavillage-railway-clean`
4. Railway detectará automaticamente Next.js
5. Deploy será iniciado automaticamente

#### Método 2: Railway CLI
```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Fazer login
railway login

# Deploy
railway up
```

### 🔧 Configuração Automática

O projeto está pré-configurado com:

- ✅ **railway.json** - Configuração Railway
- ✅ **Dockerfile** - Container otimizado
- ✅ **next.config.js** - Output standalone
- ✅ **package.json** - Scripts de build
- ✅ **.gitignore** - Arquivos ignorados

### 🌐 Funcionalidades

#### Site Público
- Hero section moderna com gradientes
- Seções dinâmicas (Números, Tendências, ROI, etc.)
- Lista de palestrantes e passes
- Design responsivo completo

#### API Routes
- `/api/site-data` - Dados do site público
- Dados mockados prontos para produção
- Estrutura escalável para banco de dados

### 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: Otimizado
- **SEO**: Meta tags configuradas

### 🎨 Design

- Gradientes modernos roxo/azul
- Animações suaves
- Cards com glass effect
- Tipografia profissional
- Ícones Lucide React

### 🔄 Deploy Automático

Após conectar ao Railway:

1. **Build automático** a cada push
2. **Deploy zero-downtime**
3. **HTTPS automático**
4. **Domínio personalizado** disponível
5. **Logs em tempo real**

### 🌍 URL de Produção

Após deploy, o site estará disponível em:
- `https://datavillage-[hash].railway.app`
- Domínio personalizado configurável

### 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

### 📝 Notas

- Projeto otimizado para Railway
- Sem dependências de banco externo
- Dados mockados incluídos
- Pronto para customização

---

**🎯 Data Village ERP Summit 2026 - O Futuro dos Dados Está Aqui!**
