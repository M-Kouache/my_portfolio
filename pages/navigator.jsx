import Link from 'next/link';
import styles from '../styles/Home.module.css'
import {FaCode} from 'react-icons/fa';

const Nav = ()=> {
    return(
        <div className={styles.nav_container}>
            <Link href="/">
                <a>
                    <FaCode></FaCode>
                </a>
            </Link>
            <Link href="./about/about">
                <a>home</a>
            </Link>
            <Link href="./work/work">
                <a>home</a>
            </Link>
        </div>
    );
}

export default Nav;