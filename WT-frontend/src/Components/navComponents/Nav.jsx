import React from "react";
import Logo from "../../Utility/images/Logo.png";
import { NavLink, Link } from "react-router-dom";

const navHeader = [
  { title: "Home", path: "/" },
  { title: "Leaderboard", path: "/ranking" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-100 p-5 ">
      <NavLink to="/">
        <img src={Logo} width="50px" alt="Our logo" className="rounded-full" />
      </NavLink>
      <div className="flex gap-10 items-center">
        {navHeader.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            {item.title}
          </NavLink>
        ))}
        <Link
          to="/get-started"
          className="btn"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
