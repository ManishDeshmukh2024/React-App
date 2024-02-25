import React from "react";

class UserClassCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count2: 2 };

    console.log(this.props.name + "Child USerClassCopy Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child USerClassCopy Compenent");
  }

  render() {
    console.log(this.props.name + "Child USerClassCopy Render");
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-func">
        <h3>Count : {count}</h3>
        <h3>User : {name}</h3>
        <h3>Course : React</h3>
        <h3>Duration : 2 months </h3>
      </div>
    );
  }
}

export default UserClassCopy;
