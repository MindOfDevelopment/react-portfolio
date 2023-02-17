import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/myusername"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/userid" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://stackoverflow.com/myusername"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
      </p>
      <p>All rights reserved &copy; Your Name</p>
    </footer>
  );
}

export default Footer;
