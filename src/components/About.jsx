import aboutImg from '../assets/Aboutme3.png'
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className=" border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-3xl">About
      <span className="text-neutral-500"> Me</span>
      </h1>

    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 lg:pr-32 flex items-center justify-center">

      <div className="flex items-center justify-center ">
        <motion.img whileInView ={{x:0 , opacity:1}} animate={{x:-100 , opacity:0}} transition={{duration:0.5 , delay:0.5}} 
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-2xl border-7 min-w-[300px] min-h-[300px]"  src={aboutImg} alt="About" />
      </div>
       </div>
       <div className="w-full lg:w-1/2 flex items-center justify-center">
       <div className="flex justify-center lg:justify-start">
       <motion.p whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
       transition={{ duration: 0.5 , delay:0.5}}
       className='font-light tracking-tighter max-w-xl p-5 flex' style={{textAlign:'justify'}}>{ABOUT_TEXT}</motion.p>
       </div>

      </div>
    </div>
      
    </div>
  )
}

export default About
