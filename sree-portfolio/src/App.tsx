import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ExperienceSection from '@/components/ExperienceSection';
import WorkSection from '@/components/WorkSection';
import Contact from '@/components/Contact';
import SocialSidebar from '@/components/SocialSidebar';
import EmailSidebar from '@/components/EmailSidebar';
import Footer from '@/components/Footer';
import '@/styles/layout.css';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SocialSidebar />
      <EmailSidebar />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ExperienceSection />
        <WorkSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
