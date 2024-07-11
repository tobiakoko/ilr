"use client";
import React from "react";
import Link from "next/link";

  //function that receive the specific element_id as string and scroll into that element_id
  const scrollToSection = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth"});
    //block: "end", inline: "nearest" 
  }

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            ABIDING DEBORAHs MINISTRIES
          </h1>
          <p className="mb-8 leading-relaxed">
          <i>
                But we all, with open face beholding as in a glass the glory of the Lord,
                are changed into the same image from glory to glory, even as by the Spirit of the Lord.
              </i>
              - 2 Corinthians 3:18 [KJV]
          </p>
          <div className="flex justify-center">
            
            <Link href={{pathname:`/register`}}><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Register
            </button></Link>
            <Link href="#contact"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={()=>scrollToSection("contact")}>
              Contact us
            </button></Link>
          </div>
          <div>
            <p className="mt-4 leading-relaxed">
            <i>
              {/*FIX ME*/}
                  ...photo goes here. Could be stock image or a section introducing Tessy. 
                </i>
              {/*FIX ME*/}  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;