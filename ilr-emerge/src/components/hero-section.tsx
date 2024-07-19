"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "./../../public/images/placeholderImg.png";


const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-7 md:px-5 py-12 items-center justify-center flex-col">
        <div className="text-center lg:w-3/4 w-full">
          <h1 className="title-font md:text-5xl text-3xl mb-4 font-bold text-gray-900">
            ABIDING DEBORAHs MINISTRIES
          </h1>
          <div className="flex flex-col md:flex-row -mx-8">
            <div className="flex flex-col md:w-1/2 px-6 mb-5 md:mb-0">
              <div>
                <p className="text-sm mb-2 leading-relaxed bg-violet-600 text-slate-200 italic border py-4 px-2">
                    And we all, with unveiled face beholding the glory of the Lord,
                    are being transformed into the same image from one degree of glory to glory, 
                    even as by the Spirit of the Lord.
                    <br/>
                    <span className="not-italic">- 2 Corinthians 3:18 [KJV]</span>
                </p>
              </div>
              <div>
                <p className="text-left p-2 text-base">
                Join us as we experience God&apos;s divine transformation together. We believe that by gathering in fellowship, studying God&apos;s Word, 
                and supporting one another, we can more fully behold the glory of the Lord and reflect His 
                image in our lives.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 px-6 content-center">
              <Image 
                    src={image1}
                    alt='placeholder image of conference speaker'
                    className="w-full h-full"
                  />
            </div>
          </div>
          <div className="mt-32 md:mt-52">
            <div className="flex flex-col-reverse md:flex-row -mx-5 my-12 md:my-20">
              <div className="md:w-1/2 px-5">
                <Image 
                  src={image1}
                  alt='placeholder image of conference speaker'
                  className="w-full"
                />
              </div>
              <div className="md:w-1/2 px-5">
                <div className="mb-12 md:mb-0">
                  <h2 className="sm:text-2xl text-3xl font-semibold text-gray-900 mb-3">Welcome Address From The Host</h2>
                  <p className="text-sm leading-snug tracking-tight text-left">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                    pug. Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                    banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. 
                    </p>
                    <p className="text-sm leading-snug tracking-tight text-left mt-3">
                    Gastropub indxgo juice poutine, ramps microdosing
                    banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                    banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                    banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;