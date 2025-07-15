"use client";

import { Button } from "@relume_io/relume-ui";

export function Header47() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-red-400 text-white"
    >
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-4xl">
            <p className="mb-3 font-semibold md:mb-4">Innovative</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Our Story
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              At Browsi, we believe in transforming ideas into impactful digital
              experiences. Our mission is to empower businesses through
              innovative web solutions and strategic marketing.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Join" className="py-2 px-3">
                Join
              </Button>
              <Button
                title="Learn More"
                variant="secondary"
                className="py-2 px-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
