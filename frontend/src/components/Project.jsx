import { useModal } from "react-hooks-use-modal";
import PropTypes from "prop-types";
import ProjectModal from "./ProjectModal";

export default function Project({ project }) {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });

  return (
    <figure className="flex flex-col w-[90%] border border-1 p-2 mb-4">
      <h3 className="p-2">{project.name}</h3>

      <figcaption className="p-2">{project.description}</figcaption>
      <button type="button" onClick={open}>
        See more
      </button>
      <Modal>
        <ProjectModal project={project} close={close} />
      </Modal>
    </figure>
  );
}

Project.propTypes = {
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
