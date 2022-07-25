import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Biography() {
  const [tools, setTools] = useState([]);

  const getTools = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/tools`
      )
      .then((response) => {
        setTools(response.data);
      });
  };

  useEffect(() => {
    getTools();
  }, []);

  return (
    <div id="biography">
      <Navbar />
      <section className="h-[90vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl m-4">Bio</h2>
        <div className="flex flex-col items-center border border-solid border-1 w-[90%] p-4">
          <img
            src="../src/assets/photo.jpg"
            alt="Profile pic"
            className="rounded-[50%] w-[8rem]"
          />
          <h3 className="my-2 text-xl">A few words about me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            laudantium iste culpa sunt enim ad quia consequatur mollitia dolore,
            minus perferendis, assumenda aperiam, praesentium asperiores
            inventore sint ex dolorum aliquid?
          </p>
          <h3 className="my-2 text-xl">Education / jobs</h3>
          <ul className="list-disc mx-4">
            <li>Management course, MBA ESG, 2014</li>
            <li>Python online course, University of Toronto, 2021</li>
            <li>Web developer course, Wild Code School, 2022</li>
          </ul>
          <h3 className="my-2 text-xl">Tools</h3>
          <ul className="flex flex-wrap p-2">
            {tools &&
              tools.map((tool) => {
                return (
                  <li className="m-1 p-1 border border-1" key={tool.id}>
                    {tool.name}
                  </li>
                );
              })}
          </ul>
          <button
            type="button"
            className="border-solid border-2 border-black p-1 w-[60%] rounded-lg bg-slate-100"
          >
            Download my resume
          </button>
        </div>
      </section>
      <section className="h-[5vh] flex flex-col justify-center items-center">
        <a href="#projects">
          <img src="../src/assets/chevron.png" alt="Chevron" className="w-6" />
        </a>
      </section>
    </div>
  );
}
