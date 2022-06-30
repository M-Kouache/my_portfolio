import { useState } from 'react';
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import Layout from '../components/layout'
import AnimatePresence from '../components/motionPresence';
import Nav from './navigator'
import { useSpring, trans, config, op, useTransition, animated, to, Transition} from 'react-spring';


export default function Home() {


  const [items,setItems] = useState([{char:'M'},{char:'O'},{char:'H'},{char:'A'},{char:'E'},{char:'D'},{char:'_'},{char:'K'},{char:'O'},{char:'U'},{char:'A'},{char:'C'},{char:'H'},{char:'E'}])

  return (  
     <Layout>
        <AnimatePresence>
          <div className={styles.home_name_container}>
            <h1 className={styles.home_h1}>
              {/*<Transition
                items={items} 
                from={{opacity:0}} 
                enter={{opacity:1}}
                leave={{opacity:0}}
                delay={200}
                config={config.molasses}
                >
                {({ opacity},item ) => (
                  <animated.div
                    style={{
                      opacity: opacity.to(item.op),
                      transform: opacity
                        .to(item.trans)
                        .to(y => `translate3d(0,${y}px,0)`),
                    }}>
                    {item.fig}
                  </animated.div>
                )}     
              </Transition>*/}
            MOHAMED KOUACHE 
            </h1>
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

