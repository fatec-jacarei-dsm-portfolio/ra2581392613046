//Meu dog se chama Lord, então decidi criar um easter egg com ele aparecendo no rodapé do site. Ele é um sprite pixel art que fica escondido e só aparece quando o rodapé entra na tela. Quando o usuário passa o mouse sobre ele, ele começa a andar, mostrando uma animação de caminhada. É uma forma divertida de agradecer aos visitantes e adicionar um toque de personalidade ao site!
import React, { useEffect, useRef, useState } from 'react';
import lordSprite from '../assets/lordSprite.png'; 

const PixelArtFooter: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = footerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <footer ref={footerRef} style={styles.footer}>
      <div style={styles.content}>
        {/* Bloco Principal ajustado para centralização vertical */}
        <div style={styles.mainInfo}>
          <div style={styles.thanksWrapper}>
            <div style={styles.titleRow}>
               <h2 style={styles.thanksText}>Obrigada pela visita ao meu repositório!</h2>
            </div>
            {/* Frase agora posicionada abaixo do título */}
            <h4 style={styles.info}>Para entrar em contato acesse:</h4>
          </div>

          <div style={styles.contactLinks}>
            <a href="https://github.com/NadlaFernandes" target="_blank" rel="noreferrer" style={styles.linkItem}>
              <img src="/public/github (2).svg" alt="" style={styles.smallIcon} />
              <span>/NadlaFernandes</span>
            </a>

            <a href="mailto:nf17476@gmail.com" style={styles.linkItem}>
              <img src="/public/gmail.svg" alt="" style={styles.smallIcon} />
              <span>nf17476@gmail.com</span>
            </a>
          </div>
        </div>

        <p style={styles.copy}>
          © 2026 - Desenvolvido com React + Vite para FATEC Jacareí
        </p>
      </div>

      {/* LORD SPRITE */}
      <div className={`lord-fixed-container ${visible ? 'show' : ''}`}>
        <div className="lord-pixel-sprite"></div>
      </div>

      <style>{`
        .lord-pixel-sprite {
          width: 128px;
          height: 128px; 
          background-image: url(${lordSprite});
          background-repeat: no-repeat;
          background-position: 0px 0px;
          image-rendering: pixelated;
          opacity: 0.1; 
          transition: opacity 0.4s ease;
          transform: scale(2.2); 
          transform-origin: bottom right; 
        }

        .lord-fixed-container {
          position: fixed;
          bottom: 0px;
          right: 0px;
          z-index: 99;
          cursor: help;
          line-height: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .lord-fixed-container.show {
          opacity: 1;
          pointer-events: auto;
        }

        .lord-fixed-container:hover .lord-pixel-sprite {
          opacity: 1; 
          animation: walkLord 0.8s steps(5) infinite;
        }

        @keyframes walkLord {
          from { background-position: 0px; }
          to { background-position: -640px; }
        }
      `}</style>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'relative' as const,
    marginTop: '10px',
    padding: '40px 0',
    textAlign: 'center' as const,
    backgroundColor: 'transparent',
    width: '100%',
    overflow: 'visible', 
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '10px',
  },
  mainInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
  },
  thanksWrapper: {
    display: 'flex',
    flexDirection: 'column' as const, /* Mudado para column para quebrar a linha */
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    color: '#00ff41',
    fontFamily: 'Cascadia Code, monospace',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  thanksText: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold' as const,
  },
  info: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#028523',
    fontWeight: 'normal' as const,
  },
  pcIcon: {
    fontSize: '2rem',
  },
  contactLinks: {
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: '#00ff41',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontFamily: 'Cascadia Code, monospace',
  },
  smallIcon: {
    width: '60px',
    height: '60px',
  },
  copy: {
    color: '#666',
    fontSize: '1rem',
    fontFamily: 'Cascadia Code, monospace',
  }
} as const;

export default PixelArtFooter;