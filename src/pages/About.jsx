import React from "react";

function About() {
  return (
    <div className="flex-1 lg:ml-[13vw] px-4 lg:px-16 lg:py-[14vh] py-[10vh] overflow-hidden ">

      {/* Heading */}
      <div className="text-center mb-10  flex flex-col items-start   lg:pl-[11vw]">
        <div className="lg:text-3xl text-[18px] lg:mb-2">💬</div>

        <h1 className="lg:text-4xl text-[18px] font-bold text-neutral-800">
          About Me
        </h1>
      </div>

      {/* Image Cards */}
      <div className="flex justify-center lg:gap-10 mb-16">

        <img
          src="profile.jpg"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px] object-cover rounded-xl shadow-lg rotate-[-8deg]"
        />

        <img
          src="naruto.jpeg"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px]  object-cover rounded-xl shadow-lg rotate-[2deg]"
        />

        <img
          src="code.jpeg"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px]  object-cover rounded-xl shadow-lg rotate-[-4deg]"
        />

        <img
          src="comic.jpg"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px]  object-cover rounded-xl shadow-lg rotate-[3deg]"
        />

      </div>

      {/* Text Content */}
      <div className="max-w-3xl mx-auto text-neutral-500 lg:leading-6 leading-5 lg:tracking-tight tracking-wide lg:pr-0 pr-2 text- space-y-6 text-[14px] lg:text-[17px]">

        <p>
          Hey there, I'm Ansh Kanojia - a developer driven by his curiosity to create, I would always choose reading books in my free time over doomscrolling , a certified fan of comic books and manga , honorary shoutout - one piece - do check it out 
          . Welcome to my corner
          of the digital world!
        </p>

        <p>
          Ever since I started coding my focus has not only been to make the app functional but to also have a good looking UI so the user can navigate through the app seamlessly . With lots of iterations I find new and better ways of doing things , whether it is brainstorming a idea or getting the inspiration for its design to code architecture , I have learnt all of it from trial and error and still continue to do so.
        </p>

        <p>
          My journey doesn't stop at coding , actually it ends at coding , coding is the last step , I only love working on a project if I know that it will solve a problem , to find such ideas I contantly go on reddit communities , startup directories like ycombinator and producthunt to observe what people are talking about and to get inspiration and also  to increase the scope of my domain knowledge. 
        </p>

        <p>
          My love for comic books and mangas also reflect in my life and in my coding habits , I grew up watching MCU , spiderman , batman and anime characters like luffy and naruto. These all still inspire me in my day to day life .I think of coding as my way of giving back to the world similar to how my favourite characters have always done . 
        </p>

        <p>
          Through this website, I aim to share my insights, experiences,
          and creations with you. Whether you're a fellow developer
          seeking likeminded ideas, a fellow student in search of inspiration,
          or simply someone who appreciates the finer aspects of building software,
          there's something here for you.
        </p>

        <p>
          Join me on this journey of self development,combining logic and
          creativity, code and visual aesthetics.Leave a message for me through my contact page , we can share knowledge with each other and grow together.
        </p>

        <p>
          Thank you for being here, and I can't wait to embark on
          this adventure with you.
        </p>

      </div>

    </div>
  );
}

export default About;