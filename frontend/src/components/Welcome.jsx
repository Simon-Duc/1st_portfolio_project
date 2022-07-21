export default function Welcome() {
  return (
    <div id="welcome">
      <section className="h-[90vh] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">🏁</h1>
          <h2 className="text-xl text-center mt-2">
            Hi, I'm <span className="font-bold">Simon Duc</span>,
            <br />
            I'm a web developer
          </h2>
          <ul className="flex flex-row space-x-4 w-16 mt-4">
            <li className="w-full">
              <a href="https://github.com/Simon-Duc">
                <img src="../src/assets/logo_github.png" alt="GitHub" />
              </a>
            </li>
            <li className="w-full">
              <a href="https://www.linkedin.com/in/simon-duc-858481213/">
                <img src="../src/assets/logo_linkedin.png" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="h-[10vh] flex flex-col justify-center items-center">
        <h3>See more</h3>
        <a href="#biography">
          <img src="../src/assets/chevron.png" alt="Chevron" className="w-6" />
        </a>
      </section>
    </div>
  );
}
