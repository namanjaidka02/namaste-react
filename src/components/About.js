import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react series</h2>

      <UserClass name="Naman class" location="Chandigarh" />
    </div>
  );
};

export default About;
