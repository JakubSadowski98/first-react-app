import styles from './NavBar.module.scss';
import { Link, NavLink  } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/"><i className='fa fa-tasks'></i></Link> {/* komponent <Link> pod maską renderuje normalny link <a>, ale już z odpowiednim nasłuchiwaczem, który zablokuje domyślne zachowanie przeglądarki */}
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        {/* komponent <navLink> działa tak samo jak <Link>, z tym że można dodać do niego dodatkowy atrybut - className*/}
        {/* do parametru className jest przekazana funkcja - w ten sposób React Router jest w stanie przekazać informację o aktywności danego linku */}
      </ul>
    </nav>
  );
};

export default NavBar;