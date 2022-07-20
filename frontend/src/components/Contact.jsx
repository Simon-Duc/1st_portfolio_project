export default function Contact() {
  return (
    <div>
      <section
        id="contact"
        className="h-[100vh] flex flex-col justify-center items-center"
      >
        <h2 className="mb-4">Contact</h2>
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
    </div>
  );
}
