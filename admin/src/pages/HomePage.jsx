import GetStarted from "../components/GetStarted";
import estilos from "../components/ui/estilos";
import { useAuth } from "../context/authContext";
import HomeGradientes from "../components/HomeGradientes";
import ComponenteLotie from "../components/ComponenteLotie";
import { walkingshoes, lky1, lky2, tienda } from "../assets/LottieFiles";

function HomePage() {
  const { user } = useAuth();
  
  return (
    <div className={`container ${estilos.flexCenter} flex-col`}>
      <h1
        className="font-bold font-poppins text-7xl text-center bg-gradient-to-r from-orange-500 via-rose-300 to-red-600
       text-transparent bg-clip-text mt-10"
      >
        Zap Calzados
      </h1>
      <HomeGradientes />
      <ComponenteLotie lotie={tienda} />
      {user.id ? (
        <div className="invisible">
          <GetStarted />
        </div>
      ) : (
        <GetStarted />
      )}
      <h2
        className="text-center text-6xl md:text-7xl font-bold text-transparent 
         m-30 p-4 rounded-lg bg-clip-text
         bg-gradient-to-b from-teal-300 via-cyan-600 to-blue-800
    animate-fade-down hover:animate-jump "
      >
        Home Page
      </h2>
    </div>
  );
}
export default HomePage;
