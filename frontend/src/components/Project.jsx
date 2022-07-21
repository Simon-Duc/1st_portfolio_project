import { useModal } from "react-hooks-use-modal";
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
