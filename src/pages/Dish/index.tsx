import styles from './Dish.module.scss';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import menu from '../../data/menu.json';
import Tags from '../../components/Tags';
import NotFound from '../NotFound';
import Header from '../../components/Header';



export default function Dish() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dish = menu.find(item => item.id === Number(id));
    if (!dish) {
        return <NotFound />;
    }


    return (
        <Routes>
            <Route path='*' element={<Header />}>
                <Route index element={
                    <>
                        <button onClick={() => navigate(-1)} className={styles.back}>
                            {'< Back'};
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.title}>
                                {dish.title}
                            </h1>
                            <div className={styles.image}>
                                <img src={dish.photo} alt={dish.title} />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.content__description}>
                                    {dish.description}
                                </p>
                                <Tags {...dish} />
                            </div>


                        </section>
                    </>
                }></Route>
            </Route>
        </Routes>
    );
}