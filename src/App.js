
import Header from './Component/Header';
import './Component/Header.css';
import './App.css';
import About from './Component/About';
import './Component/About.css'
import Skills from './Component/Skills';
import './Component/Skills.css'
import './Component/Project.css'
import Project from './Component/Project';
import Experience from './Component/Experience';
import './Component/Experience.css'
import Contact from './Component/Contact';
import './Component/Contact.css'

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Skills/>
     <Project/>
     <Experience/>
     <Contact/>
    </div>
  );
}

export default App;
