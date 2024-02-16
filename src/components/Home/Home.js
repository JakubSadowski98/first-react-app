import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero";
import List from "../List/List";

const Home = () => {
  return(
    <> {/* zamknięcie równorzędnych elementów w "pusty" element nadrzędny  */}
      <Hero />
      <SearchForm />
      <List />
    </>
  );
};

export default Home;