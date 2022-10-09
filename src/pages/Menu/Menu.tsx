import styles from './Menu.module.scss'
import logo from "../../assets/italian.png"
import Search from './Search'
import { useState } from 'react'
import Filters from './Filters'
import Ordener from './Ordener'
import Items from './Items'

export default function Menu(){
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState<number | null>(null)
    const [ordener, setOrdener] = useState('')

    return(
        <main>
            <nav className={styles.menu}>
                <img src={logo} className={styles.logo} alt="Restaurant Logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    House of pasta
                </div>
            </header>
            <section className={styles.carte}>
                <h3 className={styles.carte__title}>
                    Menu
                </h3>
                <Search search={search} setSearch={setSearch}/>
                <div className={styles.carte__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Ordener ordener={ordener} setOrdener={setOrdener}/>
                </div>
                <Items search={search} filter={filter} ordener={ordener} />

            </section>

        </main>
    )
}