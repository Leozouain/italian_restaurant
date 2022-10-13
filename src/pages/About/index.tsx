/* eslint-disable react/no-unescaped-entities */
import styles from './About.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import house from '../../../public/assets/about/casa.png';
import pasta1 from '../../../public/assets/about/massa1.png';
import pasta2 from '../../../public/assets/about/massa2.png';

const images = [pasta1, pasta2];

export default function About() {

    return (
        <section>
            <h1 className={stylesTema.title}>About Us</h1>
            <div className={styles.aboutUs}>
                <img src={house} alt="Italian Restaurant" />
                <div className={styles.aboutUs__text}>
                    <p>
                        We at Italian's Spaghetti Bar offer you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta on Mars! We cherish the traditional ingredients of Italian cuisine, fresh and of excellent quality so that your experience is even more intense!
                    </p>
                    <p>
                        We also have a meat menu with many options according to your taste!
                    </p>
                    <p>
                        Italian's Spaghetti Bar has a reserve of special wines, which perfectly harmonize with your dish, whether meat, pasta or salads!
                    </p>
                </div>

            </div>
            <div className={styles.images}>
                {images.map((imagem, index) => (
                    <div key={index} className={styles.images__image}>
                        <img src={imagem} alt="Pasta Photo" />;
                    </div>
                ))};
            </div>



        </section>
    );
}