"use client";

import { Button } from "@relume_io/relume-ui";

export function Header36() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 bg-red-400 text-white"
    >
      <div className="mx-[5%] sm:max-w-3xl md:justify-self-start lg:mr-20 lg:ml-[5vw]">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
          Transform Your Online Presence with Browsi
        </h1>
        <p className="md:text-md">
          At Browsi, we specialize in creating high-converting websites that
          elevate your brand. Our expert team combines innovative design with
          strategic marketing to drive results.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button
            title="Consult"
            className="py-2 px-3 bg-white text-black border-0"
          >
            Consult
          </Button>
          <Button title="Portfolio" variant="secondary" className="py-2 px-3">
            Portfolio
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}
