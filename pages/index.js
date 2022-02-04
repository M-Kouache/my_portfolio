import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Layout from '../components/layout'
import Nav from './navigator'



export default function Home({data}) {
  return (  
    <Layout>
      <motion.div
        className={styles.home_motion_container}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
      >


        <div className={styles.home_name_container}>
            <h1 className={styles.home_h1}>MOHAMED KOUACHE</h1>
            <div className={styles.home_subname}>
              <h3 className={styles.subname_h3}>WebDesigner</h3><span>-</span>
              <h3 className={styles.subname_h3}>Developer</h3><span>-</span>
              <h3 className={styles.subname_h3}>Statistian</h3>
            </div>
        </div>
      </motion.div>
    </Layout>
  );
}

