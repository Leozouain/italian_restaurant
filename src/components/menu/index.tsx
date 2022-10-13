import styles from './NavB.module.scss';
import logo from '../../assets/italian.png';
import { Link } from 'react-router-dom';


export default  function NavB() {
    const rotas = [{
        label: 'Main',
        to: '/'
    }, {
        label: 'Menu',
        to: '/menu'
    }, {
        label: 'About Us',
        to: '/about'
    }];
    return (
        <nav className={styles.menu}>
            <img src={logo} className={styles.logo} alt="Restaurant Logo" />
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


