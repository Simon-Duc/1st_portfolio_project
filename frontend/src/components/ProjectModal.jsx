import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ProjectModal({ project, close }) {
  const [tools, setTools] = useState([]);

  const getTools = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/project_tool/projects/${project.id}`
      )
      .then((response) => {
        setTools(response.data);
      });
  };

  useEffect(() => {
    getTools();
  }, []);

  return (
    <div>
      <figure className="h-[90vh] w-[90vw] bg-white flex flex-col w-[90%] border border-1 p-2 mb-4">
        <div className="flex justify-between">
          <h3 className="p-2">{project.name}</h3>
          <button className="p-2" type="button" onClick={close}>
            x
          </button>
        </div>
        <img className="p-2 w-auto" src={project.img_url} alt={project.name} />
        <figcaption className="p-2">{project.description}</figcaption>
        <ul>
          <li className="p-2">
            Du {project.start_date} au {project.end_date}
          </li>
          <li className="p-2">Developer team : {project.developer_team}</li>
          <div className="flex">
            <a href={project.linkedin_post_link}>
              <li className="p-2 w-8">
                <img src="../src/assets/logo_linkedin.png" alt="LinkedIn" />
              </li>
            </a>
            <a href={project.github_repo_link}>
              <li className="p-2 w-8">
                <img src="../src/assets/logo_github.png" alt="GitHub" />
              </li>
            </a>
          </div>
          <li className="p-2">{project.client_name}</li>
          <ul className="flex flex-wrap">
            <li className="p-2">Tools :</li>
            {tools &&
              tools.map((tool) => (
                <li key={tool.tool_id} className="m-1 p-1 border border-1">
                  {tool.name}
                </li>
              ))}
          </ul>
        </ul>
      </figure>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    developer_team: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    linkedin_post_link: PropTypes.string.isRequired,
    github_repo_link: PropTypes.string.isRequired,
    client_name: PropTypes.string.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
};
