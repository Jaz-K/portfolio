import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    return (
        <section>
            <h1>Projects</h1>

            <div className="projects">
                <img src="" alt="" />
                <h2>Project Title</h2>
                <p>Subtitle info</p>
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </section>
    );
}
