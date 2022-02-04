import styles from './layout.module.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head'

const Layout = ({children})=>{
    return (
        <main styles={styles.layout_container}>
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>
        </main>
    )
}



export default Layout;