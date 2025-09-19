import React from "react";
import Section from "../components/about/Section";
import Section2 from "../components/about/Section2";
import Section3 from "../components/about/Section3";
import Section4 from "../components/about/Section4";
import Section5 from "../components/about/Section5";

const About = () => {
  return (
    <div>
      <div className="container">
        <Section />
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section4 />
      </div>
    </div>
  );
};

export default About;
