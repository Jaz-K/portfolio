import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
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
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
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
