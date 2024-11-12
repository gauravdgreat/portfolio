import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Gaurav Choudhary</h2>
      <ul className="navList">
        <li className="navItem"><a href="#home" className="navLink">Home</a></li>
        <li className="navItem"><a href="#education" className="navLink">Education</a></li>
        <li className="navItem"><a href="#skills" className="navLink">Skills</a></li>
        <li className="navItem"><a href="#projects" className="navLink">Projects</a></li>
        <li className="navItem"><a href="#contacts" className="navLink">Contacts</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
