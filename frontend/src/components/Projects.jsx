import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useModal } from "react-hooks-use-modal";
import Navbar from "./Navbar";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });

  const myRef = useRef(null);

  // const scrollTo = (ref) => {
  //   if (ref && ref.current /* + other conditions */) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     event.preventDefault();
  //     window.scrollTo(0, offsetTop);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  // }, []);

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
    <div id="projects" ref={myRef}>
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
              <button type="button" onClick={open}>
                See more
              </button>
              <Modal>
                <ProjectModal
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  imgUrl={project.img_url}
                  clientName={project.client_name}
                  startDate={project.start_date}
                  endDate={project.end_date}
                  developerTeam={project.developer_team}
                  linkedinPostLink={project.linkedin_post_link}
                  githubRepoLink={project.github_repo_link}
                  close={close}
                />
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
