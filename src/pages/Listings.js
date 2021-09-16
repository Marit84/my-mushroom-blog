import React from "react";

import { ShowListings } from "../components/ShowListings";

const Listings = () => {
  return (
    <>
      <h1 className="text-center sm:text-4xl text-2xl mt-6 mb-8 text-green-900 font-semibold ">
        Listings
      </h1>

      <ShowListings />
    </>
  );
};

export default Listings;
