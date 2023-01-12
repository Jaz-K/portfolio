import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faLaptopCode,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

import Intro from "./intro";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

export default function App() {
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
