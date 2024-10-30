import Link from 'next/link';
// import styles from './styles/Header.module.css'
import Button from '@/components/button';

const Help = () => {
    return (
        <Link href="/contact">
            {/* <Button className={styles.Button}> */}
            <Button text='Help'>
            </Button>
        </Link>
    );
};

export default Help;
