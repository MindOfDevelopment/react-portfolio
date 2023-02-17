import React from "react";

function Project({ imgUrl, liveLink, codeLink }) {
  return (
    <div className="project_item">
      <img src={imgUrl} alt="" />
      <p>
        <a href={liveLink} target="_blank" rel="noreferrer">
          Live link
        </a>
      </p>
      <p>
        <a href={codeLink} target="_blank" rel="noreferrer">
          Source code link
        </a>
      </p>
    </div>
  );
}

export default Project;
