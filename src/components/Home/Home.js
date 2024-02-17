import Hero from "../Hero/Hero";
import Lists from "../Lists/Lists";

const Home = () => {
  return(
    <> {/* zamknięcie równorzędnych elementów w "pusty" element nadrzędny  */}
      <Hero />
      <Lists /> {/* "lista" wielu list */}
    </>
  );
};

export default Home;