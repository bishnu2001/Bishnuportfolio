import './App.css';
import Header from"./components/header/Header";
import Navbar from"./components/navbar/Navbar";
import About from"./components/About/About";
import Experience from"./components/experience/Experience";
import Services from"./components/services/Services";
import Portfolio from"./components/portfolio/Portfolio";
import Contact from"./components/Contact/Contact";
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
