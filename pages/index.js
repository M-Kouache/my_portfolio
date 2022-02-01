import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {motion} from 'framer-motion'


export default function Home({data}) {
  return (  
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:3}}
    >
      Dumy test.
    </motion.div>
  );
}

