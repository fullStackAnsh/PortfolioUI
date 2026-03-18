import React from "react";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="hidden lg:flex fixed left-0 top-0  w-[13vw] h-screen bg-neutral-100 border-none 
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

          <NavLink to="/" className="flex items-center justify-center w-[10vw]  hover:text-neutral-800 cursor-pointer py-2 rounded-lg ">
            Home
          </NavLink>

          <NavLink to="/about" className="flex items-center justify-center w-[10vw]  py-2  hover:text-neutral-800 cursor-pointer rounded-lg">
             About
          </NavLink>

          <NavLink to="/projects" className="flex items-center justify-center w-[10vw]  py-2  hover:text-neutral-800 cursor-pointer rounded-lg ">
             Projects
          </NavLink>

          <NavLink to="/contact" className="flex items-center justify-center w-[10vw]  py-2  hover:text-neutral-800 cursor-pointer rounded-lg ">
             Contact
          </NavLink>

        </nav>

        {/* Socials */}
        <div className="mt-15">
          <p className="text-[15px] font-bold text-neutral-800 mb-3">
            Connect
          </p>

          <div className="flex flex-col gap-1 items-center  text-gray-600 border-l border-l-neutral-200 ">

            <a href="https://www.linkedin.com/in/ansh-kanojia-418b34211/"
  target="_blank" className="flex items-center justify-center w-[10vw]  py-2  hover:text-neutral-800 cursor-pointer rounded-lg ">
             Linkedin
          </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anshkanojia13@gmail.com"
  target="_blank" className="flex items-center justify-center w-[10vw]  py-2  hover:text-neutral-800 cursor-pointer rounded-lg ">
             Gmail
          </a>

          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <a href="Resume.pdf" target='_blank'>
      <button className="bg-black text-white w-[10vw] text-[13px] font-bold py-3 rounded-full 
                        shadow-[0px_10px_23px_0px_#4a5568]
                         ">
        Read Resume 
      </button>
      </a>
    </div>
  );
}

export default SideBar;