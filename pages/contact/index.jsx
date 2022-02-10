import {useState} from 'react';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout'
import AnimatePresence from '../../components/motionPresence'

const Contact =()=> {

    const [value,setValue] = useState()

    const handlechange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setValue = {[name]:value};
        console.log(value)
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
       <Layout>
           <AnimatePresence>
               <div className="w-full flex-col overflow-y-auto h-full md:flex md:flex-row">
                   <div className="w-full px-4 flex justify-center overflow-y-auto scrollbar-none">
                        <form onSubmit={handleSubmit} className="w-full max-w-lg h-full pt-4">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input name="firstName"  vlaue={value} onChange={handlechange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input name="lastName" value={value} onChange={handlechange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                  Email Address 
                                </label>
                                <input name="email" vlaue={value} onChange={handlechange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@gmail.com"/>
                                <p class="text-gray-600 text-xs italic">Please enter a valid gmail acount.</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message 
                                </label>
                            <textarea name="message" value={value} onChange={handlechange} rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" type="textarea" placeholder="Message"/>
                                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  type="submit" value="Let's talk."/>        
                                </div>
                            </div>
                        </form>    
                    </div>
                   <div className=" w-full md:bg-contact-side-img bg-center md:bg-cover">
                   </div>
               </div>
           </AnimatePresence>
       </Layout>
    )
}

export default Contact;