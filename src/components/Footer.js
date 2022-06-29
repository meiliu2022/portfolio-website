import React from "react";
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from "@material-ui/icons";
import { Email } from '@material-ui/icons';
import '../styles/Footer.css';

const Footer = () => {
  return( 
    <div className="footer">
      <p> Connect with me</p>
        <div className="socialMedia"> 
            <a href="mailto:meiliu.mtl@gmail.com"><Email /> </a>
            <a href="https://www.linkedin.com/in/liu-mei-2218a81b2/"><LinkedIn /></a>
            <a href="https://github.com/meiliu2022"><GitHub /> </a>
        </div>
        <span> Copyright &copy; Mei Liu 2022</span>
    </div>
  )
};

export default Footer;
