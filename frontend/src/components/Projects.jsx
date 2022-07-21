import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Project from "./Project";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/projects`
      )
      .then((response) => {
        setProjects(response.data);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div id="projects">
      <Navbar />
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-2xl m-4">Projects</h2>
        {projects &&
          projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </section>
      <section className="h-[5vh] flex flex-col justify-center items-center">
        <a href="#contact">
          <img src="../src/assets/chevron.png" alt="Chevron" className="w-6" />
        </a>
      </section>
    </div>
  );
}
