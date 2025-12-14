import React from "react";
import Logo from "../../Utility/images/Logo.png";
import { NavLink, Link } from "react-router-dom";
import demoAvatar from '../../Utility/images/Thayo.png';

const navHeader = [
  { title: "Home", path: "/" },
  { title: "Leaderboard", path: "/ranking" },
  { title: "Challenge", path: "/challenge" },
  { title: "About", path: "/about" },
];

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-100 p-2">
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
          to="/profile"
        >
          <button className="w-9 h-9 flex justify-center align-middle cursor-pointer " title="profile">
            <img src={demoAvatar} alt="U" className=" w-full h-full rounded-full object-cover "/>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
