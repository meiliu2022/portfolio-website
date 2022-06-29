import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import '../styles/ProjectDisplay.css';
import { GitHub } from "@material-ui/icons";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
      <div className="projectdisplay">
        <a href="/projects">
          <p><i class="arrow left"></i> Back to all projects
          </p>
        </a>
          <div className="project"> 
            <div className="text-content">
              <span>{project.name}</span>
              <p>{project.description}{project.learningPoints}</p>
              <div className="project-links">
                <div className="text"><a href={project.codeUrl}>View Code</a></div>
                <div className="media"><a href={project.codeUrl}><GitHub /></a></div>
              </div>
              <img src={project.gif} alt=''/>
            </div>
          </div>
      </div>
  );
}

export default ProjectDisplay;
