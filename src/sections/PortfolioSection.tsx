import React from 'react';

// Interface para organizar os dados dos projetos
interface Projeto {
  titulo: string;
  descricao: string;
  tags: string[];
  link: string;
  categoria: 'Acadêmico' | 'Pessoal' | 'ABP' | 'Acadêmico | Pessoal';
}

const PortfolioSection: React.FC = () => {
  const meusProjetos: Projeto[] = [
    {
      titulo: "Repositório de Banco de Dados Relacional (2º Semestre)",
      descricao: "Repositório contendo arquivos de aulas e atividades da disciplina de Banco de Dados Relacional (2º Semestre), ministradas pela professora Lucineide Pimenta.",
      tags: ["SQL", "PostgreSQL", "Banco de Dados Relacional"],
      link: "https://github.com/NadlaFernandes/FATEC-JCR-2DSM-BDR-2026-1-Nadla-Fernandes-Ferreira", 
      categoria: "Acadêmico"
    },
    {
      titulo: "Servidor Mega-Sena",
      descricao: "Aplicação full-stack com frontend em React e backend em Node.js (Express), utilizando Docker para o banco de dados.",
      tags: ["React", "Node.js", "Docker", "Prisma"],
      link: "https://github.com/NadlaFernandes/Atividade-3-Mega-Sena-Desenvolvimento-Web-II",
      categoria: "Acadêmico"
    },
    {
      titulo: "Site Reciclagem",
      descricao: "Site criado durante o período em que eu estava matriculada no ICT - UNIFESP para a disciplina de Tecnologia e Meio Ambiente (TMA). Tem como objetivo conscientizar as pessoas sobre a importância da reciclagem e como ela pode ajudar a preservar o meio ambiente.",
      tags: ["CSS", "JavaScript", "HTML"],
      link: "https://github.com/NadlaFernandes/nosso-site-reciclagem",
      categoria: "Acadêmico | Pessoal",
    },
    {
      titulo: "API - REST",
      descricao: "Atividade 4 da disciplina de Desenvolvimento Web II, com foco em desenvolver uma aplicação frontend em React TypeScript para consumir a API REST implementada na atividade 1 de Técnicas de Programação I.",
      tags: ["CSS", "TypeScript", "HTML", "Dockerfile"],
      link: "https://github.com/NadlaFernandes/API-REST",
      categoria: "Acadêmico",
    },
    {
      titulo: "React Context",
      descricao: "Desenvolvimento de um aplicativo em React com TypeScript para gerenciamento de dados entre componentes usando props e Context API, com foco no uso prático do React Context. Atividade da disciplina de Desenvolvimento Web II.",
      tags: ["CSS", "TypeScript", "HTML", "JavaScript"],
      link: "https://github.com/NadlaFernandes/Desenvolvimento-Web-II",
      categoria: "Acadêmico",
    },
    {
      titulo: "React Routes",
      descricao: "Desenvolvimento de um aplicativo React com TypeScript para gerar sugestões automáticas de apostas para Mega-Sena.",
      tags: ["TypeScript", "JavaScript", "HTML"],
      link: "https://github.com/NadlaFernandes/atividade-mega-sena", 
      categoria: "Acadêmico"
    },
    {
      titulo: "ABP - Chatbot Fatec Jacareí",
      descricao: "Projeto em desenvolvimento feito pelo grupo Undefined para a ABP, com o objetivo de criar um chatbot para a secretaria acadêmica da FATEC Jacareí. Estou atuando como desenvolvedora backend no projeto.",
      tags: ["TypeScript", "JavaScript", "HTML", "SQL"],
      link: "https://github.com/abpundefined/2DSM-ABP-UNDEFINED", 
      categoria: "ABP"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>02. Projetos & Experiência</h2>
      <p style={styles.sectionNote}>
        * Não possuo projetos anteriores ao 2° semestre.
      </p>
      
      <div style={styles.grid}>
        {meusProjetos.map((proj, index) => (
          <div key={index} style={styles.card} className="portfolio-card">
            <div style={styles.cardHeader}>
              <span style={styles.category}>{proj.categoria}</span>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                style={styles.githubIcon}
                className="project-link"
                aria-label={`Abrir repositório: ${proj.titulo}`}
                title="Abrir repositório"
              >
                🔗
              </a>
            </div>
            
            <h3 style={styles.cardTitle}>{proj.titulo}</h3>
            <p style={styles.cardDesc}>{proj.descricao}</p>
            
            <div style={styles.tagContainer}>
              {proj.tags.map(tag => (
                <span key={tag} style={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#ffffff',
    borderBottom: '1px solid #00ff41',
    display: 'inline-block',
    marginBottom: '12px',
    fontFamily: 'Cascadia Code',
  },
  sectionNote: {
    color: '#cccccc',
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 32px 0',
    maxWidth: '100%',
    whiteSpace: 'normal',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'rgba(3, 20, 4, 0.5)',
    border: '1px solid rgba(10, 129, 6, 0.2)',
    borderRadius: '12px',
    padding: '25px',
    transition: '0.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backdropFilter: 'blur(10px)',
    minHeight: '280px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  category: {
    color: '#00ff41',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  githubIcon: {
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
  cardTitle: {
    color: '#00ff41',
    fontSize: '1.4rem',
    margin: '0 0 15px 0',
  },
  cardDesc: {
    color: '#cccccc',
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    fontFamily: 'Cascadia Code',
    fontSize: '0.8rem',
    color: '#15ad1c',
    backgroundColor: 'rgba(12, 88, 25, 0.1)',
    padding: '4px 8px',
    borderRadius: '4px',
  }
}as const; 
export default PortfolioSection;
