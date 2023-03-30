"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";
export const FormikValidationForm = (): JSX.Element => {
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div hidden={!submitted} className="alert alert-primary" role="alert">
        {message}
      </div>

      <form className="w-50" onSubmit={formik.handleSubmit}>
        {/* Adding the inputs */}
        <div hidden={!submitted} className="alert alert-primary" role="alert">
          {message}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="John Doe"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {Boolean(formik.errors.name) && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="john@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {Boolean(formik.errors.email) && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            placeholder="Your message ..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {Boolean(formik.errors.message) && (
            <div className="text-danger">{formik.errors.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};
