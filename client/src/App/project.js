import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// {
//     img, title, subtitle, git;
// }

export default function Projects({ project }) {
    console.log("IMG", project);
    return (
        <div className="projects">
            <img src={project.img} alt="" />
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
            <a href={project.git}></a>
            <FontAwesomeIcon icon={faGithub} className="gitIcon" />
        </div>
    );
}
