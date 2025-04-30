import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/fundamentos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Fundamentos
        </NavLink>
        <NavLink to="/exercicios" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Exercicios
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
