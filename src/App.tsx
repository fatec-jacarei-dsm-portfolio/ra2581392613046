import BinaryBackground from './components/BinaryBackground';
import Navbar from './components/Navbar';
import ProfileSection from './sections/ProfileSection';
import PortfolioSection from './sections/PortfolioSection';
import SkillsSection from './sections/SkillsSection';
import PixelArtFooter from './components/SecretLord';

function App() {
  return (
    <>
      <BinaryBackground />
      <Navbar />
      
      {/* Removido o marginLeft e ajustado o topo */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 20px 0 20px' // 80px de topo para compensar a altura do menu
      }}>
        
        <section id="perfil" style={sectionStyle}>
          <ProfileSection />
        </section>

        <section id="portfolio" style={sectionStyle}>
          <PortfolioSection />
        </section>

        <section id="habilidades" style={sectionStyle}>
          <SkillsSection />
        </section>

        <PixelArtFooter />
      </div>
    </>
  );
}

const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderBottom: '1px solid rgb(0, 255, 13)',
}as const;
export default App;