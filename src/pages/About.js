import React from "react";

function About() {
  return (
    <section id="about_page">
      <h2>About Me</h2>
      <div className="about_img">
        <img
          src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-768x512.jpg"
          alt="profile"
        />
      </div>
      <div>
        <p>
          My name is Mindaugas Narusevicius, a student at Birmingham University
          Coding Fullstack Bootcamp. I live in Birmingham, UK. As a fullstack
          coding bootcamp student, I have been immersed in the world of
          programming and software development for quite some time now. With
          each passing day, I find myself becoming more and more fascinated with
          the limitless possibilities that programming offers.
        </p>
        <p>
          During my time in the bootcamp, I have been exposed to a wide range of
          programming languages and tools, including HTML, CSS, JavaScript,
          React and Node.js. As I continue to learn and grow as a programmer, I
          am excited to see where this journey will take me and what kind of
          innovative solutions I will be able to create.
        </p>
      </div>
    </section>
  );
}

export default About;
