"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const projects = [
  {
    name: "AI Resume Builder",
    image: "/ResumeAI.png",
    desc: "A full-stack web application that enables users to generate professional resumes using AI. The app provides a clean interface where users input their information, and the AI formats and enhances their resume content based on industry standards and job descriptions. Features include PDF download, section customization, and real-time content suggestions.",
    link: "https://ai-resume-builder-hjoc.vercel.app/",
  },
  {
    name: "AccessME",
    image: "/accessMe.png",
    desc: "An AI-powered platform designed to help users prepare for job interviews. Users can generate interview questions tailored to specific roles and practice answering them with voice input. The app uses speech recognition and feedback mechanisms to help improve confidence and performance in real interviews.",
    link: "https://access-me.vercel.app/",
  },
  {
    name: "PromtAI",
    image: "/promptAI.png",
    desc: "A community-driven full-stack application where users can create, share, and explore AI prompts. Users can post effective prompts for various AI tools, browse by category, save favorites, and upvote useful entries. The platform encourages knowledge sharing and creativity among AI enthusiasts and professionals.",
    link: "https://promptai-orpin.vercel.app/",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div
      id="projects"
      className="md:grid lg:grid-cols-3 bg-[#262626] md:grid-cols-2 mx-auto justify-center items-center flex flex-col"
    >
      {projects.map((project, index) => (
        <BackgroundGradient
          className="rounded-[22px] md:h-[500px] max-w-sm p-4 sm:p-10  bg-zinc-900"
          key={index}
        >
          <a target="_blank" href={project.link}>
            <Image
              src={project.image}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
          </a>
          <a target="_blank" href={project.link}>
            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              {project.name}
            </p>
          </a>

          <p className="text-sm  text-neutral-400">{project.desc}</p>
          <a target="_blank" href={project.link}>
            <button className="rounded-full px-4  py-2 text-white flex items-center space-x-1  mt-4 text-[14px] font-bold bg-zinc-800">
              <span>Visit site</span>
            </button>
          </a>
        </BackgroundGradient>
      ))}
    </div>
  );
}
