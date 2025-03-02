import { useState } from "react";
import Navlinks from "../sidebar/navlinks";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar() {

    const [category,setCategory] = useState('home')

  return (
    <nav>
      <div className="nav-left">
        <h2>VISWAJITH S</h2>
      </div>
      <ul>
        <li>
          <a href="#" style={{textDecoration:category === 'home'?'underline':''}} onClick={() => setCategory('home')}>Home</a>
        </li>
        <li>
          <a href="#about" style={{textDecoration:category === 'about'?'underline':''}} onClick={() => setCategory('about')}>About Me</a>
        </li>
        <li>
          <a href="#skills" style={{textDecoration:category === 'skills'?'underline':''}} onClick={() => setCategory('skills')}>Skills & Tech Stack</a>
        </li>
        <li>
          <a href="#projects" style={{textDecoration:category === 'projects'?'underline':''}} onClick={() => setCategory('projects')}>Projects</a>
        </li>
        <li>
          <a href="#milestones" style={{textDecoration:category === 'milestones'?'underline':''}} onClick={() => setCategory('milestones')}>Milestones</a>
        </li>
        <li>
          <a href="#events" style={{textDecoration:category === 'events'?'underline':''}} onClick={() => setCategory('events')}>Events</a>
        </li>
        <li>
          <a href="#" style={{textDecoration:category === 'contact'?'underline':''}} onClick={() => setCategory('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
