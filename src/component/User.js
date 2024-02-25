import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-func">
      <h3>Count :{count}</h3>
      <h3>Count2 :{count2}</h3>
      <h3>User : {props.name}</h3>
      <h3>Course : React</h3>
      <h3>Duration : 2 months </h3>
    </div>
  );
};

export default User;
