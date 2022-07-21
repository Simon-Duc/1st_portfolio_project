import axios from "axios";
import { useEffect, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import Navbar from "./Navbar";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });

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
      <section className="h-[90vh] flex flex-col justify-center items-center">
        <h2 className="text-xl m-4">Projects</h2>
        {projects &&
          projects.map((project) => (
            <figure
              key={project.id}
              className="flex flex-col w-[90%] border border-1 p-2 mb-4"
            >
              <h3 className="p-2">{project.name}</h3>

              <figcaption className="p-2">{project.description}</figcaption>
              <button type="button" onClick={open}>
                See more
              </button>
              <Modal>
                <ProjectModal project={project} close={close} />
              </Modal>
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
