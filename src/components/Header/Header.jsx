import {  NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about" >About</NavLink>
       
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>
    </div>
  );
};

export default Header;