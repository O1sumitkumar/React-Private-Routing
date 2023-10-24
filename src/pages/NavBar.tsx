import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <ul>
      <li>
        <NavLink to="/dashboard">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
