import React from "react";
import logo_html5 from "../images/HTML5.svg";
import logo_R from "../images/R.svg";
import logo_Apex from "../images/Apex.png";

const Pictures = () => {
  let langObjects = [
    { id: 1, name: "HTML5", logo: logo_html5 },
    { id: 0, name: "R", logo: logo_R },
    { id: 2, name: "Apex", logo: logo_Apex },
  ];

  return (
    <ul>
      {langObjects.map((lang) => (
        <li key={lang.id}>
          <img src={lang.logo} alt={lang.name + " logo"} /> {lang.name}
        </li>
      ))}
    </ul>
  );
};

const ResumePage = () => {
  return (
    <div className="content-width">
      <h1>Aron Kuch</h1>
      <p>A description of who I am, professionally.</p>
      <h2>Experience</h2>
      <p>I have worked in these softwares.</p>
      <Pictures />
      <h2>Education</h2>
      <h3>Bachelor's of Arts: Biology</h3>
      <h3>Business courses</h3>
      <h3>Computer Science courses</h3>
      <h3>LinkedIn Learning</h3>
    </div>
  );
};

export default ResumePage;
