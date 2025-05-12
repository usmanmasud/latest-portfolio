"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Front End Developer",
    description:
      "I specialize in creating clean, responsive, and user-friendly interfaces. I enjoy transforming designs into interactive experiences using modern front-end technologies like HTML, CSS, JavaScript, and frameworks such as React..",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Front End Developer
      </div>
    ),
  },
  {
    title: "Full Stack Developer",
    description:
      "Beyond the front end, I’m building full-stack skills that allow me to develop and manage complete web applications. I work with backend technologies like Node.js and databases to ensure seamless functionality from end to end.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Full Stack Developer
      </div>
    ),
  },
  {
    title: "Collaborative Developer",
    description:
      "I believe great products are built through teamwork. I enjoy working with others, sharing ideas, and contributing to a supportive and productive development environment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Collaborative Developer
      </div>
    ),
  },
  {
    title: "Open to Learning",
    description:
      "Technology is always evolving, and so am I. I’m constantly exploring new tools, frameworks, and best practices to sharpen my skills and stay current in the ever-changing tech landscape.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Open to Learning
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b  from-neutral-950 to-neutral-800"
    >
      <p className="heading p-8">About Me</p>
      <StickyScroll content={content} />
    </div>
  );
}
