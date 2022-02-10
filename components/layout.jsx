import styles from './layout.module.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head'
import Nav from '../pages/navigator';

const Layout = ({children})=>{
    return (
        <main className={styles.layout_container}>
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>
            <Nav/>
        </main>
    )
}



export default Layout;