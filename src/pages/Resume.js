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
        <li>
          Knowledge of React, a popular frontend library used to build dynamic
          user interfaces.
        </li>
        <li>
          Experience with HTML and CSS, the building blocks of web design.
        </li>
        <li>
          Familiarity with Bootstrap, a frontend framework for building
          responsive, mobile-first websites.
        </li>
        <li>
          Understanding of AJAX and how to use it to make asynchronous requests
          to the server and update the UI without reloading the page.
        </li>
        <li>
          Ability to use JavaScript DOM manipulation to dynamically update the
          content and appearance of web pages.
        </li>
      </ul>

      <ul>
        <li>
          Knowledge of Node.js, a popular backend JavaScript runtime used to
          build scalable and efficient web applications.
        </li>
        <li>
          Experience with SQL databases like MySQL and knowledge of querying
          languages like SQL and NoSQL databases like MongoDB.
        </li>
        <li>
          Familiarity with RESTful APIs and how to design, develop and consume
          them.
        </li>
        <li>
          Understanding of server-side programming and server configuration.
        </li>
        <li>
          Ability to work with version control systems like Git and knowledge of
          collaboration tools like GitHub.
        </li>
      </ul>
    </div>
  );
}

export default Resume;
