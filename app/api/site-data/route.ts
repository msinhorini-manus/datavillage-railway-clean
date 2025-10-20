import { NextResponse } from 'next/server'
import { query } from '../../../lib/database'

// Forçar uso do Node.js runtime para compatibilidade com PostgreSQL
export const runtime = 'nodejs'

export async function GET() {
  try {
    // Tentar buscar dados do banco PostgreSQL
    const [
      numerosResult,
      tendenciasResult,
      roisResult,
      setoresResult,
      desafiosResult,
      projecoesResult,
      palestrantesResult,
      passesResult
    ] = await Promise.all([
      query('SELECT * FROM setor_numeros ORDER BY created_at'),
      query('SELECT * FROM tendencias ORDER BY created_at'),
      query('SELECT * FROM rois ORDER BY created_at'),
      query('SELECT * FROM setores ORDER BY created_at'),
      query('SELECT * FROM desafios ORDER BY created_at'),
      query('SELECT * FROM projecoes ORDER BY created_at'),
      query('SELECT * FROM palestrantes ORDER BY created_at'),
      query('SELECT * FROM passes ORDER BY created_at')
    ])

    const siteData = {
      numeros: numerosResult.rows,
      tendencias: tendenciasResult.rows,
      rois: roisResult.rows,
      setores: setoresResult.rows,
      desafios: desafiosResult.rows,
      projecoes: projecoesResult.rows,
      palestrantes: palestrantesResult.rows,
      passes: passesResult.rows
    }

    return NextResponse.json(siteData)
  } catch (error) {
    console.error('Erro ao buscar dados do banco, usando fallback:', error)
    
    // Fallback para dados mockados se o banco não estiver disponível
    const fallbackData = {
      numeros: [
        {
          titulo: "328%",
          subtitulo: "Retorno sobre o investimento",
          descricao: "É o que aponta um estudo da Nucleus Research sobre projetos de BI bem-sucedidos"
        },
        {
          titulo: "450%",
          subtitulo: "Crescimento de produtividade", 
          descricao: "Empresas que implementam BI têm aumento médio de 450% na produtividade das equipes"
        },
        {
          titulo: "73%",
          subtitulo: "Redução no tempo de análise",
          descricao: "Profissionais gastam 73% menos tempo coletando dados e mais tempo analisando"
        }
      ],
      tendencias: [
        {
          nome: "BI e IA",
          percentual: 75,
          descricao: "Das empresas que pretendem investir em inteligência artificial integrada ao BI"
        },
        {
          nome: "Self-Service Analytics",
          percentual: 68,
          descricao: "Dos usuários preferem ferramentas de análise que não dependem de TI"
        },
        {
          nome: "Real-Time Analytics",
          percentual: 82,
          descricao: "Das decisões empresariais precisam de dados em tempo real"
        }
      ],
      rois: [
        {
          titulo: "Redução de custos",
          metrica: "25%",
          descricao: "Em média, em projetos de BI, segundo pesquisa da Aberdeen Group"
        },
        {
          titulo: "Aumento de receita",
          metrica: "15%",
          descricao: "Empresas com BI maduro têm crescimento 15% superior à média do setor"
        }
      ],
      setores: [
        {
          nome: "Saúde",
          percentual: 60,
          descricao: "Adoção de BI para otimização de processos e análise de dados clínicos"
        },
        {
          nome: "Varejo",
          percentual: 78,
          descricao: "Uso de analytics para personalização e otimização de estoque"
        },
        {
          nome: "Financeiro",
          percentual: 85,
          descricao: "Setor líder em adoção de BI para análise de risco e compliance"
        },
        {
          nome: "Manufatura",
          percentual: 52,
          descricao: "Crescimento na adoção para Industry 4.0 e IoT analytics"
        }
      ],
      desafios: [
        {
          nome: "Falta de profissionais qualificados",
          percentual: 45,
          descricao: "Apontam a dificuldade em encontrar talentos especializados em BI"
        },
        {
          nome: "Qualidade dos dados",
          percentual: 38,
          descricao: "Enfrentam problemas com dados inconsistentes ou incompletos"
        },
        {
          nome: "Integração de sistemas",
          percentual: 33,
          descricao: "Têm dificuldades para integrar diferentes fontes de dados"
        }
      ],
      projecoes: [
        {
          metrica: "US$ 48 bilhões",
          titulo: "Mercado de Big Data e Analytics",
          descricao: "É o que o mercado de Big Data e Analytics deve movimentar no Brasil até 2027"
        },
        {
          metrica: "2.3 milhões",
          titulo: "Novos empregos em dados",
          descricao: "Quantidade de vagas que devem ser criadas no setor de dados até 2027"
        },
        {
          metrica: "95%",
          titulo: "Empresas usando BI",
          descricao: "Percentual de empresas médias e grandes que terão BI implementado"
        }
      ],
      palestrantes: [
        {
          nome: "Roberto Fernandes",
          cargo: "Chief Technology Officer",
          empresa: "DataTech Solutions",
          biografia: "Especialista em transformação digital com mais de 15 anos de experiência em BI",
          linkedin: "https://linkedin.com/in/robertofernandes"
        },
        {
          nome: "Ana Silva",
          cargo: "Head of Analytics",
          empresa: "Microsoft Brasil",
          biografia: "Líder em implementação de soluções de analytics em grandes corporações",
          linkedin: "https://linkedin.com/in/anasilva"
        },
        {
          nome: "Carlos Santos",
          cargo: "Data Science Manager",
          empresa: "Banco Itaú",
          biografia: "Pioneiro em machine learning aplicado ao setor financeiro brasileiro",
          linkedin: "https://linkedin.com/in/carlossantos"
        }
      ],
      passes: [
        {
          nome: "Advanced",
          preco: 2500,
          beneficios: "Acesso a todas as palestras, networking coffee e material digital",
          disponivel: true
        },
        {
          nome: "Premium", 
          preco: 4000,
          beneficios: "Tudo do Advanced + workshops exclusivos, almoço networking e certificado",
          disponivel: true
        },
        {
          nome: "Master",
          preco: 6000,
          beneficios: "Tudo do Premium + acesso VIP, sessões 1:1 com palestrantes e jantar exclusivo",
          disponivel: true
        }
      ]
    }

    return NextResponse.json(fallbackData)
  }
}
