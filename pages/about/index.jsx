import Layout from '../../components/layout'
import styles from '../../styles/Home.module.css'
import MotionContainer from '../../components/motionPresence'
import { useRouter } from 'next/router'


const About = ()=> {

    const router = useRouter()

    const routeTo = {
        contact:()=> router.push('/contact')
    }

    return (
        <Layout>
            <MotionContainer>
                <div className="md:h-min md:px-2 md:py-2 bg-stone-800">
                <div className='h-min md:m-3 bg-black py-9 flex justify-center ' >
                    <div className="w-full">
                        <h1 className='text-slate-200 p-4 md:flex-row flex-col md:p-4 uppercase font-mono font-bold md:text-5xl text-3xl'>_About me</h1>
                        <p className='text-slate-300  md:tracking-wider leading-loose px-2.5 md:pl-10 md:w-2/4 md:text-2xl text-xl'>
                        Hi there, I'm MOHAMED KOUACHE <br className='md:hidden'/>a full-stack developer with different flavors of web technologies. I'm also a business intelligence developer, either using or building bi solutions from scratch with various technologies and tools like (python, R, PowerBi, etc…).
                        <br/>Being comfortable with code allows me to see life from a different perspective which makes me a whole new person every time I learn a new skill or figure out a solution to an existing problem.
                        <br/>I would love to help build cutting-edge technologies or take them to the next level. 
                        <br/>If you think that I will be a valuable person for you and your company. Please <button onMouseDown={routeTo.contact} onTouchStart={routeTo.contact} className='bg-teal-600 underline rounded-md animate-pulse hover:animate-none px-2 text-white'>contact me here.</button> 
                        </p>
                    </div>
                </div>
                </div>
           </MotionContainer>
        </Layout>
    )
}


export default About;