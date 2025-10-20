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
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem'
      }}>
        Carregando...
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Header - EXATO da referência */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              background: 'linear-gradient(to right, #10b981, #059669)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.875rem'
            }}>
              📊
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#111827' }}>DATA VILLAGE</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>ERP SUMMIT</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.875rem'
          }}>
            <span style={{ color: '#10b981', fontWeight: '500' }}>Março 17-18, 2026</span>
            <span style={{ color: '#6b7280' }}>São Paulo</span>
          </div>
          <button style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}>
            INSCREVA-SE
          </button>
        </div>
      </header>

      {/* Hero Section - EXATO da referência */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background gradiente EXATO */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem',
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          {/* Badge ERP Summit */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '2rem'
          }}>
            <span style={{ marginRight: '0.5rem' }}>📊</span>
            ERP Summit
          </div>
          
          {/* Título EXATO da referência */}
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            textShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}>
            O FUTURO DOS<br/>
            <span style={{
              background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              DADOS
            </span><br/>
            ESTÁ AQUI!
          </h1>
          
          {/* Data e local */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '1.125rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>📅</span>
              MARÇO 17-18, 2026
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>📍</span>
              SÃO PAULO
            </div>
          </div>
          
          {/* Botões */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            '@media (min-width: 640px)': {
              flexDirection: 'row',
              gap: '1.5rem'
            }
          }}>
            <button style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'background-color 0.3s'
            }}>
              <span style={{ marginRight: '0.5rem' }}>▶</span>
              INSCREVA-SE AGORA
            </button>
            <button style={{
              border: '2px solid white',
              color: 'white',
              backgroundColor: 'transparent',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'all 0.3s'
            }}>
              <span style={{ marginRight: '0.5rem' }}>🔗</span>
              Assista ao recap do summit 2025
            </button>
          </div>
        </div>
      </section>

      {/* Setor em Números */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              O Setor em Números
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              O mercado de dados e Business Intelligence está em crescimento exponencial. 
              Veja os números que comprovam a importância deste setor para o futuro dos negócios.
            </p>
          </div>
          
          {siteData?.numeros && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {siteData.numeros.map((numero, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    {numero.titulo}
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '1rem'
                  }}>
                    {numero.subtitulo}
                  </div>
                  <p style={{ color: '#6b7280' }}>
                    {numero.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <div style={{
            background: 'linear-gradient(to right, #2563eb, #7c3aed)',
            borderRadius: '1rem',
            padding: '2rem',
            color: 'white',
            textAlign: 'center',
            maxWidth: '64rem',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Transformação Digital Acelerada
            </h3>
            <p style={{ fontSize: '1.125rem' }}>
              Com a digitalização dos negócios, a demanda por profissionais especializados em dados 
              cresceu 400% nos últimos 3 anos. O ERP Summit conecta você às principais tendências 
              e oportunidades deste mercado em expansão.
            </p>
          </div>
        </div>
      </section>

      {/* Resto das seções com o mesmo padrão... */}
      {/* Tendências */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Tendências que Moldam o Futuro
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              O mercado de dados está em constante evolução. Conheça as principais tendências 
              que estão transformando a forma como as empresas utilizam Business Intelligence.
            </p>
          </div>
          
          {siteData?.tendencias && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {siteData.tendencias.map((tendencia, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#7c3aed',
                    marginBottom: '0.5rem'
                  }}>
                    {tendencia.percentual}%
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '1rem'
                  }}>
                    {tendencia.nome}
                  </h3>
                  <p style={{ color: '#6b7280' }}>
                    {tendencia.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ROI em BI */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              ROI em Business Intelligence
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              Empresas que investem em BI obtêm retornos significativos em produtividade, 
              tomada de decisão e competitividade no mercado.
            </p>
          </div>
          
          {siteData?.rois && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {siteData.rois.map((roi, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#059669',
                    marginBottom: '0.5rem'
                  }}>
                    {roi.metrica}
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '1rem'
                  }}>
                    {roi.titulo}
                  </div>
                  <p style={{ color: '#6b7280' }}>
                    {roi.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <div style={{
            textAlign: 'center',
            background: 'linear-gradient(to right, #059669, #2563eb)',
            borderRadius: '1rem',
            padding: '2rem',
            color: 'white',
            maxWidth: '32rem',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              $33Bi
            </div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              Mercado global de BI em 2024
            </div>
            <div style={{ fontSize: '1.125rem' }}>
              +11.9% crescimento anual
            </div>
          </div>
        </div>
      </section>

      {/* BI por Setor */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              BI por Setor da Economia
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              Cada setor tem suas particularidades na adoção de Business Intelligence. 
              Veja como diferentes indústrias estão aproveitando o poder dos dados.
            </p>
          </div>
          
          {siteData?.setores && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              {siteData.setores.map((setor, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    {setor.percentual}%
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '0.75rem'
                  }}>
                    {setor.nome}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    {setor.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Desafios */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Principais Desafios do Mercado
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              Apesar do crescimento, o setor de BI ainda enfrenta obstáculos. 
              Conhecer esses desafios é fundamental para superá-los.
            </p>
          </div>
          
          {siteData?.desafios && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {siteData.desafios.map((desafio, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#dc2626',
                    marginBottom: '0.5rem'
                  }}>
                    {desafio.percentual}%
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '1rem'
                  }}>
                    {desafio.nome}
                  </h3>
                  <p style={{ color: '#6b7280' }}>
                    {desafio.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <div style={{
            background: 'linear-gradient(to right, #d97706, #ea580c)',
            borderRadius: '1rem',
            padding: '2rem',
            color: 'white',
            textAlign: 'center',
            maxWidth: '64rem',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Oportunidade de Mercado
            </h3>
            <p style={{ fontSize: '1.125rem' }}>
              Empresas que superam esses desafios têm vantagem competitiva significativa 
              e crescem 2.3x mais rápido que a concorrência.
            </p>
          </div>
        </div>
      </section>

      {/* Projeções */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Projeções para 2027
            </h2>
          </div>
          
          {siteData?.projecoes && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {siteData.projecoes.map((projecao, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '2rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#7c3aed',
                    marginBottom: '1rem'
                  }}>
                    {projecao.metrica}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '1rem'
                  }}>
                    {projecao.titulo}
                  </h3>
                  <p style={{ color: '#6b7280' }}>
                    {projecao.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Palestrantes */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Palestrantes
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280'
            }}>
              Conheça os especialistas que compartilharão seus conhecimentos no evento.
            </p>
          </div>
          
          {siteData?.palestrantes && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {siteData.palestrantes.map((palestrante, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    width: '5rem',
                    height: '5rem',
                    background: 'linear-gradient(to right, #7c3aed, #2563eb)',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'white'
                    }}>
                      {palestrante.nome.charAt(0)}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '0.5rem',
                    color: '#111827'
                  }}>
                    {palestrante.nome}
                  </h3>
                  <p style={{
                    color: '#7c3aed',
                    textAlign: 'center',
                    marginBottom: '0.25rem'
                  }}>
                    {palestrante.cargo}
                  </p>
                  <p style={{
                    color: '#6b7280',
                    textAlign: 'center',
                    marginBottom: '1rem'
                  }}>
                    {palestrante.empresa}
                  </p>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    textAlign: 'center'
                  }}>
                    {palestrante.biografia}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Passes */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Escolha Seu Passe
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              Diferentes opções para atender suas necessidades e orçamento. 
              Todos os passes incluem acesso ao conteúdo de alta qualidade e networking.
            </p>
          </div>
          
          {siteData?.passes && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {siteData.passes.map((passe, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '2rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  ...(passe.nome === 'Premium' ? {
                    outline: '4px solid #7c3aed',
                    transform: 'scale(1.05)'
                  } : {})
                }}>
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#111827',
                      marginBottom: '0.5rem'
                    }}>
                      {passe.nome}
                    </h3>
                    <div style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#7c3aed'
                    }}>
                      R$ {passe.preco.toLocaleString()}
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    {passe.beneficios}
                  </p>
                  
                  <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    ...(passe.nome === 'Premium' ? {
                      backgroundColor: '#7c3aed',
                      color: 'white'
                    } : {
                      backgroundColor: '#e5e7eb',
                      color: '#111827'
                    })
                  }}>
                    Escolher {passe.nome}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.875rem'
            }}>
              📊
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>DATA VILLAGE</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>ERP SUMMIT 2026</div>
            </div>
          </div>
          <p style={{ color: '#9ca3af' }}>
            © 2026 Data Village ERP Summit. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
