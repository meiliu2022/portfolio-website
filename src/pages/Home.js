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
        A passionate coder and a new graduate who loves learning new techniques and technologies, coupled with great enthuisation of creating different projects and solving problems. As of now, I am a fresher and I am currently looking for a suitable job to start my career.
              
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
              React, Angular, Redux, HTML, CSS, PowerBI, Flutter, BootStrap, Material UI, Android
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              Node.js, SpringBoot, Express.js, MySQL, Teradata, MS SQL Server, MongoDB, Sqflite
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
