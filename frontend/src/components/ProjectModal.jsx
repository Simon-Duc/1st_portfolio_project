import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ProjectModal({
  id,
  name,
  description,
  startDate,
  endDate,
  imgUrl,
  developerTeam,
  linkedinPostLink,
  githubRepoLink,
  clientName,
  close,
}) {
  const [tools, setTools] = useState([]);

  const getTools = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/project_tool/projects/${id}`
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
        <h3 className="p-2">{name}</h3>
        <img className="p-2 w-auto" src={imgUrl} alt={name} />
        <figcaption className="p-2">{description}</figcaption>
        <ul>
          <li className="p-2">{startDate}</li>
          <li className="p-2">{endDate}</li>
          <li className="p-2">{developerTeam}</li>
          <a href={linkedinPostLink}>
            <li className="p-2 w-8">
              <img src="../src/assets/logo_linkedin.png" alt="LinkedIn" />
            </li>
          </a>
          <a href={githubRepoLink}>
            <li className="p-2 w-8">
              <img src="../src/assets/logo_github.png" alt="GitHub" />
            </li>
          </a>
          <li className="p-2">{clientName}</li>
          {tools &&
            tools.map((tool) => (
              <li key={tool.tool_id} className="p-2">
                {tool.name}
              </li>
            ))}
        </ul>
        <button className="p-2" type="button" onClick={close}>
          X
        </button>
      </figure>
    </div>
  );
}

ProjectModal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  developerTeam: PropTypes.string.isRequired,
  linkedinPostLink: PropTypes.string.isRequired,
  githubRepoLink: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
