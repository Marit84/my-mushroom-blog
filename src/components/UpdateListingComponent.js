import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";

const UpdateListingComponent = () => {
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

  //NOT WORKING
  const handleUpdate = (value) => {
    console.log(value);
    axios.put(`http://localhost:8000/listings/${id}`).then(() => {
      alert("The listing was sucessfully updated!");
      history.push("/listings");
    });
  };

  return (
    <Formik
      initialValues={{
        title: listing.title,
        image: listing.image,
        description: listing.description,
        edibel: listing.edibel,
      }}
      onSubmit={(values) => {
        handleUpdate(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="text-green-700 font-medium">
          <div className="">
            <label htmlFor="title">Name</label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              value={values.name}
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}

            <div className="">
              {/*  //TODO: styling */}
              <label htmlFor="image">Upload Image</label>
              <Field
                className="mt-8 mb-8 ml-2 text-red-700"
                enctype="multipart/form-data"
                name="image"
                value={values.image}
                type="file"
              />

              {errors.image && touched.image ? <div>{errors.image}</div> : null}
            </div>

            <label htmlFor="description">Description</label>
            <Field
              className="shadow appearance-none border rounded w-full py-20 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              value={values.description}
            />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <label htmlFor="edibel">Edibel</label>
            <Field
              className="border rounded gray-700 focus:outline-none focus:shadow-outline m-6"
              type="checkbox"
              name="edibel"
              label="Edibel"
              checked={values.edibel}
              value={values.edibel}
            />
            {errors.edibel && touched.edibel ? (
              <div>{errors.edibel}</div>
            ) : null}
            <div className="flex">
              <button
                className="mx-auto shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded mt-4"
                type="submit"
                value={values}
                onSubmit={handleUpdate}
              >
                Update
              </button>
            </div>
            <button onClick={() => history.push("/listings")}>X</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateListingComponent;
