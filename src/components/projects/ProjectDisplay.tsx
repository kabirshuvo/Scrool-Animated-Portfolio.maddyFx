"use client";
import React, { useState } from "react";
import Project from "./Projects";
import Modal from "../modals/ProjectModal";

interface ProjectItem {
  title: string;
  src: string;
  color: string;
  description: string;
}

const projects: ProjectItem[] = [
  {
    title: "Print On Demand",
    description: "View Designs",
    src: "AdobeIllustrator_logo.png",
    color: "#000000",
  },
  {
    title: "Nitting Graphics",
    description: "More Info",

    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "LOGO - story telling",
    description: "Take a Tour",

    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "AI Super Power",
    description: "Wish me good",

    src: "silencio.png",
    color: "#706D63",
  },
];

const ProjectDisplay: React.FC = () => {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  return (
    <main>
      <h2 className="text-5xl p-16 text-center ">My Best Works</h2>
      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
};

export default ProjectDisplay;
