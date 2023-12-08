/* eslint-disable no-unused-vars */
import React from "react";
import "./project.css";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="">
    <div className="inline-block mb-3">
    <p className="section-title">
      <FaExternalLinkSquareAlt className="text-white text-xl " />
      Projects
    </p>
  </div>
      <div className="liveproject flex flex-col  lg:flex-row justify-between gap-10">
        <div className="w-[300px] h-[200px] shadow-md rounded">
          <div className="box box-1 relative w-full h-[150px] "></div>
          <div className="link flex gap-2 mt-3">
            <a
              href="https://omarstorebd.netlify.app"
              className="flex items-center text-sm"
            >
              <FaExternalLinkSquareAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/E-Commerce-Fontend-save"
              className="flex  items-center text-sm"
            >
              <FaGithub />
              <span>Front-end</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/E_commerce_backend"
              className="flex  items-center text-sm"
            >
              <FaGithub />
              <span>Backend</span>
            </a>
          </div>
        </div>

        <div className="w-[300px] h-[200px] shadow-md rounded ">
          <div className="box box-2 relative w-full h-[150px] "></div>

          <div className="link flex gap-2 mt-3">
            <a
              href="https://65636d71593b1108eb9a54b0--sweet-clafoutis-63dd83.netlify.app"
              className="flex items-center text-sm"
            >
              <FaExternalLinkSquareAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/blog-project-client"
              className="flex  items-center text-sm"
            >
              <FaGithub />
              <span>Front-end</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/blog-project-server"
              className="flex  items-center text-sm"
            >
              <FaGithub />
              <span>Backend</span>
            </a>
          </div>
        </div>

        <div className="w-[300px] h-[200px] shadow-md rounded">
          <div className="box box-3 relative w-full h-[150px] "></div>
          <div className="link flex gap-2 mt-3">
            <a
              href="https://growup-skill.web.app"
              className="flex items-center text-sm"
            >
              <FaExternalLinkSquareAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/b610-learning-platfrom-client-side-Omarabdullah99"
              className="flex  items-center text-sm"
            >
              <FaGithub />
              <span>Front-end</span>
            </a>

            <a
              href="https://github.com/Omarabdullah99/b610-learning-server-site"
              className="flex  items-center text-sm"
            >
              <FaGithub />
              <span>Backend</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;