export default function Biography() {
  return (
    <div>
      <section
        id="bio"
        className="h-[95vh] flex flex-col justify-center items-center"
      >
        <h2 className="m-4">Bio</h2>
        <div className="flex flex-col items-center border border-solid border-1 w-[90%] p-4">
          <img
            src="../src/assets/photo.jpg"
            alt="Profile pic"
            className="rounded-[50%] w-[8rem]"
          />
          <h3>A few words about me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            laudantium iste culpa sunt enim ad quia consequatur mollitia dolore,
            minus perferendis, assumenda aperiam, praesentium asperiores
            inventore sint ex dolorum aliquid?
          </p>
          <h3>Education / jobs</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            laudantium iste culpa sunt enim ad quia consequatur mollitia dolore,
            minus perferendis, assumenda aperiam, praesentium asperiores
            inventore sint ex dolorum aliquid?
          </p>
          <h3>Tools</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            laudantium iste culpa sunt enim ad quia consequatur mollitia dolore,
            minus perferendis, assumenda aperiam, praesentium asperiores
            inventore sint ex dolorum aliquid?
          </p>
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
