"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Pulzion'24 Submission Platform",
        description: " A streamlined web application built for event participants to submit their entries.",
        image: "/images/projects/submission.png",
        tag: ["All", "Web"],
        gitUrl: "https://submissions.pulzion.co.in/",
        previewUrl: "https://submissions.pulzion.co.in/",
    },
    {
        id: 2,
        title: "FinTracker (AI Finance Tracker)",
        description: "A comprehensive financial tracking app that leverages AI for receipt scanning, budget alerts, and monthly reports, integrating advanced security features and automation for enhanced user experience and data insights.",
        image: "/images/projects/ai.png",
        tag: ["All", "Web", "Machine Learning"],
        gitUrl: "https://github.com/Sujit-Rukade/FinTracker",
        previewUrl: "https://fintracker-app.vercel.app/",
    },
    {
        id: 3,
        title: "OCR Web Application",
        description: "A tool designed to extract text from images accurately, enabling digital text conversion for easier data handling.",
        image: "/images/projects/ocr.png",
        tag: ["All", "Web", "Machine Learning"],
        gitUrl: "https://github.com/Sujit-Rukade/OCR-Web-App",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "WhatsApp Text Analyzer",
        description: "An interactive platform for analyzing WhatsApp chat data, providing insights through visualizations and statistics.",
        image: "/images/projects/wp.png",
        tag: ["All", "Web", "Machine Learning"],
        gitUrl: "https://github.com/Sujit-Rukade/WhatsApp-Text-Analyzer",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Dialogue Summarizer",
        description: "A text summarization app leveraging the Pegasus transformer model to generate concise summaries of conversational data.",
          image: "/images/projects/summarizer.png",
        tag: ["All", "Web", "Machine Learning"],
        gitUrl: "https://github.com/Sujit-Rukade/Text-Summarizer",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Loan Approval Prediction",
        description: "A machine learning project to predict loan approvals using data analysis and classification models.",
          image: "/images/projects/loan.png",
        tag: ["All", "Machine Learning"],
        gitUrl: "https://github.com/Sujit-Rukade/Loan_Approval_Prediction",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects" className="sm:py-24">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Machine Learning"
            isSelected={tag === "Machine Learning"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgURL={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;