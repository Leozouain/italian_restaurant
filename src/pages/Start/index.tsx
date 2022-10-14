
import menu from '../../data/menu.json';
import styles from './Start.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import ourHome from '../../../public/assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from '../../types/Dish';


export default function Start() {
    let recomendedDishes = [...menu];
    recomendedDishes = recomendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);
    const navigate = useNavigate();

    function redirectToDetails(dish: Dish){
        navigate(`/dish/${dish.id}`, {state: {...dish}, replace: true});
    }


    return (
        <section className={styles.ctn}>
            
            <h3 className={stylesTema.title}>
                Kitchen Recomendations
            </h3>
            <div className={styles.recomended}>
                {recomendedDishes.map(item => (
                    <div key={item.id} className={styles.recomend}>
                        <div className={styles.comend__image}>
                            <img  src={item.photo} alt={item.title} />
                        </div>
                        
                        <button 
                            className={styles.recomend__btn} 
                            onClick={()=> redirectToDetails(item)}>
                            Show More
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.title}>Our Home</h3>
            <div className={styles.ourHome}>
                <img className={styles.imgHome} src={ourHome} alt="Welcome to Our Home" />
                <div className={styles.ourHome__address}>
                    1609 Red Hallway blvd <br /><br /> Red Ground - Mars
                </div>

            </div>
        </section>
    );
}