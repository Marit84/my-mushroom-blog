import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string().max(250).required(),
  edibel: Yup.boolean().required(),
});

const handleSubmit = (listing) => {
  const formData = new FormData();

  formData.append("title", listing.title);
  formData.append("image", listing.image);
  formData.append("description", listing.description);
  formData.append("edibel", listing.edibel);

  console.log(formData);
  axios.post("http://localhost:8000/add_listing", formData).then(() => {
    alert("The listing was sucessfully added!");
  });
};

const NewListingsForm = () => (
  <Formik
    initialValues={{
      title: "",
      image: "",
      description: "",
      edibel: false,
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      handleSubmit(values);
    }}
    enctype="multipart/form-data"
  >
    {({ errors, touched, values }) => (
      <Form className="bg-white shadow-md rounded px-8 pt-6 pb-6 text-green-700 font-medium">
        <div className="">
          <label htmlFor="title">Name</label>
          <Field
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="title"
            value={values.title}
            placeholder="Name..."
          />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}

          <div className="">
            <label htmlFor="image">Upload Image</label>
            <Field
              className="mt-8 mb-8 ml-2 text-red-700"
              name="image"
              value={values.image}
              type="file"
            />

            {errors.image && touched.image ? <div>{errors.image}</div> : null}
          </div>

          <label htmlFor="description">Description</label>
          <Field
            className="shadow appearance-none border rounded w-full h-24 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            name="description"
            value={values.description}
            placeholder="Description..."
          />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}

          {values.edibel ? (
            <label htmlFor="edibel">Edibel</label>
          ) : (
            <label htmlFor="edibel">Edibel?</label>
          )}

          <Field
            className="border rounded gray-700 focus:outline-none focus:shadow-outline m-6"
            type="checkbox"
            name="edibel"
            label="Edibel"
            checked={values.edibel}
            value={values.edibel}
          />
          {errors.edibel && touched.edibel ? <div>{errors.edibel}</div> : null}
          <div className="flex">
            <button
              className="mx-auto shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded m-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

export default NewListingsForm;
