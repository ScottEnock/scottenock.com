import React from 'react'
import {graphql, useStaticQuery} from "gatsby"

const ProjectsList = () => {
    

    const data = useStaticQuery(graphql`
      {
        file(extension: {eq: "json"}, sourceInstanceName: {eq: "data"}, name: {eq: "projects"}) {
          childrenProjectsJson {
            id
            link
            title
            description
            image {
              childImageSharp {
                fixed(width: 50) {
                  src
                }
              }
            }
          }
        }
      }      
    `);

    const projects = data.file.childrenProjectsJson

    return (
        <div className="projects">
            <h2>Released Projects</h2>
            {projects.map( project => (
                <div className="project" key={project.id}>
                    <img src={project.image.childImageSharp.fixed.src} alt=""/>
                    <div className="content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer"><button>Visit</button></a> : <button disabled>Beta</button> }
                </div>
            ) )}
        </div>
    )
}

export default ProjectsList
