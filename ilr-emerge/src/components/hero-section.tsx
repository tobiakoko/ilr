"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "./../../public/images/placeholderImg.png";
import Card from "./card";


const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            ABIDING DEBORAHs MINISTRIES
          </h1>
          <p className="mb-8 leading-relaxed">
          <i>
              And we all, with unveiled face beholding the glory of the Lord,
              are being transformed into the same image from one degree of glory to glory, 
              even as by the Spirit of the Lord.
              </i>
              - 2 Corinthians 3:18 [KJV]
          </p>

          <div>
            <h2 className="sm:text-3xl text-2xl font-medium text-gray-900">Welcome Address From The Host</h2>
            <div className="flex gap-5 mt-8">
              <div className="align-left">
                <Image 
                  src={image1}
                  alt='placeholder image of conference speaker'
                  quality={70}
                />
              </div>
              <div className="align-left">
                <p className="leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                  pug. Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. 
                  </p>
                  <p>
                  Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;