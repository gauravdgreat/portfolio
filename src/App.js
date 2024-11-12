import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
          <p>This is my personal website where I showcase my skills and projects.
          <p style={{ color: "red" }}>Scroll down to learn more about me.</p>

          </p>
        </section>

        <section id="education">
          <h1>Education</h1>
          <ul>
            <li>MCA (2022-24) </li>
            <li>BCA (2019-22)</li>
        </ul>
        </section>

        <section id="skills">
          <h1>Skills</h1>
          <ul>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node JS</li>
            <li>React</li>
            <li>MySQL</li>
        </ul>
        </section>

        <section id="projects">
  <h1>My Projects</h1>
  <ul>
    <li>
      <strong>FindYourItems:</strong>
      <p>
        A web application for reporting your lost and found items.
        <a href="https://github.com/gauravdgreat/findyouritems" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </p>
    </li>

    <li>
      <strong>News Aggregator:</strong>
      <p>
        A web application that fetches and displays news articles from various sources.
        <a href="https://github.com/gauravdgreat/news-aggregator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </p>
    </li>
  </ul>
</section>


        <section id="contacts">
          <h1>Contact Me</h1>
          <button className="cta-link"><a href="mailto:gauravwork24x7@gmail.com">Get in Touch</a></button>
        </section>
      </div>
    </div>
  );
}

export default App;
