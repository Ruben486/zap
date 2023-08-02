import { useGlobal } from "../context/GlobalContext";

function HomePage() {
  return (
    <div className="container flex justify-center items-center">
      <h1
        className="w-full text-center text-2xl md:text-8xl font-extrabold text-transparent  m-40 p-2 rounded-lg bg-clip-text bg-gradient-to-b from-teal-300 via-cyan-600 to-blue-800
    border-2 border-neutral-800 animate-fade-down hover:animate-jump "
      >
        Home Page
      </h1>
    </div>
  );
}
export default HomePage;
