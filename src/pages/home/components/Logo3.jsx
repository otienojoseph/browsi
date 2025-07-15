"use client";

import React from "react";

export function Logo3() {
  return (
    <section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base leading-[1.2] font-bold md:text-md md:leading-[1.2]">
          Trusted by industry leaders worldwide
        </h1>
      </div>
      <div className="flex items-center justify-center pt-7 md:pt-0">
        <div className="flex shrink-0 animate-pulse items-center space-x-20 sm:space-x-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 sm:space-x-12">
              <img
                className="h-8 w-auto grayscale opacity-60 hover:opacity-100 transition-opacity sm:h-10 md:h-12"
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt={`Partner logo ${i + 1}`}
              />
              <img
                className="h-8 w-auto grayscale opacity-60 hover:opacity-100 transition-opacity sm:h-10 md:h-12"
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                alt={`Partner logo ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
