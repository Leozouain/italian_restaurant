
import styles from './Item.module.scss';
import { Dish } from '../../../../types/Dish';
import classNames from 'classnames'; 
import Tags from '../../../../components/Tags';
import { useNavigate } from 'react-router-dom';



export default function Item(props: Dish){
    const {title, description, id, category, size, serving, price , photo} = props;
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
            <div className={styles.item__image}>
                <img  src={photo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
            <Tags {...props}/>
        </div>);
}