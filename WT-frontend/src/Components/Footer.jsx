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
const socialLinks = [
  { icon: ["fab", "facebook"], label: "Facebook" },
  { icon: ["fab", "instagram"], label: "Instagram" },
  { icon: ["fab", "linkedin"], label: "LinkedIn" },
  { icon: ["fab", "x-twitter"], label: "Twitter" },
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
            <nav className="flex gap-8">
              {navPages.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="hover:underline font-medium"
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex justify-center py-2">
            <ul className="flex flex-row">
              {terms.map((item, index) => (
                <li key={item} className="flex items-center">
                  {item}
                  {index !== terms.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
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
         <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-semibold">Follow Us</h2>
          <ul className="flex gap-4 text-xl">
            {socialLinks.map(({ icon, label }) => (
              <li key={label}>
                <FontAwesomeIcon
                  icon={icon}
                  aria-label={label}
                  className="cursor-pointer hover:text-blue-600"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
