import Link from 'next/link';
// import styles from './styles/Header.module.css'
// import Button from '@/components/button';
import styles from '../styles/About.module.css'
import { styleText } from 'util';
import { format } from 'path';

const AboutUS = () => {
    return (
        <Link href="/about">
            {/* <body className={styles.body}>  */}
                <h1 className={styles.heading}> About Us:</h1>
                    <p className={styles.para}>
                    We provide simple and smart home IOT (Internet of Things) & AI (Artificial Intelligence) based solutions devices for everyday use. Our wide range of devices caters everyday needs of home, office, educational institutes, hotels & Industrial automation, security and energy efficiency.Equipped with latest cloud computing, iotize® products are an attractive combination of design and technology which makes them more secure, user-friendly and affordable.
                    </p>
             {/* </body> */}
        </Link>
    );
};

export default AboutUS;
