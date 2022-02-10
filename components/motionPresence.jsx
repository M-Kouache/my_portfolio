import {motion} from 'framer-motion';
import styles from '../styles/Home.module.css';


const AnimatePresence = ({children})=> {
    return(
        <motion.div
            className={styles.presence_container}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:2}}
        >
        {children}
        </motion.div>
    )
}

export default AnimatePresence;