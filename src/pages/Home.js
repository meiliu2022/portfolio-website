import React from "react";
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from "@material-ui/icons";
import '../styles/Home.css'

function Home() {
  return(
    <div className="home">
      <div className="about">
        <div className="intro">
          <span>Hi, my name is</span>
          <p>Mei Liu</p>  
        </div>
        <div className="prompt"> 
              A passionate coder and a new gradudate who loves learning new techniques and technologies,
              coupled with great enthuisation of creating different projects and solving problems. As of now,
              I am a fresher and I am currently looking for a suitable job to start my career of software developer.
              
        </div>

        <div className="media">
            <a href="https://www.linkedin.com/in/liu-mei-2218a81b2/"><LinkedIn /> </a>
            <a href="https://github.com/meiliu2022"><GitHub /> </a>
        </div>

      </div>
    
      <div className="skills"> 
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span> 
              ReactJS, Angular, Redux, HTML, CSS, Flutter, NPM,
              BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, MySQL, MongoDB, MS SQL, Sqflite
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>Java, JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div>

      </div>
  );
}

export default Home;
