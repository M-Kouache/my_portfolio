import {useState, useEffect} from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import {VscCode,VscHome,VscAccount,VscMail,VscFoldUp,VscFoldDown} from 'react-icons/vsc';
import Draggable from 'react-draggable';
import { imageConfigDefault } from 'next/dist/server/image-config';
import {FaRegLifeRing} from 'react-icons/fa'
import {useRouter} from 'next/router';


const Nav = ()=> {

    const router = useRouter();

    const [Toggle,setToggle] = useState(true);

    const [drag,setDrag] = useState(true);

    const ease_out = {
        hidden:{
            opacity:1 
        },
        visible:{
            opacity:0
        }
    }

    const ease_in ={
        hidden:{
            opacity:0 
        },
        visible:{
            opacity:1 
        }
    }

    const subNavClass = "absolute cursor-pointer rounded-[50%] text-zircon bg-slate-800 w-18 border-[.3rem] text-center p-2 ";

    const NavContainer = "absolute bottom-[2.5rem] drop-shadow-2xl left-10 p-2 cursor-grab rounded-2xl bg-firefly border-4 w-fit ";

    const activeClass = "border-green-400 ";
    const unActiveClass = " border-lilac ";

    const [Active,setActive] = useState({
        home:"",
        work:"",
        about:"",
        contact:""
    });

    

    useEffect(()=>{
        if(router.pathname == "/"){
            setActive({...Active,
                ['home']:activeClass,
                ['work']:unActiveClass,
                ['about']:unActiveClass,
                ['contact']:unActiveClass
            });
        }

        if(router.pathname == "/work"){
            setActive({...Active,
                ['home']:unActiveClass,
                ['work']:activeClass,
                ['about']:unActiveClass,
                ['contact']:unActiveClass
            });
        }

        if(router.pathname == "/about"){
            setActive({...Active,
                ['home']:unActiveClass,
                ['work']:unActiveClass,
                ['about']:activeClass,
                ['contact']:unActiveClass
            });
        }

        if(router.pathname == "/contact"){
            setActive({...Active,
                ['home']:unActiveClass,
                ['work']:unActiveClass,
                ['about']:unActiveClass,
                ['contact']:activeClass
            });
        }
    },[router.pathname])

    const handleDrag = ()=> {
        setDrag(true);
        setToggle(true);
    }

    const handleStop = (...args)=>{
        setDrag(false);
        setToggle(false);
        if(!drag){
            onClick(...args);
        }
    }

    const onClick = (e)=>{
        setToggle(!Toggle);
    }

    

    return(
        <Draggable onDrag={handleDrag} onStop={handleStop} bounds="parent">
            <motion.div title="Drag me if you want"  className={Toggle ? NavContainer+" border-green-400" : NavContainer+" border-lilac"}>
                <div className="text-zircon w-full h-full"><FaRegLifeRing className={Toggle ? "text-2xl animate-pulse" : "text-2xl"}/></div>
                <Link href="/">
                    <a className={Toggle ? "hidden" : "top-[-5rem] right-[1rem] z-50 "+Active.home+subNavClass}>
                <motion.div  title="Home" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:.3}} 
                        ><VscHome className="text-2xl" /></motion.div>
                    </a>
                </Link>

                <Link href="/work">
                    <a className={Toggle ? "hidden" : "top-[-4.6rem] right-[-2.8rem] "+subNavClass+Active.work}>
                    <motion.div title="My work" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscCode className="text-2xl" /></motion.div>
                    </a>
                </Link>
                
                <Link href="/about">
                    <a className={Toggle ? "hidden" : "right-[-5.3rem] top-[-2rem] "+subNavClass+Active.about}>
                    <motion.div title="About me" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscAccount className="text-2xl" /></motion.div>
                    </a>
                </Link>

                <Link href="/contact">
                    <a className={Toggle ? "hidden" : "right-[-5.5rem] bottom-[-2rem] "+subNavClass+Active.contact}>
                    <motion.div title="Contact me" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscMail className="text-2xl" /></motion.div>
                    </a>
                </Link>
            </motion.div>
             {/*<motion.div>
                <div className={isToggle ? styles.nav_container_visible : styles.nav_container_hidden}>
                    <Link href="/">
                        <a>
                            <VscHome className={styles.nav_container_icons} />
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <VscAccount className={styles.nav_container_icons}/>
                        </a>
                    </Link>
                    <Link href="/work">
                        <a>
                            <VscCode className={styles.nav_container_icons}/>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <VscMail className={styles.nav_container_icons}/>
                        </a>
                    </Link>
                </div>
            </motion.div>
            
            <div className={styles.nav_toggle_btn} onClick={toggle}>
                {isToggle? <VscFoldDown/> : <VscFoldUp/>}
            </div>*/}
        </Draggable>
    );
}

export default Nav;