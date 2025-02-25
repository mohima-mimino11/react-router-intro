import {  useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Todo.css';
const Todo = ({todo}) => {
  const {id, title} = todo;
  const navigate = useNavigate();
  
  
  const handleShowStatus = () =>{
      navigate(`/todos/${id}`)
  }
  return (
    <div>
      
      <div className="todo">
          <h3>{id}</h3>
          <p>Todos: {title}</p>
          <button onClick={handleShowStatus}>Show Status</button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object
}

export default Todo;