import {motion} from 'framer-motion'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'


const About = ()=> {
    return (
        <Layout>
            <motion.div
            className={styles.green}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:2}}
            >
            <Link href="/">
                <a><h1>back to home</h1></a>
            </Link>
            </motion.div>
        </Layout>
    )
}


export default About;