import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-3xl">About
      <span className="text-neutral-500"> Me</span>
      </h1>

    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 lg:p-8">

      <div className="flex items-center justify-center pr-8">
        <img className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border-7 min-w-[200px] min-h-[200px]"  src={aboutImg} alt="About" />
      </div>
       </div>
       <div className="w-full lg:w-1/2 flex items-center">
       <div className="flex justify-center lg:justify-start">
       <p className='font-light tracking-tighter max-w-xl py-6 flex pr-8' style={{textAlign:'justify'}}>{ABOUT_TEXT}</p>
       </div>

      </div>
    </div>
      
    </div>
  )
}

export default About
