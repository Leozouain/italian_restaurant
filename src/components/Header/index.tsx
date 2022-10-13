import styles from './Header.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from '../../styles/Tema.module.scss';
import React from 'react';


export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    House of pasta
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet/>
                
            </div>
        </>
    );
}