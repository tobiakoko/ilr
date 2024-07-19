import React from "react";
import ContactForm from "./form";

const Contact = () => {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-18 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Inquires? Fill out the form below and we will get back to you
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <ContactForm />
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">abidingdeborahs@gmail.com</a>
              <p className="leading-normal my-5">
                3710 Franklin Pike
                <br />
                Nashville, TN 37204
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;