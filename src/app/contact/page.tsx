import Link from 'next/link';
// import styles from './styles/Header.module.css'
import Button from '@/components/button';
import styles from '../styles/Contact.module.css'

const ContactUS = () => {
    return (
        <Link href="/contact">
        <h1 className={styles.heading}>
         Contact Us:</h1>
        <p className={styles.para}>Toll free Number: 0800 08880<br/>
        For Sales & General Inquiries: 03 020 444 888<br/>
        sales@okashasmart.com<br/>
        For Technical support: 03 010 444 885<br/>
        support@okashasmart.com<br/>
        For Online Order Confirmation: 03 010 444 888<br/>
        <br/>
        </p>
        </Link>
    );
};

export default ContactUS;
