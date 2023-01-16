import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faLaptopCode,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Intro from "./intro";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

export default function App() {
    // const [projectList, setProjectList] = useState([]);

    // useEffect(() => {
    //     async function getProjects() {
    //         const response = await fetch("./project.json");
    //         const data = await response.json();
    //         console.log("DATA", data.projects);
    //         setProjectList(data);
    //     }
    //     getProjects();
    //     console.log("DATA", projectList);
    // }, []);
    return (
        <>
            <BrowserRouter>
                <header>
                    <nav>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                        <Link to="/projects">
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </Link>
                        <Link to="/about">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Link to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </nav>
                    <div className="socialBox">
                        <a
                            href="https://github.com/Jaz-K"
                            target="_blank"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://www.instagram.com/j_angelique_k/"
                            target="_blank"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jasmin-köhler"
                            target="_blank"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
