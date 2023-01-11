import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);
  const items = projects.map((project)=>{
    return <ProjectItem
     key= {project.id}
     name={project.name}
     about={project.about}
     technologies={project.technologies} 
     />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {items}
               
      </div>
    </div>
  );
}

export default ProjectList;
