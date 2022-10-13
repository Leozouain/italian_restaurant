import styles from './Footer.module.scss';

import Logo from '../../../public/assets/italian.png';

export default function Footer (){
    return(
        <footer className={styles.footer}>
            <img className={styles.logo} src={Logo} alt="" />
        </footer>
    );
}