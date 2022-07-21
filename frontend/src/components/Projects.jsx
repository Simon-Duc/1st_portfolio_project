import Navbar from "./Navbar";

export default function Projects() {
  return (
    <div id="projects">
      <Navbar />
      <section className="h-[90vh] flex flex-col justify-center items-center">
        <h2 className="text-xl m-4">Projects</h2>
        <figure className="flex flex-col w-[90%] border border-1 p-2 mb-4">
          <h3 className="p-2">Project 1</h3>
          <img
            className="p-2 w-auto"
            src="https://loremflickr.com/320/160"
            alt="Project 1"
          />
          <figcaption className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            voluptas! Repudiandae facere alias nihil? Reiciendis esse sapiente
            nihil quaerat. Modi.
          </figcaption>
        </figure>
        <figure className="flex flex-col w-[90%] border border-1 p-2">
          <h3 className="p-2">Project 2</h3>
          <img
            className="p-2"
            src="https://loremflickr.com/320/160"
            alt="Project 1"
          />
          <figcaption className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            voluptas! Repudiandae facere alias nihil? Reiciendis esse sapiente
            nihil quaerat. Modi.
          </figcaption>
        </figure>
      </section>
      <section className="h-[5vh] flex flex-col justify-center items-center">
        <a href="#contact">
          <img src="../src/assets/chevron.png" alt="Chevron" className="w-6" />
        </a>
      </section>
    </div>
  );
}
