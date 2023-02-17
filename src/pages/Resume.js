import React from "react";

function Resume() {
  const download = () => {
    fetch("resume.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        let fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileUrl;
        alink.download = "resume.pdf";
        alink.click();
      });
  };
  return (
    <div className="resume_page">
      <p>
        <button onClick={download}>Download Resume</button>
      </p>

      <ul>
        <li>HTML</li>
        <li>HTML</li>
        <li>HTML</li>
        <li>HTML</li>
        <li>HTML</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}

export default Resume;
