import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

import Project from "./project";

export default function Projects() {
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        async function getProjects() {
            const response = await fetch("./project.json");
            const data = await response.json();
            console.log("DATA", data.projects);
            setProjectList(data.projects);
        }
        getProjects();
        console.log("DATA", projectList);
    }, []);
    console.log("DATA", projectList);
    return (
        <section>
            <h1>Projects</h1>
            {projectList.map((project) => (
                <Project project={project} key={project.id} />
            ))}
            {/* <div className="projects">
                <img src="" alt="" />
                <h2>Project Title</h2>
                <p>Subtitle info</p>
                <FontAwesomeIcon icon={faGithub} className="gitIcon" />
            </div>
            <div className="projects">
                <img src="" alt="" />
                <h2>Project Title</h2>
                <p>Subtitle info</p>
                <FontAwesomeIcon icon={faGithub} className="gitIcon" />
            </div>
            <div className="projects">
                <img src="" alt="" />
                <h2>Project Title</h2>
                <p>Subtitle info</p>
                <FontAwesomeIcon icon={faGithub} className="gitIcon" />
            </div> */}
        </section>
    );
}
