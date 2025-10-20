'use client'

import { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, TrendingUp, BarChart3, Target, AlertCircle, Zap, Play, ExternalLink } from 'lucide-react'

interface SiteData {
  numeros: Array<{ titulo: string; subtitulo: string; descricao: string }>
  tendencias: Array<{ nome: string; percentual: number; descricao: string }>
  rois: Array<{ titulo: string; metrica: string; descricao: string }>
  setores: Array<{ nome: string; percentual: number; descricao: string }>
  desafios: Array<{ nome: string; percentual: number; descricao: string }>
  projecoes: Array<{ metrica: string; titulo: string; descricao: string }>
  palestrantes: Array<{ nome: string; cargo: string; empresa: string; biografia: string; linkedin?: string }>
  passes: Array<{ nome: string; preco: number; beneficios: string; disponivel: boolean }>
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando Data Village...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-gray-900">DATA VILLAGE</div>
                <div className="text-xs text-gray-500">ERP SUMMIT</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <span className="text-primary-600 font-medium">Março 17-18, 2026</span>
              <span className="text-gray-500">São Paulo</span>
            </div>
            <button className="btn-primary">
              INSCREVA-SE
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <BarChart3 className="w-4 h-4 mr-2" />
            ERP Summit 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg">
            O FUTURO DOS{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              DADOS
            </span>
            <br />
            ESTÁ AQUI!
          </h1>
          
          <div className="flex items-center justify-center space-x-8 text-lg mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              MARÇO 17-18, 2026
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              SÃO PAULO
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-accent text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              INSCREVA-SE AGORA
            </button>
            <button className="btn-outline text-white border-white hover:bg-white hover:text-gray-900">
              <ExternalLink className="w-5 h-5 mr-2" />
              Assista ao recap do summit 2025
            </button>
          </div>
        </div>
      </section>

      {/* Setor em Números */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              O Setor em Números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O mercado de dados e Business Intelligence está em crescimento exponencial. 
              Veja os números que comprovam a importância deste setor para o futuro dos negócios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteData?.numeros?.map((numero, index) => (
              <div key={index} className="stat-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{numero.titulo}</div>
                <div className="stat-label mb-3">{numero.subtitulo}</div>
                <p className="text-gray-600 text-sm">{numero.descricao}</p>
              </div>
            ))}
          </div>

          <div className="card p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-display font-bold">Transformação Digital Acelerada</h3>
            </div>
            <p className="text-lg opacity-90">
              Com a digitalização dos negócios, a demanda por profissionais especializados em dados 
              cresceu 400% nos últimos 3 anos. O ERP Summit conecta você às principais tendências 
              e oportunidades deste mercado em expansão.
            </p>
          </div>
        </div>
      </section>

      {/* Tendências */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Tendências que Moldam o Futuro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O mercado de dados está em constante evolução. Conheça as principais tendências 
              que estão transformando a forma como as empresas utilizam Business Intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData?.tendencias?.map((tendencia, index) => (
              <div key={index} className="card p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{tendencia.percentual}%</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">{tendencia.nome}</h3>
                <p className="text-gray-600">{tendencia.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI em BI */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              ROI em Business Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que investem em BI obtêm retornos significativos em produtividade, 
              tomada de decisão e competitividade no mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {siteData?.rois?.map((roi, index) => (
              <div key={index} className="card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900">{roi.titulo}</h3>
                    <div className="text-2xl font-bold text-accent-600">{roi.metrica}</div>
                  </div>
                </div>
                <p className="text-gray-600">{roi.descricao}</p>
              </div>
            ))}
          </div>

          <div className="card p-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center">
            <h3 className="text-3xl font-display font-bold mb-2">$33Bi</h3>
            <p className="text-xl mb-2">Mercado global de BI em 2024</p>
            <p className="text-lg opacity-90">+11.9% crescimento anual</p>
          </div>
        </div>
      </section>

      {/* BI por Setor */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              BI por Setor da Economia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada setor tem suas particularidades na adoção de Business Intelligence. 
              Veja como diferentes indústrias estão aproveitando o poder dos dados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData?.setores?.map((setor, index) => (
              <div key={index} className="card p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-primary-600 mb-2">{setor.percentual}%</div>
                <h3 className="font-display font-semibold text-gray-900 mb-3">{setor.nome}</h3>
                <p className="text-sm text-gray-600">{setor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desafios */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Principais Desafios do Mercado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apesar do crescimento, o setor de BI ainda enfrenta obstáculos. 
              Conhecer esses desafios é fundamental para superá-los.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {siteData?.desafios?.map((desafio, index) => (
              <div key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
                  <div className="text-2xl font-bold text-red-600">{desafio.percentual}%</div>
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-3">{desafio.nome}</h3>
                <p className="text-gray-600">{desafio.descricao}</p>
              </div>
            ))}
          </div>

          <div className="card p-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-display font-bold">Oportunidade de Mercado</h3>
            </div>
            <p className="text-lg opacity-90">
              Empresas que superam esses desafios têm vantagem competitiva significativa 
              e crescem 2.3x mais rápido que a concorrência.
            </p>
          </div>
        </div>
      </section>

      {/* Projeções 2027 */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Projeções para 2027
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              O futuro dos dados é promissor. Veja as projeções que mostram 
              o potencial de crescimento do setor nos próximos anos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData?.projecoes?.map((projecao, index) => (
              <div key={index} className="glass-card p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-accent-400 mb-2">{projecao.metrica}</div>
                <h3 className="text-xl font-display font-semibold mb-3">{projecao.titulo}</h3>
                <p className="opacity-80">{projecao.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palestrantes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Palestrantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os especialistas que compartilharão seus conhecimentos no evento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData?.palestrantes?.map((palestrante, index) => (
              <div key={index} className="card p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-1">{palestrante.nome}</h3>
                <p className="text-primary-600 font-medium mb-1">{palestrante.cargo}</p>
                <p className="text-gray-600 text-sm mb-3">{palestrante.empresa}</p>
                <p className="text-gray-600 text-sm">{palestrante.biografia}</p>
                {palestrante.linkedin && (
                  <a href={palestrante.linkedin} className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Escolha Seu Passe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diferentes opções para atender suas necessidades e orçamento. 
              Todos os passes incluem acesso ao conteúdo de alta qualidade e networking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteData?.passes?.map((passe, index) => (
              <div key={index} className={`card p-8 text-center animate-slide-up ${index === 1 ? 'ring-2 ring-primary-500 scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {index === 1 && (
                  <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{passe.nome}</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  R$ {passe.preco.toLocaleString('pt-BR')}
                </div>
                <p className="text-gray-600 mb-6">{passe.beneficios}</p>
                <button className={`btn w-full ${index === 1 ? 'btn-primary' : 'btn-outline'}`}>
                  {passe.disponivel ? 'COMPRAR AGORA' : 'ESGOTADO'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold">DATA VILLAGE</div>
                <div className="text-xs text-gray-400">ERP SUMMIT 2026</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              O Futuro dos Dados Está Aqui!
            </p>
            <p className="text-gray-500 text-sm">
              17-18 Março 2026 | São Paulo | Expo Center Norte
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
