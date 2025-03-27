import { FaTimes } from "react-icons/fa";
import "./navlinks.css";
import { useState } from "react";

export default function Navlinks({ displaySidebar,toggleSidebar }) {
  //  {displaySidebar && <span>Hello</span>}
  return (
    <div className="sidebar" style={{transform:displaySidebar?'translateX(0%)':'translateX(100%)'}}>
    <ul className="sidebar-links">
      <FaTimes className="close-icon" onClick={toggleSidebar} size={27} />
      <li onClick={toggleSidebar}>
        <a href="#home">Home</a>
      </li>
      <li onClick={toggleSidebar}>
        <a href="#about">About Me</a>
      </li>
      <li onClick={toggleSidebar}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={toggleSidebar}>
        <a href="#services">Services</a>
      </li>
      <li onClick={toggleSidebar}>
        <a href="#contact">Contact Me</a>
      </li>
    </ul>
    </div>
    
  );
}
