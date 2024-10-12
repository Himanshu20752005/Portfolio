import logo from '../assets/shading.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6 ml-7">
    <div className="flex flex-shrink-0 items-center">
      <img src={logo} alt="logo" className='w-10'/>
 
    </div>

    <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
      <FaLinkedin/>
      <FaGithub/>
      <FaSquareXTwitter/>
      <FaInstagram/>
    </div>

  </nav>
}

export default navbar