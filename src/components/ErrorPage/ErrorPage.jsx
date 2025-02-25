import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  // console.log(error.error.message);
  
  
  return (
    <div>
      <h3>Ooopss!!</h3>
      <p>
        <i>{error.statusText || error.error.message}</i>
      </p>
      {
        error.status === 404 && 
        <div>
          <h3>Page Not Found</h3>
          <p>Go back to <Link to="/">Home</Link></p>
        </div>
      }
    </div>
  );
};

export default ErrorPage;