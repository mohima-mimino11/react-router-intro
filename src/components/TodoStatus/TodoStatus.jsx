import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const TodoStatus = () => {
  const todo = useLoaderData();
  const {completed, title} = todo;
  const navigate = useNavigate();
  const statusStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  }

  const handleGoBack = () =>{
    navigate(-1)
  }
  const {Id} = useParams();
  console.log(Id);
  return (
    <div>
      <div style={statusStyle}>
      <h2>{title}</h2>
      {
        completed === true ? <FaCircleCheck></FaCircleCheck> : <RxCrossCircled></RxCrossCircled>
      }
      
      </div>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
    
  );
};

export default TodoStatus;