import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const navPages = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  { title: "service", path: "/service" },
  { title: "contact", path: "/contact" },
];
const terms = [
  "Privacy & Security Fraud",
  "Policies",
  "Terms of Use",
  "Recalls",
  "Your Privacy Choices",
];
const Footer = () => {
  return (
    <div className="bg-[rgb(206,203,203)]">
      <div className="flex  justify-around ">
        <div>
          <h1 className="pt-2 pb-2 font-extrabold text-2xl">Smart Buy</h1>

          <div className="flex flex-col gap-1">
            <div>
              <p>Address</p>
              <p> XXX, XXX</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={["fas", "phone"]}
                className="text-blue-400"
              />
              xxx xxx xxxx
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-8 py-3">
            {navPages.map((item) => (
              <NavLink to={item.path}>{item.title}</NavLink>
            ))}
          </div>
          <div className="flex justify-center py-2">
            <ul className="flex flex-row">
              {terms.map((item) => (
                <li>
                  {item}{" "}
                  {0 < item.length - 1 ? <span className="m-2">|</span> : ""}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center py-4">
            <p className="font-light tracking-widest">
              © 2025 Smart Buy Inc. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col p-1">
          <h1>Follow Us</h1>
          <ul className="flex gap-3 text-xl">
            <li>
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "x-twitter"]} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
