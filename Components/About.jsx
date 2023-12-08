import React from 'react'
import { HiEmojiHappy } from "react-icons/hi";

const About = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
    <div className="max-w-[1250px] mx-auto">
    <div className="inline-block">
          <p className="section-title">
          <HiEmojiHappy  className='text-xl'/>
            About Me
          </p>
        </div>
      <div className="mt-7">
        <p className="mt-6 text-black text-sm leadiing-10">
          Hello, It’s me Omar Abdullah. I have completed my diploma degree in Computer Technology from Khulna Polytechnic Institute. I am a Full-stack developer. I have knowledge about frontend and backend technology to build responsive modern and dynamic websites. <br /> <br />

          On the front-end side, I am specialized in HTML, CSS, tailwind, bootstrap, and JavaScript frameworks such as React. I can create user friendly web applications. <br /> <br />

         Moving to the backend, I specialize in backend web development using Node.js, Express.js, MongoDB, and Mongoose. This tech stack allows me to build the server-side of web applications, handle data storage, and create robust APIs for various web and mobile projects. <br /> <br />

        I have done several projects like e-commerce, blog, and quiz web applications using React, CSS, Tailwind CSS, React Router DOM, Express.js, NoSQL databases like MongoDB, and authentication with Mongoose.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About