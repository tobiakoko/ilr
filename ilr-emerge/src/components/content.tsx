import React from "react";
import Image from "next/image";
import image1 from "./../../public/images/placeholderImg.png"

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            UNVEILED CONFERENCE 2024
          </h1>
          <p className="mt-2 leading-relaxed">
          <i>
            {/*FIX ME*/}
                ...emerge slogan goes here. Could be something like, leading ladies to christ
                or, follow as we follow christ. 
              </i>
            {/*FIX ME*/}  
          </p>
          <p className=" mt-4 lg:w-1/2 w-full leading-relaxed text-gray-900">
            FRI. 9TH, 6PM & SAT. 10TH, 9am, AUGUST 2024 <br />
             NASHVILLE TENNESSEE  
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/5 md:w-1/3 p-4">
            <div className="h-[17.5rem] border border-gray-200 rounded-lg">
                <div className="hover:scale-95">
                  <Image 
                    src={image1}
                    alt='placeholder image of conference speaker'
                    quality={70}
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Dr. Jane Doe
              </h2>
              <p className="leading-relaxed text-base">
                Dr. Jane Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>

          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-[17.5rem] border border-gray-200 rounded-lg">
              <div className="hover:scale-95">
                <Image 
                  src={image1}
                  alt='placeholder image of conference speaker'
                  quality={70}

                />
              </div>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Dr. Janet Doe
              </h2>
              <p className="leading-relaxed text-base">
                Dr. Janet Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-[17.5rem] border border-gray-200 rounded-lg">
                <div className="hover:scale-95">
                  <Image 
                    src={image1}
                    alt='placeholder image of conference speaker'
                    quality={70}

                  />
                </div>
              </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Dr. Neptune Doe
              </h2>
              <p className="leading-relaxed text-base">
                Dr. Neptune Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-[17.5rem] border border-gray-200 rounded-lg">
                <div className="hover:scale-95">
                  <Image 
                    src={image1}
                    alt='placeholder image of conference speaker'
                    quality={70}

                  />
                </div>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Melanchole Doe
              </h2>
              <p className="leading-relaxed text-base">
                Melanchole Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-[17.5rem] border border-gray-200 rounded-lg">
                  <div className="hover:scale-95">
                    <Image 
                      src={image1}
                      alt='placeholder image of conference speaker'
                      quality={70}

                    />
                  </div>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Bunker Doe
              </h2>
              <p className="leading-relaxed text-base">
                Bunker Doe is a fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
          </div>
          
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-[17.5rem] border border-gray-200 rounded-lg">
                <div className="hover:scale-95">
                  <Image 
                    src={image1}
                    alt='placeholder image of conference speaker'
                    quality={70}

                  />
                </div>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Ramona Falls
              </h2>
              <p className="leading-relaxed text-base">
                Ramona Falls is a fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
          </div>

        </div>
      </div>

      <div>
        {/*SECTION FOR VOLUNTEERS || LINKS TO GOOGLE FORMS*/}
      </div>
    </section>
  );
};

export default Content;