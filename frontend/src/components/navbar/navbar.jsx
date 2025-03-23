import { useState } from "react";
import Navlinks from "../sidebar/navlinks";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar({toggleSidebar}) {
  
    const [category,setCategory] = useState('home')

  return (
    <nav>
      <div className="nav-left">
        <h3><span>VISW</span>A<span>JITH</span>.S </h3>
      </div>
      <FaBars onClick={toggleSidebar} className="display-sidebar"/>
      <ul>
        <li className={category === 'home'?'is-active':''}>
          <a href="#home" onClick={() => setCategory('home')}>Home</a>
        </li>
        <li className={category === 'about'?'is-active':''}>
          <a href="#about" onClick={() => setCategory('about')}>About Me</a>
        </li>
        <li className={category === 'projects'?'is-active':''}>
          <a href="#projects" onClick={() => setCategory('projects')}>Projects</a>
        </li>
        <li className={category === 'services'?'is-active':''}>
          <a href="#services" onClick={() => setCategory('services')}>Services</a>
        </li>
        <li className={category === 'events'?'is-active':''}>
          <a href="#events" onClick={() => setCategory('events')}>Events</a>
        </li>
        <li className={category === 'contact'?'is-active':''}>
          <a href="#contact" onClick={() => setCategory('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
