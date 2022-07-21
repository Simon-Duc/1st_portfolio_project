export default function Navbar() {
  return (
    <nav className="border border-1 h-[5vh] flex flex-col justify-center">
      <ul>
        <li className="flex place-content-around">
          <a href="#welcome">welcome</a>
          <a href="#biography">biography</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}
