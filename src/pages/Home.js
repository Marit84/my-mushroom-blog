import React from "react";
import { useHistory } from "react-router-dom";

import sopp from "./images/Furumatriske-samlet-Hermod-Karlsen.jpg";

const Home = () => {
  const history = useHistory();
  function handleClick() {
    history.push(`/newlisting`);
  }

  return (
    <div className="container pb-8 ">
      <h1 className="text-center sm:text-4xl pt-6 text-green-900 font-semibold ">
        Welcome to my Mushroom-blog!
      </h1>
      <img src={sopp} alt="sopp" className="mb-10 mt-10" />
      <h2 className="text-center sm:text-1xl  mt-10 mb-8 text-grey-900 font-semibold leading-relaxed">
        The world of mushrooms has interrested me for quite a while, and I have
        found myself missing a system and place for registrating mye findings as
        I widen my horizon in the mushroom-world.
        <br /> So this is my way to keep track over what species I have found.
      </h2>
      <p className="text-center mx-auto leading-relaxed text-base mb-4">
        This mushroom-register blog is a personal listing over my findings of
        different mushrooms.
        <br /> Nothing on this blog should be used for identification.
      </p>
      <div className="flex">
        <button
          onClick={handleClick}
          className="mx-auto shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded mt-4"
        >
          Register new listing
        </button>
      </div>
    </div>
  );
};

export default Home;
