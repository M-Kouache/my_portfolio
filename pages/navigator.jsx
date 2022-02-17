import {useState, useEffect} from 'react'
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

    const NavContainer = "absolute bottom-[2.5rem] drop-shadow-2xl left-10 p-2 cursor-grab rounded-2xl bg-firefly border-4 w-fit";

    const activeClass = " border-green-400 ";
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

        console.log(e)

        if(e.target.id == '/'){
            router.push('/')
        }

        if(e.target.id == '/work'){
            router.push('/work')
        }

        if(e.target.id == '/about'){
            router.push('/about')
        }

        if(e.target.id == '/contact'){
            router.push('/contact')
        }
        setToggle(!Toggle);
    }

   const Clicked = (e)=>{
       console.log('clicked')
   } 


    return(
        <Draggable id='drg' onDrag={handleDrag} onStop={handleStop} bounds="parent">
            <motion.div title="Drag me if you want"  className={Toggle ? NavContainer+" border-green-400" : NavContainer+" border-lilac"}>
                <div className="text-zircon w-full h-full"><FaRegLifeRing className={Toggle ? "text-2xl animate-pulse" : "text-2xl"}/></div>
                    <button id='/' className={Toggle ? "hidden" : " top-[-5rem] left-[-1.5rem] "+Active.home+subNavClass}>
                        <motion.div id='/' title="Home" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:.3}} 
                        ><VscHome id='/'  className="text-2xl"/></motion.div>
                    </button>
                    
                    <button className={Toggle ? "hidden" : "top-[-4.6rem] right-[-2.8rem] "+subNavClass+Active.work}>
                    <motion.div id='/work' title="My work" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscCode id='/work'  className="text-2xl" /></motion.div>
                    </button>
                
                    <button className={Toggle ? "hidden" : "right-[-5.3rem] top-[-2rem] "+subNavClass+Active.about}>
                    <motion.div id='/about' title="About me" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscAccount id='/about' className="text-2xl" /></motion.div>
                    </button>

                    <button className={Toggle ? "hidden" : "right-[-5.5rem] bottom-[-2rem] "+subNavClass+Active.contact}>
                    <motion.div id='/contact' title="Contact me" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscMail id='/contact' className="text-2xl" /></motion.div>
                    </button>
                <div/>
            </motion.div>
       </Draggable>
    );
}

export default Nav;