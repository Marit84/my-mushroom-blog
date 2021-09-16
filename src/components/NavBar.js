import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="text-center fixed top-0 w-full bg-green-500 text-lg text-white">
      <ul>
        <li className="inline-block pt-4 pb-4">
          <Link to="/" className="pl-6 pr-8">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/newlisting" className="pl-6 pr-8">
            {" "}
            New Listing{" "}
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/listings" className="pl-6 pr-8">
            {" "}
            Listings{" "}
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/map" className="pl-6 pr-8">
            {" "}
            Map{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
