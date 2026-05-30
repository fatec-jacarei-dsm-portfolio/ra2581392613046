import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav} aria-label="Navegação principal">
      <ul style={styles.ul} className="nav-list">
        <li style={styles.li}><a href="#perfil" style={styles.a} className="nav-link">01. Perfil</a></li>
        <li style={styles.li}><a href="#portfolio" style={styles.a} className="nav-link">02. Projetos</a></li>
        <li style={styles.li}><a href="#habilidades" style={styles.a} className="nav-link">03. Habilidades</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(20, 121, 11, 0.3)',
    backgroundColor: 'rgba(10, 10, 12, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 100,
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '28px',
  },
  li: {
    textAlign: 'center',
  },
  a: {
    color: '#15ad1c',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'Cascadia Code',
    transition: '0.3s',
    letterSpacing: 0,
  }
} as const;

export default Navbar;
