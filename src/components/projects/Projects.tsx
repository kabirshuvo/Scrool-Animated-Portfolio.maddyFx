import React from "react";
import "../../app/globals.css";
interface ProjectProps {
  index: number;
  title: string;
  description: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

const Projects: React.FC<ProjectProps> = ({
  index,
  title,
  description,
  setModal,
}) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Projects;
