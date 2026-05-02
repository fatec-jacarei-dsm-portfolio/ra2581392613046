import React from 'react';

const SkillsSection: React.FC = () => {
  const skillGroups = [
    {
      titulo: "Frontend",
      skills: [
        { nome: "React", icon: "/public/react.svg" },
        { nome: "TypeScript", icon: "/public/typescript.svg" },
        { nome: "HTML5", icon: "/public/html5.svg" },
        { nome: "CSS3 / Tailwind", icon: "/public/css3.svg" }
      ]
    },
    {
      titulo: "Backend & DB",
      skills: [
        { nome: "Python", icon: "/public/python.svg" },
        { nome: "Node.js", icon: "/public/nodejs.svg" },
        { nome: "PostgreSQL", icon: "/public/postgresql.svg" },
        { nome: "SQL Server", icon: "/public/sqlserver.svg" }
      ]
    },
    {
      titulo: "Ferramentas & Outros",
      skills: [
        { nome: "Docker", icon: "/public/docker.svg" },
        { nome: "Git/GitHub", icon: "/public/github.svg" },
        { nome: "Vite", icon: "/public/vite.svg" },
        { nome: "Chocolatey", icon: "/public/chocolatey.svg" }
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>03. Habilidades & Tecnologias</h2>
      
      <p style={styles.introText}>
        Ao longo do curso na FATEC, venho aprimorando minhas competências técnicas através de projetos práticos e colaborativos. Aqui estão as principais tecnologias com as quais trabalho atualmente:
      </p>

      <div style={styles.grid}>
        {skillGroups.map((group, idx) => (
          <div key={idx} style={styles.skillBox}>
            <h3 style={styles.groupTitle}>{group.titulo}</h3>
            <ul style={styles.list}>
              {group.skills.map(skill => (
                <li key={skill.nome} style={styles.listItem}>
                  <img src={skill.icon} alt="" style={styles.skillIcon} />
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
              src="/src/assets/cisco-badge.png" 
              alt="Cisco Badge" 
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