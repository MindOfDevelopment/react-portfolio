import React from "react";
import Project from "../components/Project";
import data from "../data/projects.json";

function Portfolio() {
  return (
    <div className="portfolio_page">
      <h1>My Recent Projects</h1>

      <div className="projects_container">
        {data.projects.map((p, i) => {
          return (
            <Project
              key={i}
              imgUrl={p.imgUrl}
              liveLink={p.liveLink}
              codeLink={p.codeLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
