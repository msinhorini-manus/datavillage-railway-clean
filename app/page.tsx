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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl">Carregando...</div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-900/95 to-blue-600/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">📊</span>
            </div>
            <div>
              <div className="text-green-400 font-bold text-lg">DATA VILLAGE</div>
              <div className="text-green-300 text-sm">ERP SUMMIT</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-green-400 font-semibold">Março 17-18, 2026</div>
            <div className="text-white text-sm">São Paulo</div>
          </div>
          
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            INSCREVA-SE
          </button>
        </div>
      </header>

      {/* Hero Section - Tela Cheia com Gradiente */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600 flex items-center justify-center text-center px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge ERP Summit */}
          <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full mb-12">
            <span className="text-white">📊</span>
            <span className="text-white font-medium">ERP Summit</span>
          </div>
          
          {/* Título Principal - GIGANTE */}
          <h1 className="font-bold mb-12 leading-none" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            <div className="text-white mb-4">O FUTURO DOS</div>
            <div className="text-yellow-400 mb-4" style={{ textShadow: '0 0 30px rgba(255, 193, 7, 0.5)' }}>
              DADOS
            </div>
            <div className="text-white">ESTÁ AQUI!</div>
          </h1>
          
          {/* Data e Local */}
          <div className="text-yellow-400 font-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
            MARÇO 17-18, 2026
          </div>
          <div className="text-white mb-16" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
            SÃO PAULO
          </div>
          
          {/* Botões de Ação */}
          <div className="space-y-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center space-x-3 transition-all transform hover:scale-105 shadow-2xl">
              <span className="text-2xl">▶</span>
              <span>INSCREVA-SE AGORA</span>
            </button>
            
            <div>
              <a href="#" className="text-orange-400 hover:text-orange-300 underline font-medium text-lg">
                Assista ao recap do summit 2025
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Setor em Números - Fundo Escuro */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">O Setor em Números</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              O mercado de dados e Business Intelligence está em crescimento exponencial. 
              Veja os números que comprovam a importância deste setor para o futuro dos negócios.
            </p>
          </div>
          
          {siteData?.numeros && (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {siteData.numeros.map((numero, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-yellow-400 mb-2">
                    {numero.titulo}
                  </div>
                  <div className="text-xl font-semibold mb-4">
                    {numero.subtitulo}
                  </div>
                  <p className="text-gray-300">
                    {numero.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          {/* Card Destaque com Gradiente */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Transformação Digital Acelerada
            </h3>
            <p className="text-lg text-center leading-relaxed">
              Com a digitalização dos negócios, a demanda por profissionais especializados em dados 
              cresceu 400% nos últimos 3 anos. O ERP Summit conecta você às principais tendências 
              e oportunidades deste mercado em expansão.
            </p>
          </div>
        </div>
      </section>

      {/* Tendências - Fundo Claro */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Tendências que Moldam o Futuro
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              O mercado de dados está em constante evolução. Conheça as principais tendências 
              que estão transformando a forma como as empresas utilizam Business Intelligence.
            </p>
          </div>
          
          {siteData?.tendencias && (
            <div className="grid md:grid-cols-3 gap-8">
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

      {/* ROI em BI - Fundo Escuro */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">ROI em Business Intelligence</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Empresas que investem em BI obtêm retornos significativos em produtividade, 
              tomada de decisão e competitividade no mercado.
            </p>
          </div>
          
          {siteData?.rois && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {siteData.rois.map((roi, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">
                    {roi.metrica}
                  </div>
                  <div className="text-xl font-semibold mb-4">
                    {roi.titulo}
                  </div>
                  <p className="text-gray-300">
                    {roi.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-5xl font-bold mb-2">$33Bi</div>
            <div className="text-xl font-semibold mb-2">Mercado global de BI em 2024</div>
            <div className="text-lg">+11.9% crescimento anual</div>
          </div>
        </div>
      </section>

      {/* BI por Setor - Fundo Claro */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              BI por Setor da Economia
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cada setor tem suas particularidades na adoção de Business Intelligence. 
              Veja como diferentes indústrias estão aproveitando o poder dos dados.
            </p>
          </div>
          
          {siteData?.setores && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteData.setores.map((setor, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
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

      {/* Desafios - Fundo Escuro */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Principais Desafios do Mercado
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Apesar do crescimento, o setor de BI ainda enfrenta obstáculos. 
              Conhecer esses desafios é fundamental para superá-los.
            </p>
          </div>
          
          {siteData?.desafios && (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {siteData.desafios.map((desafio, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-red-400 mb-2">
                    {desafio.percentual}%
                  </div>
                  <h3 className="text-lg font-semibold mb-4">
                    {desafio.nome}
                  </h3>
                  <p className="text-gray-300">
                    {desafio.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Oportunidade de Mercado</h3>
            <p className="text-lg">
              Empresas que superam esses desafios têm vantagem competitiva significativa 
              e crescem 2.3x mais rápido que a concorrência.
            </p>
          </div>
        </div>
      </section>

      {/* Projeções - Fundo Claro */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Projeções para 2027
            </h2>
          </div>
          
          {siteData?.projecoes && (
            <div className="grid md:grid-cols-3 gap-8">
              {siteData.projecoes.map((projecao, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-4">
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

      {/* Palestrantes - Fundo Escuro */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Palestrantes</h2>
            <p className="text-xl text-gray-300">
              Conheça os especialistas que compartilharão seus conhecimentos no evento.
            </p>
          </div>
          
          {siteData?.palestrantes && (
            <div className="grid md:grid-cols-3 gap-8">
              {siteData.palestrantes.map((palestrante, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {palestrante.nome.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {palestrante.nome}
                  </h3>
                  <p className="text-purple-400 text-center mb-1">
                    {palestrante.cargo}
                  </p>
                  <p className="text-gray-400 text-center mb-4">
                    {palestrante.empresa}
                  </p>
                  <p className="text-gray-300 text-sm text-center">
                    {palestrante.biografia}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Passes - Fundo Claro */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Escolha Seu Passe
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Diferentes opções para atender suas necessidades e orçamento. 
              Todos os passes incluem acesso ao conteúdo de alta qualidade e networking.
            </p>
          </div>
          
          {siteData?.passes && (
            <div className="grid md:grid-cols-3 gap-8">
              {siteData.passes.map((passe, index) => (
                <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${
                  passe.nome === 'Premium' ? 'ring-4 ring-purple-500 transform scale-105' : ''
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {passe.nome}
                    </h3>
                    <div className="text-4xl font-bold text-purple-600">
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
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">📊</span>
            </div>
            <div>
              <div className="text-green-400 font-bold text-lg">DATA VILLAGE</div>
              <div className="text-green-300 text-sm">ERP SUMMIT 2026</div>
            </div>
          </div>
          <p className="text-gray-400">
            © 2026 Data Village ERP Summit. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
