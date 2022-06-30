import Layout from '../../components/layout'
import styles from '../../styles/Home.module.css'
import MotionContainer from '../../components/motionPresence'
import { useRouter } from 'next/router'
import  Head  from 'next/head'
import { useEffect, useState } from 'react'


const About = ()=> {

    const router = useRouter()

    const routeTo = {
        contact:()=> router.push('/contact')
    }

    const scaleTransition = "hover:scale-150"

    return (
        <Layout>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            </Head>
            <MotionContainer>
                <div className="xl:h-screen lg:h-fit w-full md:px-2 md:py-2 ">
                    <div className='h-full w-fit bg-white  flex flex-col md:flex-row justify-space ' >
                        <div className="md:w-2/4 h-full">
                            <h1 className='text-slate-900 p-4 md:flex-row flex-col md:py-4 uppercase font-mono font-bold md:text-5xl text-3xl'><span className='text-teal-500'>_</span>About me</h1>
                            <p className='text-slate-900 md:pr-4 md:tracking-widest leading-loose md:leading-tight font-medium px-2.5 md:pl-10 mt-3  lg:text-[1.4rem] text-lg ms:text-xl'>
                            Hi there, I'm MOHAMED KOUACHE <br className='md:hidden'/>a full-stack developer with different flavors of web technologies. I'm also a business intelligence developer, either using or building bi solutions from scratch with various technologies and tools like (python, R, PowerBi, etc…).
                            <br/>Being comfortable with code allows me to see life from a different perspective which makes me a whole new person every time I learn a new skill or figure out a solution to an existing problem.
                            <br/>I would love to help build cutting-edge technologies or take them to the next level. 
                            <br/>If you think that I will be a valuable person for you and your company. Please <button onMouseDown={routeTo.contact} onTouchStart={routeTo.contact} className='bg-teal-600  rounded-md  hover:bg-teal-700 px-2 text-white'>contact me here.</button> 
                            </p>
                        </div>
                        <div className='md:w-2/4 h-full flex flex-col justify-center rounded-3xl md:pr-3  bg-gray-800 mt-10 md:mt-0'>
                            <h1 className='md:text-3xl text-2xl py-2 font-bold text-white font-mono text-center md:pb-5'>_TOOLS I USE_</h1>
                            <div className="flex justify-evenly  py-2">
                                <i class="devicon-django-plain text-green-600  text-5xl  hover:scale-150 duration-500 " ></i>
                                <i class="devicon-c-line-wordmark colored  text-teal-600 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-cplusplus-line-wordmark colored text-teal-600 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-docker-plain-wordmark colored text-teal-600 text-6xl hover:scale-150 duration-500" ></i>
                            </div>
                            <div className=" flex justify-evenly items-center py-2">
                                <i class="devicon-git-plain-wordmark colored text-teal-600 text-7xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-github-original-wordmark  text-gray-100 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-html5-plain-wordmark  text-red-600 text-6xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-java-plain-wordmark colored text-teal-600 text-7xl hover:scale-150 duration-500" ></i>
                            </div>
                            <div className=" flex justify-around items-center py-2">
                                <i class="devicon-javascript-plain colored text-teal-600 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-linux-plain text-yellow-600 text-7xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-nextjs-original-wordmark  text-white font-normal text-8xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-nodejs-plain-wordmark colored text-teal-600 text-9xl hover:scale-150 duration-500" ></i>
                            </div>
                            <div className=" flex justify-evenly items-center py-2">
                                <i class="devicon-php-plain colored text-teal-600 text-6xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-python-plain-wordmark text-slate-300 text-6xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-react-original-wordmark text-teal-600 text-6xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-r-original colored text-teal-600 text-6xl hover:scale-150 duration-500" ></i>
                            </div>
                            <div className=" flex justify-evenly  items-center py-2">
                                <i class="devicon-css3-plain-wordmark text-blue-500 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-laravel-plain-wordmark colored text-teal-600 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-wordpress-plain-wordmark  text-gray-200 text-5xl hover:scale-150 duration-500" ></i>
                                <i class="devicon-tailwindcss-plain colored text-teal-600 text-6xl hover:scale-150 duration-500" ></i>
                            </div>
                        </div>
                    </div>
                </div>
           </MotionContainer>
        </Layout>
    )
}


export default About;