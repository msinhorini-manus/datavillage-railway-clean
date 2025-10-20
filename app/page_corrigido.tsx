'use client'

import { useState, useEffect } from 'react'

interface SiteData {
  numeros: Array<{
    titulo: string
    subtitulo: string
    descricao: string
  }>
  tendencias: Array<{
    nome: string
    percentual: number
    descricao: string
  }>
  rois: Array<{
    titulo: string
    metrica: string
    descricao: string
  }>
  setores: Array<{
    nome: string
    percentual: number
    descricao: string
  }>
  desafios: Array<{
    nome: string
    percentual: number
    descricao: string
  }>
  projecoes: Array<{
    metrica: string
    titulo: string
    descricao: string
  }>
  palestrantes: Array<{
    nome: string
    cargo: string
    empresa: string
    biografia: string
    linkedin: string
  }>
  passes: Array<{
    nome: string
    preco: number
    beneficios: string
    disponivel: boolean
  }>
}

export default function HomePage() {
  const [siteData, setSiteData] = useState<SiteData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => {
        setSiteData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro ao carregar dados:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen hero-gradient flex items-center justify-center text-white text-2xl">
        Carregando...
      </div>
    )
  }

  return (
    <>
      <style jsx global>{`
        .hero-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .text-shadow-lg {
          text-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <div className="bg-white">
        {/* Header - EXATO da referência com cores corretas */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Verde com texto correto */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div>
                  <div className="font-bold text-white">DATA VILLAGE</div>
                  <div className="text-xs text-green-600 font-semibold">ERP SUMMIT</div>
                </div>
              </div>
              
              {/* Data e Local - Centralizados */}
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <span className="text-white font-medium">Março 17-18, 2026</span>
                <span className="text-white">São Paulo</span>
              </div>
              
              {/* Botão Vermelho */}
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                INSCREVA-SE
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section - EXATO da referência com gradiente correto */}
        <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            {/* Badge ERP Summit - Fundo escuro */}
            <div className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm font-medium mb-8">
              <span className="mr-2">📊</span>
              ERP Summit
            </div>
            
            {/* Título GIGANTE - EXATO da referência com "DADOS" em amarelo */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-8 leading-tight text-shadow-lg">
              O FUTURO DOS<br/>
              <span className="text-yellow-400">
                DADOS
              </span><br/>
              ESTÁ AQUI!
            </h1>
            
            {/* Data e local - Amarelo para data */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xl mb-10">
              <div className="text-yellow-400 font-bold text-2xl">
                MARÇO 17-18, 2026
              </div>
              <div className="text-white text-lg">
                SÃO PAULO
              </div>
            </div>
            
            {/* Botões - Verde e Laranja */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors inline-flex items-center">
                <span className="mr-3 text-2xl">▶</span>
                INSCREVA-SE AGORA
              </button>
            </div>
            
            {/* Link Laranja */}
            <div className="text-center">
              <a href="#" className="text-orange-400 hover:text-orange-300 font-semibold text-lg underline transition-colors">
                Assista ao recap do summit 2025
              </a>
            </div>
          </div>
        </section>

        {/* Setor em Números */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                O Setor em Números
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                O mercado de dados e Business Intelligence está em crescimento exponencial. 
                Veja os números que comprovam a importância deste setor para o futuro dos negócios.
              </p>
            </div>
            
            {siteData?.numeros && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {siteData.numeros.map((numero, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                      {numero.titulo}
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-4">
                      {numero.subtitulo}
                    </div>
                    <p className="text-gray-600">
                      {numero.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Transformação Digital Acelerada
              </h3>
              <p className="text-lg">
                Com a digitalização dos negócios, a demanda por profissionais especializados em dados 
                cresceu 400% nos últimos 3 anos. O ERP Summit conecta você às principais tendências 
                e oportunidades deste mercado em expansão.
              </p>
            </div>
          </div>
        </section>

        {/* Tendências */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Tendências que Moldam o Futuro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                O mercado de dados está em constante evolução. Conheça as principais tendências 
                que estão transformando a forma como as empresas utilizam Business Intelligence.
              </p>
            </div>
            
            {siteData?.tendencias && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteData.tendencias.map((tendencia, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {tendencia.percentual}%
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {tendencia.nome}
                    </h3>
                    <p className="text-gray-600">
                      {tendencia.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ROI em BI */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                ROI em Business Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empresas que investem em BI obtêm retornos significativos em produtividade, 
                tomada de decisão e competitividade no mercado.
              </p>
            </div>
            
            {siteData?.rois && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {siteData.rois.map((roi, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {roi.metrica}
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-4">
                      {roi.titulo}
                    </div>
                    <p className="text-gray-600">
                      {roi.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <div className="text-4xl font-bold mb-2">$33Bi</div>
              <div className="text-xl font-semibold mb-2">Mercado global de BI em 2024</div>
              <div className="text-lg">+11.9% crescimento anual</div>
            </div>
          </div>
        </section>

        {/* BI por Setor */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                BI por Setor da Economia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada setor tem suas particularidades na adoção de Business Intelligence. 
                Veja como diferentes indústrias estão aproveitando o poder dos dados.
              </p>
            </div>
            
            {siteData?.setores && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {siteData.setores.map((setor, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {setor.percentual}%
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {setor.nome}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {setor.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Desafios */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Principais Desafios do Mercado
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Apesar do crescimento, o setor de BI ainda enfrenta obstáculos. 
                Conhecer esses desafios é fundamental para superá-los.
              </p>
            </div>
            
            {siteData?.desafios && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {siteData.desafios.map((desafio, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {desafio.percentual}%
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {desafio.nome}
                    </h3>
                    <p className="text-gray-600">
                      {desafio.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Oportunidade de Mercado
              </h3>
              <p className="text-lg">
                Empresas que superam esses desafios têm vantagem competitiva significativa 
                e crescem 2.3x mais rápido que a concorrência.
              </p>
            </div>
          </div>
        </section>

        {/* Projeções */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Projeções para 2027
              </h2>
            </div>
            
            {siteData?.projecoes && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteData.projecoes.map((projecao, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-4">
                      {projecao.metrica}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {projecao.titulo}
                    </h3>
                    <p className="text-gray-600">
                      {projecao.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Palestrantes */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Palestrantes
              </h2>
              <p className="text-xl text-gray-600">
                Conheça os especialistas que compartilharão seus conhecimentos no evento.
              </p>
            </div>
            
            {siteData?.palestrantes && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteData.palestrantes.map((palestrante, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {palestrante.nome.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2 text-gray-900">
                      {palestrante.nome}
                    </h3>
                    <p className="text-purple-600 text-center mb-1">
                      {palestrante.cargo}
                    </p>
                    <p className="text-gray-600 text-center mb-4">
                      {palestrante.empresa}
                    </p>
                    <p className="text-gray-600 text-sm text-center">
                      {palestrante.biografia}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Passes */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Escolha Seu Passe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diferentes opções para atender suas necessidades e orçamento. 
                Todos os passes incluem acesso ao conteúdo de alta qualidade e networking.
              </p>
            </div>
            
            {siteData?.passes && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteData.passes.map((passe, index) => (
                  <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${
                    passe.nome === 'Premium' ? 'ring-4 ring-purple-600 transform scale-105' : ''
                  }`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {passe.nome}
                      </h3>
                      <div className="text-3xl font-bold text-purple-600">
                        R$ {passe.preco.toLocaleString()}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-center">
                      {passe.beneficios}
                    </p>
                    
                    <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      passe.nome === 'Premium' 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}>
                      Escolher {passe.nome}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              <div>
                <div className="font-bold">DATA VILLAGE</div>
                <div className="text-sm text-gray-400">ERP SUMMIT 2026</div>
              </div>
            </div>
            <p className="text-gray-400">
              © 2026 Data Village ERP Summit. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
