import styles from './Hero.module.scss'; // dzięki tzw. CSS Modules dana reguła działa tylko i wyłącznie w tym komponencie - powstają klasy o unikalnych nazwach
                                         // zwracany przez CSS Module obiekt styles zawiera właściwości-skróty do odpowiednich klas (np. hero: 'Hero_hero__4FYX7')
import PageTitle from '../PageTitle/PageTitle';

const Hero = () => { // deklaracja funkcji-komponentu
  return ( // (!) funkcja-komponent musi zwracać dokładnie jeden element najwyższego poziomu - dlatego elementy <h1>, <p> są zawarte w <div>
    <div className={styles.hero}> {/* (!) użycie selektora className zamiast class */}
      <PageTitle>My first React App</PageTitle>
      <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
    </div>
  );
};

export default Hero;