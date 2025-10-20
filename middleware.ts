import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Função para inicializar o banco na primeira requisição
let dbInitialized = false

export async function middleware(request: NextRequest) {
  // Inicializar banco apenas uma vez
  if (!dbInitialized && process.env.DATABASE_URL) {
    try {
      const { initDatabase } = await import('./lib/database')
      await initDatabase()
      dbInitialized = true
      console.log('✅ Database initialized via middleware')
    } catch (error) {
      console.error('❌ Error initializing database in middleware:', error)
      // Continuar mesmo se o banco falhar - usaremos fallback
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}
