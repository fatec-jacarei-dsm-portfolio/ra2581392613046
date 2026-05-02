import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><a href="#Perfil" style={styles.a}>01. Perfil</a></li>
        <li style={styles.li}><a href="#Projetos" style={styles.a}>02. Projetos</a></li>
        <li style={styles.li}><a href="#Habilidades" style={styles.a}>03. Habilidades</a></li>
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
    height: '70px',
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
    gap: '40px', // Espaço entre os itens do menu
  },
  li: {
    textAlign: 'center',
  },
  a: {
    color: '#15ad1c',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Cascadia Code',
    transition: '0.3s',
    letterSpacing: '1px',
  }
} as const;

export default Navbar;