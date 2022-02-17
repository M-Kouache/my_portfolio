import {useState} from 'react';
import Layout from '../../components/layout'
import AnimatePresence from '../../components/motionPresence'
import Validator from 'validator'
import {FaTimes} from 'react-icons/fa'
import {motion} from 'framer-motion';
import {VscIssueDraft} from 'react-icons/vsc'
import {VscPass} from 'react-icons/vsc';
import {VscError} from 'react-icons/vsc'

const Contact =()=> {
    //hook state to hande change for every input value of the form.
    const [value,setValue] = useState({firstName:'',lastName:'',email:'',message:'',subject:''})

    //this one for handling email validation specifically for the error message under email field.
   const [notEmail,setNotEmail] = useState("hidden");

   //pop up button text for each of the pop up states.
   const [btnText,setBtnText] = useState("Try again");

   //state to controle the loader while sending the email.
   const [sending,setSending] = useState(false);

   //this one for handling popup state (close the popup whene it pop's up)
   const [closePopUp,setclosePopUp] = useState(true);

   //the icon that apears on the popup whene the is submitied two states involved here (error, success).
   const [wrIcon,setwrIcon] = useState(true);

   // popup content for each of it's states (email not valid, somthing went wrong with post request, email sent successfully or not).
    const [popUpContent,setpopUpContent] = useState("dumpy text");

    // content that will be shown to the user on the pop up window.
    const content = {
        fill_fields:"Please fill out the field : ",
        sent_success:"Your message has been sent successfully, glad to hear from you i will be in touch soon as possible.",
        sent_faild:"Failed to send the message, please try again",
        some_wentWrong:"Something went wrong, please check your network connection and try again",
        email_invalid:"Please provide a valid email address."
    }

   // this method sets the closePopUp state to the oposite of it's original state.
   const handlePopUp = () => {
      setSending(false);
      setclosePopUp(!closePopUp);
   }

   // handlechange takes e the current input value and sets it's value to the value object.
    const handlechange = (e)=> {
        const name = e.target.name;
        const input = e.target.value;
        setValue({...value,[name]:input});

        // if the input name equals email and validEmail returns true set notEmail to correct tailwind class.
        if (name === "email"){
           if(!validEmail(input)){
               setNotEmail("text-red-500 text-xs")
           }else{
               setNotEmail("hidden")
           } 
        }
   }

   //check if input fields are filled out.
   const checkInput = ()=>{
       const fields = Object.entries(value);
       for(const [name,input] of fields){
           if(input === ''){
            setSending(false);
            setwrIcon(true)
            setclosePopUp(!closePopUp);
            setpopUpContent(content.fill_fields+name);
            return false;
           }
       }
       return true; 
   }

   // check if the email provided by the user is valid email and return true or false.
    const validEmail = (value)=> {
        if(Validator.isEmail(value)){
            return true;
        }
        return false;
    }

    //handle form submition and send post request to server if the write credentials were provided.    
    const handleSubmit = async (e)=>{
        e.preventDefault();

        // set sending to true 
        setSending(true);

        // if a field isn't filled out prevent form submission.
        if (!checkInput()){
            return;
        }

        //check if the email is valid before sending to server.
        if(!validEmail(value.email)){
            setSending(false);
            setwrIcon(true);
            setclosePopUp(!closePopUp);
            setpopUpContent(content.email_invalid);
            return;
        }

        //send post request to server with with data provided by the user.
        const res = await fetch('api/contact',
        {
           method: 'POST',
           headers:{
               'Content-Type': 'application/json',
           },
           body:JSON.stringify(value)
        });

        //parse response to json if post request is successful.
        const json = await res.json();
      

        //if the server sent the email successfully inform the user that the email has been sent.
       if(json.message){
            setSending(false);
            setwrIcon(false);
            setclosePopUp(!closePopUp);
            setpopUpContent(content.sent_success);
            setBtnText("Send another one");
            return;
       }
      
       // if the server failed to send the email inform the user to try again later.
       if (json.failed){
            setSending(false);
            setwrIcon(true)
            setclosePopUp(!closePopUp);
            setpopUpContent(content.sent_faild);
            return;
       }
       
       
       setBtnText("Try again");
    }

    return(
       <Layout>
           <AnimatePresence>
               <div className="w-full flex-col overflow-y-auto h-screen md:flex md:flex-row">
                   <div className="w-full px-4 flex justify-center items-center overflow-y-auto scrollbar-none">
                        <form onSubmit={handleSubmit} className="w-full max-w-lg h-full pt-8">
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input name="firstName"  vlaue={value.firstName} onChange={handlechange} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input name="lastName" value={value.lastName} onChange={handlechange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subject">
                                  Subject 
                                </label>
                                <input name="subject" vlaue={value.subject} onChange={handlechange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subject" type="text" placeholder="Subject..." required />
                                <p className="text-gray-600 text-xs italic">Subject if you dont mind.</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                  Email Address 
                                </label>
                                <input name="email" vlaue={value.email} onChange={handlechange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@gmail.com" required />
                                <p className={notEmail}>Please enter a valid gmail acount.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-textarea">
                                    Message 
                                </label>
                                <textarea name="message" value={value.message} onChange={handlechange} rows="5" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" type="textarea" placeholder="Message" required />
                                <p className="text-gray-600 text-xs italic">Feel free to write as you'd like</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full flex items-center px-3">
                                    <input className="shadow mb-6 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  type="submit" value="Let's talk." required />        
                                    <motion.div
                                        animate={{rotate:360}}
                                        transition={{yoyo:Infinity}}
                                        className={sending ? "w-fit h-fit ml-10 text-green-500 text-4xl" : "hidden" }
                                    >
                                        <VscIssueDraft/>  
                                    </motion.div> 
                                </div>
                            </div>
                        </form>    
                    </div>
                   <div className=" w-full hidden md:bg-slate-800 md:flex md:items-center md:justify-center overflow-y-auto scrollbar-none">
                       <h1 className="text-center text-slate-200 text-[3rem]">
                            MAKE <br/> IT <br/> HAPPEN.<br/> JUST <br/> A <br/> CLICK <br/> AWAY.
                        </h1> 
                   </div>
               </div>
               <motion.div className={closePopUp ? "hidden" : "absolute bg-slate-400/[0.5] w-full h-full left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"}
                    initial={{opacity:0}} 
                    animate={{opacity:1}}
                    transition={{duration:4}}
               >
                    <div className="relative flex-col flex justify-between md:p-8 p-3 bg-slate-100 rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.40)] w-80 h-48 md:w-96 md:h-60 left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <FaTimes className="absolute right-3 top-3 text-lg cursor-pointer hover:text-red-500" onClick={handlePopUp}/> 
                        <div className="flex justify-center pt-1 text-3xl">
                           { wrIcon ? <VscError className="text-red-500"/> : <VscPass className="text-green-500" /> }
                        </div>
                        <div className="min-h-[4rem] flex text-center items-center justify-center">
                            {popUpContent}
                        </div>
                        <div className="flex justify-evenly pb-1">
                        <div className="flex flex-wrap ">
                           <div className="w-full px-3">
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >{btnText}</button>       
                           </div>
                        </div>
                        </div>
                    </div>
               </motion.div>
           </AnimatePresence>
       </Layout>
    )
}

export default Contact;