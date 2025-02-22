import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
  const userData = useLoaderData();

  const {name, website} = userData;
  return (
    <div>
      <h3>Details about User: {name}</h3>
      <p>Website: {website}</p>

    </div>
  );
};

export default UserDetails;