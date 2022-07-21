import PropTypes from "prop-types";
import { useState, useRef } from "react";
import axios from "axios";

export default function ProjectForm({ project }) {
  const [editUser, setEditUser] = useState(false);

  const name = useRef();
  const description = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const developerTeam = useRef();
  const linkedinPostLink = useRef();
  const githubRepoLink = useRef();
  const clientId = useRef();
  const imgUrl = useRef();

  const putProject = () => {
    axios
      .put(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/projects/${project.id}`,
        {
          name: name.current.value,
          description: description.current.value,
          start_date: startDate.current.value,
          end_date: endDate.current.value,
          developer_team: developerTeam.current.value,
          img_url: imgUrl.current.value,
          linkedin_post_link: linkedinPostLink.current.value,
          github_repo_link: githubRepoLink.current.value,
          client_id: clientId.current.value,
        }
      )
      .then((response) => response);
  };

  const postProject = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/projects`,
        {
          name: name.current.value,
          description: description.current.value,
          start_date: startDate.current.value,
          end_date: endDate.current.value,
          developer_team: developerTeam.current.value,
          img_url: imgUrl.current.value,
          linkedin_post_link: linkedinPostLink.current.value,
          github_repo_link: githubRepoLink.current.value,
          client_id: clientId.current.value,
        }
      )
      .then((response) => response);
  };

  const deleteProject = () => {};

  const handleSave = (e) => {
    e.preventDefault();
    setEditUser(false);
    if (project) {
      putProject();
    } else {
      postProject();
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditUser(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteProject();
  };

  return (
    <form
      className="flex flex-col items-center p-2 w-full border border-solid border-1 mt-2"
      onSubmit={handleSave}
    >
      <label htmlFor="project-name">Name</label>
      <input
        type="text"
        id="project-name"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.name}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={name}
      />
      <label htmlFor="project-description">Description</label>
      <input
        type="text"
        id="project-description"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.description}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={description}
      />
      <label htmlFor="project-start_date">Start date</label>
      <input
        type="text"
        id="project-start_date"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.start_date}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={startDate}
      />
      <label htmlFor="project-end_date">End date</label>
      <input
        type="text"
        id="project-end_date"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.end_date}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={endDate}
      />
      <label htmlFor="project-img_url">Image URL</label>
      <input
        type="text"
        id="project-img_url"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.img_url}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={imgUrl}
      />
      <label htmlFor="project-developer_team">Developer team</label>
      <input
        type="text"
        id="project-developer_team"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.developer_team}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={developerTeam}
      />

      <label htmlFor="project-linkedin_post_link">LinkedIn post link</label>
      <input
        type="text"
        id="project-linkedin_post_link"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.linkedin_post_link}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={linkedinPostLink}
      />
      <label htmlFor="project-github_repo_link">GitHub repo link</label>
      <input
        type="text"
        id="project-github_repo_link"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.github_repo_link}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={githubRepoLink}
      />
      <label htmlFor="project-client_id">Client ID</label>
      <input
        type="text"
        id="project-client_id"
        // eslint-disable-next-line no-nested-ternary
        value={!project ? null : editUser ? null : project.client_id}
        disabled={!editUser}
        className={
          !editUser
            ? "border border-solid border-1 mb-2 p-2 w-[90%] text-slate-500"
            : "border border-solid border-1 mb-2 p-2 w-[90%] text-black"
        }
        ref={clientId}
      />

      {editUser === true ? (
        <section className="flex justify-center text-center w-full">
          <input
            type="submit"
            value="Valider"
            className="text-center border-solid border-2 border-green-900 text-green-900 p-2 m-2 min-w-[42%] rounded-lg"
          />
          <button
            type="button"
            className="border-solid border-2 border-[#5f2525] text-[#5f2525] p-2 m-2 min-w-[42%] rounded-lg"
            onClick={handleDelete}
          >
            Supprimer
          </button>
        </section>
      ) : (
        <button
          type="button"
          className="border-solid border-2 border-[#5f2525] text-[#5f2525] p-2 m-2 w-[90%] rounded-lg"
          onClick={handleEdit}
        >
          Modifier les informations
        </button>
      )}
    </form>
  );
}

ProjectForm.propTypes = {
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
    client_id: PropTypes.number.isRequired,
  }).isRequired,
};
