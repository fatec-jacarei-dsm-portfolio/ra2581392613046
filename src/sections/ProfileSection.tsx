import React from 'react';
import minhaFoto from '../assets/foto-perfil.jpg'; 
import faculdadeFoto from '../assets/fatec-jacarei.jpg'; 
import '../App.css'; 

const ProfileSection: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Lado Esquerdo: Texto e Botões */}
        <div style={styles.textSide}>
          <h2 style={styles.greeting}>Olá! Bem vindo ao meu portifólio eu me chamo</h2>
          <h1 style={styles.name}>Nadla Fernandes Ferreira</h1>
          <h3 style={styles.role}>Desenvolvedora de Software em Formação</h3>
          
          <div style={styles.bio}>
            <p>
              Sou estudante de Desenvolvimento de Software Multiplataforma na 
              <span style={styles.highlight}> FATEC Jacareí - Professor Francisco de Moura</span>, 
              estando atualmente no 2° semestre do curso. Gosto de resolver problemas através do código com foco em sistemas e aplicações web versáteis utilizando tecnologias como:
              React, TypeScript e Python. Aqui no meu portifólio esta disponivel algumas informações minhas e de projetos feitos durante minha trajetoria no curso. Fique à vontade para ver!  
            </p>
          </div>

          <div style={styles.buttonContainer}>
            <a href="#portfolio" style={styles.button}>Ver Projetos</a>
            
            {/* Botão LinkedIn Ajustado com Ícone */}
            <a 
              href="https://www.linkedin.com/in/nadla-ferreira-4646433a8/" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.outlineButton}
            >
              {/* O ÍCONE DO PUBLIC AQUI */}
              <img 
                src="Linkedin.svg" 
                alt="LinkedIn" 
                style={{ width: '20px', height: '20px' }} 
              />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Lado Direito: Círculos Sobrepostos */}
        <div style={styles.imageSide}>
          <div className="venn-wrapper stacked-layout"> 
            
            {/* Círculo 1: Minha Foto */}
            <div className="venn-circle primary">
              <img src={minhaFoto} alt="Nadla" className="venn-img" />
            </div>
            
            {/* Círculo 2: Fatec Jacareí */}
            <div className="venn-circle secondary">
              <img src={faculdadeFoto} alt="FATEC Jacareí" className="venn-img" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: 'transparent',
    position: 'relative' as const,
    zIndex: 1,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    flexWrap: 'wrap' as const,
  },
  textSide: {
    flex: 1,
    minWidth: '300px',
  },
  greeting: {
    color: '#00ff41',
    fontFamily: 'Cascadia Code, monospace',
    fontSize: '1.2rem',
    margin: 0,
  },
  name: {
    fontSize: '3.5rem',
    margin: '10px 0',
    color: '#ffffff',
  },
  role: {
    fontSize: '1.5rem',
    color: '#15ad1c',
    marginBottom: '20px',
  },
  highlight: {
    color: '#00ff41',
    fontWeight: 'bold' as const,
  },
  bio: {
    lineHeight: '1.6',
    fontSize: '1.1rem',
    maxWidth: '600px',
    color: '#cccccc',
  },
  imageSide: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    minWidth: '400px',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    marginTop: '30px',
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#15ad1c',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold' as const,
    display: 'inline-flex',
    alignItems: 'center',
  },
  outlineButton: {
    padding: '12px 25px',
    border: '1px solid #15ad1c',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold' as const,
    /* Alinhamento para o ícone e texto ficarem na mesma linha */
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
  },
} as const;

export default ProfileSection;