/* eslint-disable react/no-unescaped-entities */
import styles from './Footer.module.scss';

import Logo from '../../../public/assets/italian.png';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <img className={styles.logo} src={Logo} alt="" />


            </footer>
            <div className={styles.footerTxt}>
                <small  className={styles.footerTxt__sm} >2022 Italian's Spaghetti Bar</small>
                
                <small> 🪐🚀🍝Home of the best pasta in MARS!🪐🚀🍝 </small>
            </div>
           
          
        </>

    );
}