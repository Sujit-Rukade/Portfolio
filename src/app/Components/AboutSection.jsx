"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Programming Languages",
    id: "prog_lang",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>C++</li>
        <li>C</li>
        <li>Python</li>
        <li>SQL (MySQL)</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Web Dev.",
    id: "web_dev",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>JavaScript/TypeScript</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>I am a pre-final year student at the Pune Institute of Computer Technology (P.I.C.T), I am pursuing my B.E. in Electronics and Tele-Communication Engineering.</li>
      </ul>
    ),
  },
  {
    title: "Machine Learning",
    id: "ml",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Pandas</li>
        <li>Numpy</li>
        <li>Sklearn</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
        <li>Tensorflow</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("prog_lang");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="About Image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a frontend developer and a machine learning enthusiast with experience in creating interactive and responsive web applications. I have worked extensively with JavaScript, React, Tailwind CSS, Next.js, HTML, CSS, and Git. In addition, I have knowledge of Python, Sklearn, TensorFlow and Keras for machine learning. I am a quick learner and always looking to expand my knowledge and skill set. I am a team player and excited to work with others to create impactful applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("prog_lang")}
              active={tab === "prog_lang"}
            >
              {" "}
              Programming Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("web_dev")}
              active={tab === "web_dev"}
            >
              {" "}
              Web Dev{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ml")}
              active={tab === "ml"}
            >
              {" "}
              Machine Learning{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;