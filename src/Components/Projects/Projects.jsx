import React, { useEffect, useState } from "react";
import "./Projects.css";
import { GoProjectSymlink } from "react-icons/go";
import { FaHandHolding } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";

const Projects = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);

  // Counter function
  useEffect(() => {
    const incrementCounter = (setCounter, targetValue, duration) => {
      const intervalTime = 50; // Time per increment in ms
      const increment = Math.ceil(targetValue / (duration / intervalTime));
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev + increment >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return prev + increment;
        });
      }, intervalTime);
    };

    // Start counters
    incrementCounter(setProjectsCount, 100, 10000); // 2 seconds
    incrementCounter(setTeamCount, 20, 40000);
    incrementCounter(setClientsCount, 40, 10000);
    incrementCounter(setAwardsCount, 76, 10000);
  }, []);

  return (
    <>
      <div className="project-section">
        <h2>About Our Work</h2>
        <div className="work-section">
          {/* Left Section */}
          <div className="project-section-left">
            <div className="project-work">
              <GoProjectSymlink color="white" height={10} width={10} />
              <h2>Projects</h2>
              <p>{projectsCount}</p>
            </div>
            <div className="project-work">
              <GiTeamIdea color="white" height={10} width={10} />
              <h2>Our Team</h2>
              <p>{teamCount}</p>
            </div>
            <div className="project-work">
              <FaHandHolding color="white" height={10} width={10} />
              <h2>Clients</h2>
              <p>{clientsCount}</p>
            </div>
            <div className="project-work">
              <LiaAwardSolid color="white" height={10} width={10} />
              <h2>Awards</h2>
              <p>{awardsCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
