import { Link } from "react-router-dom";


const User = ({user}) => {
  const {id,name,email, phone} = user;
  const userStyle = {
    border: '2px solid yellow',
    padding: '5px',
    borderRadius: '15px'
  }
  return (
    <div style={userStyle}>
      <h3>Name: {name}</h3>
      <p>email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}> 
      <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;