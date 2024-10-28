
// import AboutUS from './AboutUs';
// import ContactUS from './ContactUs';
import Link from 'next/link';
import Button from '@/components/button';
import styles from './styles/Header.module.css'


export default function Header(){
return(
      <header className={`${styles.div}`}>
        {/* <div >  */}
            <h1 className={styles.h1Header}>Home Automation Solutions </h1> 
            <h2 className={styles.h2Header}>
            
            <h3 className={styles.h3Header}><Link href="/contact">
            <Button text='Conatct Us'>
            </Button>
        </Link> </h3>
        
<h4 className={styles.h4Header}><Link href="/about">
            <Button text= 'About Us'>
            </Button>
        </Link></h4>
<h5 className={styles.h5Header}><Link href="/help">
            <Button text= 'Help'>
            </Button>
        </Link></h5>
        </h2>
          {/* </div> */}
   </header>
)
}