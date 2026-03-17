import React from "react";

function Contact() {
  return (
    <div className="flex lg:px-[15vw] lg:ml-[13vw] px-5 lg:py-22 py-10 ">
       <div className="">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-10 ">

        <div className="lg:text-3xl text-[18px]">✉️</div>

        <h1 className="lg:text-4xl text-[18px] font-bold text-neutral-800 lg:mb-3 ">
          Contact Me
        </h1>

        <p className="text-neutral-500 lg:leading-7 lg:max-w-[35vw]">
          Reach out to me over email or fill up this contact form.
          I will get back to you ASAP - I promise.
        </p>

      </div>

      {/* Form */}
      <form className="lg:max-w-4xl mx-auto flex flex-col gap-6 ">

        {/* Name + Email */}
        <div className="grid grid-cols-2  md:grid-cols-2 gap-1 ">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 placeholder:text-neutral-500 rounded-lg px-5  py-2 outline-none lg:w-[25vw] w-[100%] focus:ring-2 focus:ring-neutral-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-neutral-100 placeholder:text-neutral-500 rounded-lg px-5 py-2 outline-none lg:w-[25vw]  focus:ring-2 focus:ring-neutral-300"
          />

        </div>

        {/* Message */}
        <textarea
          rows="8"
          placeholder="Your Message"
          className="bg-neutral-100 placeholder:text-neutral-500 rounded-lg px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-neutral-300"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-neutral-200 placeholder:text-neutral-500 hover:bg-neutral-300 transition rounded-lg py-3 font-semibold text-neutral-700"
        >
          Submit
        </button>

      </form>
</div>
    </div>
  );
}

export default Contact;