import React from 'react'
import { NavLink } from 'react-router-dom';

const projects = [
  {
    title: "DankUrls",
    description:
      "Turn long boring urls into dank short names that you can remember.",
    image:
      "dankurls.png",
    tags: ["ReactJS", "NodeJS","TailwindCSS","MongoDB"],
    link:"https://dankurls.vercel.app/"
  }
];

function Projects() {
  return (
   
      <div className="flex  lg:py-[13vh] py-[6vh]  overflow-y-hidden justify-center">
      <div className=" lg:w-[50vw] flex flex-col  lg:pl-0 pl-4">

      {/* Hero Section */}
      <div className="max-w-3xl ">
        <h1 className="lg:text-4xl text-neutral-700 font-bold lg:mb-15 mb-10">
          ⚡ <br/> What I've been working on
        </h1>
      </div>

      {/* Projects Section */}
      <div  >

        <div className="space-y-12 ">
          {projects.map((project, index) => (
            <NavLink to={project.link}>
            <div key={index} className="flex lg:gap-3 lg:flex-row flex-col items-start  hover:bg-neutral-50 rounded-2xl">
              
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-32 object-cover rounded-xl shadow"
              />

              <div className="relative lg:h-32 h-30">
                <h3 className="lg:text-[18x] text-[20x] font-bold text-neutral-700 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-[14px]  lg:max-w-xl lg:pr-0 pr-1">
                  {project.description}
                </p>

                <div className="flex gap-2 absolute z-10 bottom-0">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-neutral-500 px-3 py-1 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
            </NavLink>
          ))}
        </div>
      </div>

      
</div>
    </div>
    
  )
}

export default Projects