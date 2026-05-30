import React from 'react';
import ciscoBadge from '../assets/cisco-badge.png';
import reactIcon from '../../public/react.svg';
import typescriptIcon from '../../public/typescript.svg';
import html5Icon from '../../public/html5.svg';
import css3Icon from '../../public/css3.svg';
import pythonIcon from '../../public/python.svg';
import nodejsIcon from '../../public/nodejs.svg';
import postgresqlIcon from '../../public/postgresql.svg';
import sqlserverIcon from '../../public/sqlserver.svg';
import dockerIcon from '../../public/docker.svg';
import githubIcon from '../../public/github.svg';
import viteIcon from '../../public/vite.svg';
import chocolateyIcon from '../../public/chocolatey.svg';

const SkillsSection: React.FC = () => {
  const skillGroups = [
    {
      titulo: "Frontend",
      skills: [
        { nome: "React", icon: reactIcon },
        { nome: "TypeScript", icon: typescriptIcon },
        { nome: "HTML5", icon: html5Icon },
        { nome: "CSS3 / Tailwind", icon: css3Icon }
      ]
    },
    {
      titulo: "Backend & DB",
      skills: [
        { nome: "Python", icon: pythonIcon },
        { nome: "Node.js", icon: nodejsIcon },
        { nome: "PostgreSQL", icon: postgresqlIcon },
        { nome: "SQL Server", icon: sqlserverIcon }
      ]
    },
    {
      titulo: "Ferramentas & Outros",
      skills: [
        { nome: "Docker", icon: dockerIcon },
        { nome: "Git/GitHub", icon: githubIcon },
        { nome: "Vite", icon: viteIcon },
        { nome: "Chocolatey", icon: chocolateyIcon }
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>03. Habilidades & Tecnologias</h2>
      
      <p style={styles.introText}>
        Ao longo do curso na FATEC, venho aprimorando minhas competências técnicas por meio de projetos práticos e colaborativos. Aqui estão as principais tecnologias com as quais trabalho atualmente:
      </p>

      <div style={styles.grid}>
        {skillGroups.map((group, idx) => (
          <div key={idx} style={styles.skillBox}>
            <h3 style={styles.groupTitle}>{group.titulo}</h3>
            <ul style={styles.list}>
              {group.skills.map(skill => (
                <li key={skill.nome} style={styles.listItem}>
                  <img src={skill.icon as string} alt="" style={styles.skillIcon} />
                  {skill.nome}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ESTRUTURA ORGANIZADA*/}
      <div style={styles.finalSection}>
        
        {/* 1. TÍTULO: OUTRAS INFORMAÇÕES */}
        <h3 style={styles.subTitle}>Outras informações</h3>
        
        {/* 2. SEÇÃO DE CERTIFICADOS */}
        <div style={styles.certSection}>
          <p style={styles.label}>Certificados:</p>
          <a 
            href="https://www.credly.com/badges/1745cbff-918f-4041-a31b-5096feed5159/linked_in_profile" 
            target="_blank" 
            rel="noreferrer"
            className="cisco-pop-card"
          >
            <img 
              src={ciscoBadge} 
              alt="Certificado Cisco" 
              style={styles.certImage} 
            />
          </a>
        </div>

        {/* 3. DISPONIBILIDADE  */}
        <div style={styles.infoBar}>
           <p style={styles.infoText}>
             Disponibilidade para estágio e projetos freelance.
           </p>
        </div>
        
      </div>

      <style>{`
        .cisco-pop-card {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-block;
          margin-top: 20px;
        }

        .cisco-pop-card:hover {
          transform: scale(1.15) translateY(-5px);
          filter: drop-shadow(0 0 15px rgba(21, 173, 29, 0.16));
        }
      `}</style>
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
    borderBottom: '1px solid #15ad1c',
    display: 'inline-block',
    marginBottom: '20px',
    fontFamily: 'Cascadia Code, monospace',
  },
  introText: {
    color: '#cccccc',
    fontSize: '1.1rem',
    marginBottom: '40px',
    maxWidth: '800px',
    fontFamily: 'Cascadia Code, monospace',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '30px',
    marginBottom: '50px',
  },
  skillBox: {
    flex: '1',
    minWidth: '200px',
  },
  groupTitle: {
    color: '#15ad1c',
    fontSize: '1.2rem',
    marginBottom: '15px',
    fontFamily: 'Cascadia Code, monospace',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    color: '#e2e2e2',
    marginBottom: '15px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontFamily: 'Cascadia Code, monospace',
  },
  skillIcon: {
    width: '24px',
    height: '24px',
    objectFit: 'contain' as const,
  },
  finalSection: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '25px',
  },
  subTitle: {
    color: '#00ff41',
    fontSize: '1.4rem',
    fontFamily: 'Cascadia Code, monospace',
    margin: 0,
  },
  certSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  label: {
    color: '#00ff41',
    fontSize: '1.4rem',
    fontFamily: 'Cascadia Code, monospace',
    margin: 0,
  },
  certImage: {
    width: '240px',
    height: 'auto',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  infoBar: {
    width: '100%',
    maxWidth: '850px',
    padding: '15px 20px',
    borderLeft: '4px solid #15ad1c', /* Linha verde lateral */
    backgroundColor: 'rgba(21, 173, 28, 0.08)', /* Faixa verde transparente */
    marginTop: '10px',
  },
  infoText: {
    margin: 0,
    color: '#15ad1c',
    fontSize: '1rem',
    fontFamily: 'Cascadia Code, monospace',
  }
} as const;

export default SkillsSection;
