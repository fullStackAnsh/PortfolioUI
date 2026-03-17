import React from 'react'
import { NavLink } from 'react-router-dom'

function MobileViewSidebar({isOpen,setIsOpen}) {
  return (
    <div className='fixed lg:hidden w-[50vw] z-20'>
     <div className="  h-screen bg-neutral-100 border-none 
                    flex-col justify-between px-5 py-8">

      {/* TOP SECTION */}
      <div>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="profile.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="leading-3">
            <h2 className="font-bold text-neutral-800 text-[15px]">Ansh Kanojia</h2>
            <p className="text-sm text-neutral-500">Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 items-center  text-gray-600 border-l border-l-neutral-200 ">

          <NavLink to="/" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-[25vw]   hover:text-neutral-800 cursor-pointer py-2  ">
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-[25vw]  py-2  hover:text-neutral-800 cursor-pointer ">
             About
          </NavLink>

          <NavLink to="/projects" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-[25vw]  py-2  hover:text-neutral-800 cursor-pointer  ">
             Projects
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-[25vw]  py-2  hover:text-neutral-800 cursor-pointer ">
             Contact
          </NavLink>

        </nav>

        {/* Socials */}
        <div className="mt-15">
          <p className="text-[15px] font-bold text-neutral-800 mb-3">
            Connect
          </p>

          <div className="flex flex-col border-l border-l-neutral-200  pl-1 gap-2 text-gray-600 items-center">

            <a  href="https://www.linkedin.com/in/ansh-kanojia-418b34211/"
  target="_blank" className="flex items-center justify-center w-[25vw]  py-2  hover:text-neutral-800 cursor-pointer ">
             Linkedin
          </a>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anshkanojia13@gmail.com"
  target="_blank" className="flex items-center justify-center w-[25vw]  py-2  hover:text-neutral-800 cursor-pointer ">
             Gmail
          </a>

          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <button className="bg-black text-white w-[30vw] text-[13px] font-bold py-3 rounded-full 
                        shadow-[0px_10px_23px_0px_#4a5568] absolute right-8 bottom-3
                         ">
        Read Resume 
      </button>

    </div></div>
  )
}

export default MobileViewSidebar