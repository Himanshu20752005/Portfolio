import { HERO_CONTENT } from "../constants";
import profilepic from '../assets/profileimg.jpeg'
import { delay, motion, transform } from "framer-motion"

const container = (delay) =>({
  hidden : {x:-100 , opacity:0},
  visible :{
    x:0,
    opacity:1,
    transition : {duration : 0.5 , delay : delay}
  }

})

const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
            <motion.h1  variants={container(0) } initial = "hidden" animate = "visible"
            className="flex justify-center lg:ml-4 pb-10 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-thin tracking-tight lg:mt-16 font-['Roboto']">
            HIMANSHU PANDEY
            </motion.h1>


            <motion.span  variants={container(0.5) } initial = "hidden" animate = "visible"
            className=" flex justify-center items-center lg:pl-4 bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> Full Stack developer</motion.span>

            <motion.p variants={container(1) } initial = "hidden" animate = "visible"
            className="my-2 max-w-xl p-5 font-light tracking-tighter" style={{ textAlign: 'justify' }}>
            {HERO_CONTENT}
            </motion.p> 

            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-32 flex items-center justify-center">
  <div className="flex justify-center">
    <motion.img 
      initial = {{x:100 , opacity:0}}
      animate = {{x:0 , opacity:1}}
      transition = {{duration:1 , delay:1.3}}
      src={profilepic} 
      alt="profile pic" 
      className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border-7 min-w-[300px] min-h-[300px]" 
              style={{ objectFit: 'cover' }}
    />
  </div>
</div>


        </div>
      </div>
    );
  };
  
  export default Hero;