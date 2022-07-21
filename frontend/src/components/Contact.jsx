import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div id="contact">
      <Navbar />
      <section className="h-[90vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl m-4">Contact</h2>
        <form className="flex flex-col border border-solid border-1 p-4 min-w-[90%]">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border border-solid border-1 my-2 p-2"
          />
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-solid border-1 my-2 p-2"
          />
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            id="message"
            className="border border-solid border-1 mt-2 min-h-[8rem] p-2"
          />
        </form>
      </section>
      <section className="h-[5vh] flex flex-col justify-center items-center">
        <a href="#welcome">
          <img src="../src/assets/chevron2.png" alt="Chevron" className="w-6" />
        </a>
      </section>
    </div>
  );
}
