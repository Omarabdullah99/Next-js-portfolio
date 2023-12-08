"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/animations.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['MERN Stack Developer', 'Full Stack Developer', 'Web Developer', 'Front-End Developer'],
    loop: {},
    typeSpeed:140
  })
  return (
    <section className="hero-container">
      <div className="hero-content-container">
        <div className="max-md:order-2 flex flex-col gap-5 z-40">
          <div className="">
            <h1 className="text-4xl">Hi, It's me  Omar Adbullah  </h1>

            <h1 className="text-xl mt-3">I'm a 
          <span className="ml-3" style={{fontWeight:'bold', color:'green'}}>{text}</span>
          <span style={{ color:'green'}}> <Cursor cursorStyle='...' /> </span>
          </h1>
            <p className="mt-5 text-sm">
            I am a MERN Stack developer . I have a strong foundation in front-end
            & back-end development and am skilled in creating user-friendly and
            responsive web applications using MERN Stack technology
            </p>
          </div>

          <div className="flex gap-4 max-md:justify-center">
            <Link href="#projects">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Projects
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <Image src="/assets/profilebright.png" width={400} height={400} alt="omar" className="z-10" />
      </div>

      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;