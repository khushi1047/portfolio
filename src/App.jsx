import './App.css';

import {Navbar} from './components/Navbar'
import {About} from './components/About'
import { Skills } from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';

function App() {
  return (
    <>
    <div  className=" text-white bg-black">
        <Navbar/>
        <section id="about"><About/></section>
        <section id="skills"><Skills/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
    </div>
  
    </>
  );
}

export default App;
