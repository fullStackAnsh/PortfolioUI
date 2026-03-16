import React from "react";

const projects = [
  {
    title: "Aceternity",
    description:
      "A design and development studio that focuses on building quality apps.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000",
    tags: ["Nextjs", "Tailwindcss"],
  },
];

function Home() {
  return (
    <div className="flex  py-[10vh] overflow-y-hidden justify-center">
      <div className=" lg:w-[50vw] flex flex-col  lg:pl-0 pl-4">

      {/* Hero Section */}
      <div className="max-w-3xl ">
        <h1 className="lg:text-3xl text-neutral-700 font-bold mb-6">
          👋 <br/> Hello there! I'm Ansh
        </h1>
        <div className="max-w-2xl  ">
        <p className="lg:text-[17px] text-[15px] font-light text-neutral-500 mb-4">
          I'm a full-stack developer that loves <span className="bg-neutral-100 text-neutral-500 px-2 py-1 rounded">building products</span> and web apps that
          can impact millions of lives.
        </p>

        <p className="lg:text-[17px] text-[15px] font-light text-neutral-500 ">
          I'm a senior software engineer with{" "}
          <span className="bg-neutral-100 text-neutral-500 px-2 py-1 rounded">
            7 years of experience
          </span>{" "}
          building scalable web apps that are performance optimized and good
          looking.
        </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-20">
        <h2 className="text-[18px] font-bold text-neutral-600 mb-10">
          What I've been working on
        </h2>

        <div className="space-y-12 ">
          {projects.map((project, index) => (
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
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 items-center text-gray-700 text-lg font-medium">
          <span><img className="w-15" src="next.png" alt="Next.js" /></span>
          <span><img className="w-15" src="react.png" alt="AWS" /></span>
          <span><img className="w-15" src="motion.png" alt="Figma" /></span>
          <span><img className="w-15" src="node.png" alt="Framer Motion" /></span>
          <span><img className="w-15" src="express.png" alt="Node.js" /></span>
          <span><img className="w-15" src="mongodb.png" alt="TailwindCSS" /></span>
          <span><img className="w-15" src="vercel.png" alt="Vercel" /></span>
        </div>
      </div>
</div>
    </div>
  );
}

export default Home;