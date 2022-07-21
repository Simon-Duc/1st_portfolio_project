import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
        <h2 className="text-xl m-4">Projects</h2>
        {projects &&
          projects.map((project) => (
            <figure
              key={project.id}
              className="flex flex-col w-[90%] border border-1 p-2 mb-4"
            >
              <h3 className="p-2">{project.name}</h3>
              <img
                className="p-2 w-auto"
                src={project.img_url}
                alt={project.name}
              />
              <figcaption className="p-2">{project.description}</figcaption>
            </figure>
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
