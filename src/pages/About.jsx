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
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px] object-cover rounded-xl shadow-lg rotate-[-8deg]"
        />

        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px]  object-cover rounded-xl shadow-lg rotate-[2deg]"
        />

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px]  object-cover rounded-xl shadow-lg rotate-[-4deg]"
        />

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="lg:w-[170px] lg:h-[250px] w-[90px] h-[130px]  object-cover rounded-xl shadow-lg rotate-[3deg]"
        />

      </div>

      {/* Text Content */}
      <div className="max-w-3xl mx-auto text-neutral-500 lg:leading-6 leading-5 lg:tracking-tight tracking-wide lg:pr-0 pr-2 text- space-y-6 text-[14px] lg:text-[17px]">

        <p>
          Hey there, I'm John Doe - a passionate developer, avid writer,
          and a connoisseur of awesome design. Welcome to my corner
          of the digital world!
        </p>

        <p>
          Since the early days of my journey, I've been captivated by
          the art of crafting exceptional digital experiences.
          As a developer, I thrive on turning lines of code into
          functional and elegant solutions. My goal is to not just
          create software, but to build digital marvels that seamlessly
          merge form and function.
        </p>

        <p>
          But my journey doesn't stop at coding. With a heart full of
          words and a mind brimming with ideas, I've ventured into
          the realm of writing. From tech articles that unravel
          complex concepts to creative tales that ignite the imagination,
          I weave words to inform, entertain, and inspire.
        </p>

        <p>
          What sets me apart is my unwavering appreciation for design.
          I believe that aesthetics and usability go hand in hand.
          My eye for awesome design ensures that every project I
          undertake not only works flawlessly under the hood but also
          looks stunning on the surface.
        </p>

        <p>
          Through this website, I aim to share my insights, experiences,
          and creations with you. Whether you're a fellow developer
          seeking solutions, a fellow writer in search of inspiration,
          or simply someone who appreciates the finer aspects of design,
          there's something here for you.
        </p>

        <p>
          Join me on this journey of bytes and narratives, logic and
          creativity, code and prose. Together, we can explore the
          boundless possibilities of technology and storytelling,
          all while reveling in the sheer beauty of thoughtful design.
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