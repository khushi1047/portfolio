import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';

function App() {
  return (
    <>
    <div className="bg-black text-white w-full">
  
         <Navbar />
      
      <section id="about" className="p-45"><About /></section>

      <section id="skills" className="min-h-screen"><Skills /></section>

      <section id="projects" className="min-h-screen "><Projects /></section>

      <section id="contact" className="min-h-screen "><Contact /></section>
    
     
    </div>
    </>
  );
}

export default App;
