import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OH! Wrong Page</h1>
      <h2>Something Went Wrong</h2>
      <h3>Error Status : {err.status}, {err.statusText}</h3>
      <h3>Error Details : {err.data}</h3>
    </div>
  );
};

export default Error;
