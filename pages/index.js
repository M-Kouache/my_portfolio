import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import Layout from '../components/layout'
import AnimatePresence from '../components/motionPresence';
import Nav from './navigator'


export default function Home() {
  return (  

      <Layout>
        <AnimatePresence>
          <div className={styles.home_name_container}>
            <h1 className={styles.home_h1}>MOHAMED KOUACHE</h1>
            <div className={styles.home_subname}>
              <h3 className={styles.subname_h3}>WebDesigner</h3><span>-</span>
              <h3 className={styles.subname_h3}>Developer</h3><span>-</span>
              <h3 className={styles.subname_h3}>Statistian</h3>
            </div>
          </div>
        </AnimatePresence>
      </Layout>

    
  );
}

