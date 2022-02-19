import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {VscCode,VscHome,VscAccount,VscMail,VscFoldUp,VscFoldDown} from 'react-icons/vsc';
import Draggable from 'react-draggable';
import { imageConfigDefault } from 'next/dist/server/image-config';
import {FaRegLifeRing} from 'react-icons/fa'
import {useRouter} from 'next/router';
import { route } from 'next/dist/server/router';


const Nav = ()=> {

    // useRouter for routes.
    const router = useRouter();

    // for toggling the floating navigation
    const [Toggle,setToggle] = useState(true);

    // cursor grab or grabbing.
    const [Cursor,setCursor] = useState('cursor-grab');

    // framer-motion animation to animate appearance of navigation ease in and out.
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

    //common tailwind styles for nav children.
    const subNavClass = "absolute cursor-pointer rounded-[50%] text-zircon bg-slate-800 w-18 border-[.3rem] text-center p-2 ";

    // navigation container style
    const NavContainer = "absolute bottom-[2.5rem] drop-shadow-2xl left-10 rounded-2xl bg-firefly border-4 w-fit";

    // styles for active links and unActive.
    const activeClass = " border-green-400 ";
    const unActiveClass = " border-lilac ";

    const [Active,setActive] = useState({
        home:"",
        work:"",
        about:"",
        contact:""
    });

    

    //useEffect to detect which route is active.
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

    //onDrag set Toggle to false (hide the nav childrens) and set cursor.
    const handleDrag = ()=> {
        setToggle(true);
        setCursor('cursor-grabbing');
    }

    const handleStop = ()=> {
        setCursor('cursor-grab');
    }

    //all necessary routes.
   const routeTo = {
        home:()=> router.push('/'),
        work:()=> router.push('/work'),
        about:()=> router.push('/about'),
        contact:()=> router.push('/contact')
   } 

    return(
        <Draggable  onDrag={handleDrag} onStop={handleStop} bounds="parent">
            <motion.div className={Toggle ? NavContainer+" border-green-400 "+Cursor : NavContainer+" border-lilac "+Cursor}>
                    <div onMouseUp={()=> setToggle(!Toggle)} onTouchEnd={()=> setToggle(!Toggle)} title='Drag me if you want' className="text-zircon w-full h-full p-2">
                        <FaRegLifeRing className={Toggle ? "text-2xl animate-pulse" : "text-2xl"}/>
                    </div>
                    
                    <button onMouseDown={routeTo.home} onTouchStart={routeTo.home} id='/' className={Toggle ? "hidden" : " top-[-5rem] left-[-1.5rem] "+Active.home+subNavClass}>
                        <motion.div id='/' title="Home" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:.3}} 
                        ><VscHome id='/'  className="text-2xl"/></motion.div>
                    </button>
                    
                    <button onTouchStart={routeTo.work} onMouseDown={routeTo.work} className={Toggle ? "hidden" : "top-[-4.6rem] right-[-2.8rem] "+subNavClass+Active.work}>
                    <motion.div id='/work' title="My work" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscCode id='/work'  className="text-2xl" /></motion.div>
                    </button>
                
                    <button onTouchStart={routeTo.about} onMouseDown={routeTo.about} className={Toggle ? "hidden" : "right-[-5.3rem] top-[-2rem] "+subNavClass+Active.about}>
                    <motion.div id='/about' title="About me" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscAccount id='/about' className="text-2xl" /></motion.div>
                    </button>

                    <button onMouseDown={routeTo.contact} onTouchStart={routeTo.contact} className={Toggle ? "hidden" : "right-[-5.5rem] bottom-[-2rem] "+subNavClass+Active.contact}>
                    <motion.div id='/contact' title="Contact me" initial="hidden" animate="visible" variants={Toggle ? ease_out : ease_in} transition={{duration:0.3}} 
                        ><VscMail id='/contact' className="text-2xl" /></motion.div>
                    </button>
            </motion.div>
       </Draggable>
    );
}

export default Nav;