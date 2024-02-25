import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us </h1>
        <h2>The Details of the team is provided at this Page</h2>
        <User name={"Manish - Function"} />
        <UserClass name={"First - Class"} />
        <UserClass name={"Second - Class"} />
      </div>
    );
  }
}

export default About;
