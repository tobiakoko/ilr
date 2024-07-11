"use client";
import React, { useState } from "react";

import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false);
      toast.success("Registration completed successfully!");
      setShowConfetti(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", phoneNumber: "", address: ""}}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    First Name
                  </label>
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    Last Name
                  </label>
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    example@example.com
                  </label>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    Street Address
                  </label>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    Street Address Line 2
                  </label>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    City
                  </label>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    State / Province
                  </label>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <label className="leading-7 text-sm text-gray-400">
                    Postal / Zip Code
                  </label>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={isLoading}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </>
  );
};

export default RegistrationForm;