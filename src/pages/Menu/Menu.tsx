import styles from './Menu.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Ordener from './Ordener';
import Items from './Items';
import stylesTema from '../../styles/Tema.module.scss';




export default function Menu() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [ordener, setOrdener] = useState('');
    

    return (


        <section className={styles.carte}>
            <h3 className={stylesTema.title}>
                Menu
            </h3>
            <Search search={search} setSearch={setSearch} />
            <div className={styles.carte__filters}>
                <Filters filter={filter} setFilter={setFilter} />
                <Ordener ordener={ordener} setOrdener={setOrdener} />
            </div>
            <Items search={search} filter={filter} ordener={ordener} />

        </section>


    );
}