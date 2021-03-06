import Header from './components/header/header'
import IntroSection from './components/intro_section/intro_section'
import AboutMeSection from './components/about_me_section/about_me_section'
import ServicesSection from './components/services_section/services_section.jsx'
import RecentWorks from './components/recent_works/recent_works'
import AOS from 'aos';
import "aos/dist/aos.css"

AOS.init({
  once: true,
  mirror: true
});

function App() {
  return (
    <div className="App">
      <Header/>
      <IntroSection/>
      <AboutMeSection/>
      <ServicesSection/>
      <RecentWorks/>
    </div>
  );
}

export default App;
