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
    <>
      <h1>Resume</h1>
      <p>I have worked in these softwares.</p>
      <Pictures />
    </>
  );
};

export default ResumePage;
