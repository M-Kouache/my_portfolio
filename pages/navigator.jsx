import {useState} from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import {VscCode,VscHome,VscAccount,VscMail,VscFoldUp,VscFoldDown} from 'react-icons/vsc';

const Nav = ()=> {

    const [isToggle,setToggle] = useState(false);

    const toggle = ()=> {
        setToggle(!isToggle);
    }

    return(
        <div>
            <motion.div>
                <div className={isToggle ? styles.nav_container_visible : styles.nav_container_hidden}>
                    <Link href="/">
                        <a>
                            <VscHome className={styles.nav_container_icons} />
                        </a>
                    </Link>
                    <Link href="./about">
                        <a>
                            <VscAccount className={styles.nav_container_icons}/>
                        </a>
                    </Link>
                    <Link href="./work">
                        <a>
                            <VscCode className={styles.nav_container_icons}/>
                        </a>
                    </Link>
                    <Link href="./contact">
                        <a>
                            <VscMail className={styles.nav_container_icons}/>
                        </a>
                    </Link>
                </div>
            </motion.div>
            
            <div className={styles.nav_toggle_btn} onClick={toggle}>
                {isToggle? <VscFoldDown/> : <VscFoldUp/>}
            </div>
        </div>
    );
}

export default Nav;