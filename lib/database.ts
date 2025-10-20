import { Pool } from 'pg'

// Configuração do PostgreSQL usando variáveis de ambiente do Railway
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

// Função para executar queries
export async function query(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

// Função para inicializar o banco de dados
export async function initDatabase() {
  try {
    // Criar tabelas se não existirem
    await query(`
      CREATE TABLE IF NOT EXISTS cotas (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        valor DECIMAL(10,2) NOT NULL,
        beneficios TEXT,
        vagas INTEGER DEFAULT 0,
        vagas_ocupadas INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS patrocinadores (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cota_id INTEGER REFERENCES cotas(id),
        website VARCHAR(255),
        descricao TEXT,
        logo VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS palestrantes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cargo VARCHAR(255),
        empresa VARCHAR(255),
        biografia TEXT,
        linkedin VARCHAR(255),
        foto VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS sessoes (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        descricao TEXT,
        data DATE,
        horario_inicio TIME,
        horario_fim TIME,
        palestrante_id INTEGER REFERENCES palestrantes(id),
        sala VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS passes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        preco DECIMAL(10,2) NOT NULL,
        beneficios TEXT,
        disponivel BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS setor_numeros (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        subtitulo VARCHAR(255),
        descricao TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS tendencias (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        percentual INTEGER,
        descricao TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS rois (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        metrica VARCHAR(100),
        descricao TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS setores (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        percentual INTEGER,
        descricao TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS desafios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        percentual INTEGER,
        descricao TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS projecoes (
        id SERIAL PRIMARY KEY,
        metrica VARCHAR(255) NOT NULL,
        titulo VARCHAR(255),
        descricao TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    console.log('✅ Database initialized successfully')
    
    // Inserir dados iniciais se as tabelas estiverem vazias
    await insertInitialData()
    
  } catch (error) {
    console.error('❌ Error initializing database:', error)
    throw error
  }
}

// Função para inserir dados iniciais
async function insertInitialData() {
  try {
    // Verificar se já existem dados
    const cotasResult = await query('SELECT COUNT(*) FROM cotas')
    const cotasCount = parseInt(cotasResult.rows[0].count)

    if (cotasCount === 0) {
      // Inserir cotas iniciais
      await query(`
        INSERT INTO cotas (nome, valor, beneficios, vagas) VALUES
        ('Master', 60000, 'Stand premium 36m², 12 credenciais VIP, logo exclusivo, palestra keynote', 3),
        ('Premium', 40000, 'Stand estratégico 24m², 8 credenciais, logo destacado, workshop exclusivo', 5),
        ('Advanced', 25000, 'Stand 12m², 6 credenciais, logo no material, networking coffee', 8)
      `)

      // Inserir passes iniciais
      await query(`
        INSERT INTO passes (nome, preco, beneficios, disponivel) VALUES
        ('Advanced', 2500, 'Acesso a todas as palestras, networking coffee e material digital', true),
        ('Premium', 4000, 'Tudo do Advanced + workshops exclusivos, almoço networking e certificado', true),
        ('Master', 6000, 'Tudo do Premium + acesso VIP, sessões 1:1 com palestrantes e jantar exclusivo', true)
      `)

      // Inserir dados do setor
      await query(`
        INSERT INTO setor_numeros (titulo, subtitulo, descricao) VALUES
        ('328%', 'Retorno sobre o investimento', 'É o que aponta um estudo da Nucleus Research sobre projetos de BI bem-sucedidos'),
        ('450%', 'Crescimento de produtividade', 'Empresas que implementam BI têm aumento médio de 450% na produtividade das equipes')
      `)

      // Inserir tendências
      await query(`
        INSERT INTO tendencias (nome, percentual, descricao) VALUES
        ('BI e IA', 75, 'Das empresas que pretendem investir em inteligência artificial integrada ao BI'),
        ('Self-Service Analytics', 68, 'Dos usuários preferem ferramentas de análise que não dependem de TI')
      `)

      console.log('✅ Initial data inserted successfully')
    }
  } catch (error) {
    console.error('❌ Error inserting initial data:', error)
  }
}

export default pool
