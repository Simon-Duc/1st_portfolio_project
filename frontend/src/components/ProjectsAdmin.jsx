import axios from "axios";
import { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";

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
  }, [projects]);

  const [selectedProject, setSelectedProject] = useState("");

  const selectedProjectHandler = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <div className="flex flex-col items-center m-4">
      <label htmlFor="project-select" className="text-xl">
        Select the project :
        <select
          id="project-select"
          onChange={selectedProjectHandler}
          className="border p-2 m-2"
        >
          <option value="">---</option>
          {projects?.map((project) => (
            <option value={project.id} key={project.id}>
              {project.name}
            </option>
          ))}
          <option value="Add a project">Add a project</option>
        </select>
      </label>
      {projects && selectedProject === "Add a project" ? (
        <ProjectForm />
      ) : (
        projects
          .filter((project) => project.id === parseInt(selectedProject, 10))
          .map((project) => <ProjectForm key={project.id} project={project} />)
      )}
    </div>
  );
}
