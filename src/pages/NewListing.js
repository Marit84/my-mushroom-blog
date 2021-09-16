import React from "react";

import NewListingsForm from "../components/NewListingForm";

const NewListing = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center sm:text-4xl text-2xl mt-6 mb-8 text-green-900 font-semibold ">
        Register new listing
      </h1>

      <p className="text-center mx-auto leading-relaxed text-base mb-4">
        Register new finding and add it to the listing over all mushrooms you've
        found so far. <br /> Be sure to be 100% positive that the mushroom you
        add is in fact the one you list it as.
        <br /> Remember to never eat or mark a mushroom as edibel unless you
        have it verified by an expert.
      </p>

      <NewListingsForm />
    </div>
  );
};

export default NewListing;
