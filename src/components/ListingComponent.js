import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ListingComponent = () => {
  const [listing, setListing] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/listings/${id}`)
      .then((res) => {
        console.log(res.data);
        setListing(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (value) => {
    console.log(value);
    axios.delete(`http://localhost:8000/listings/${id}`).then(() => {
      alert("The listing was sucessfully deleted!");
      history.push("/listings");
    });
  };

  function handleUpdate() {
    history.push(`/updateListing/${id}`);
  }

  return (
    <div className="border-2 border-gray-200 border-opacity-60 overflow-hidden bg-white shadow-md rounded px-4 mb-4 text-center">
      <h1 className="text-center sm:text-4xl text-2xl mt-6 mb-8 text-green-900 font-semibold ">
        {listing.title}
      </h1>
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={listing.image}
        alt="image"
      />
      <p>{listing.description}</p>
      <h2>{listing.edibel}</h2>
      <div className="mb-6 mt-6">
        <button
          className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded m-6 self-auto "
          value={listing.id}
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded m-6 self-auto "
          value={listing.id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default ListingComponent;
