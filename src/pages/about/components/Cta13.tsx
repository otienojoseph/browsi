"use client";

import { Button } from "@relume_io/relume-ui";

export function Cta13() {
  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-red-300"
    >
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-7xl">
            Ready to Elevate Your Brand?
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Partner with us to transform your online presence and achieve
            remarkable results. Our dedicated team is eager to collaborate and
            bring your vision to life.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Contact" className="py-2 px-3">
              Contact
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
    </section>
  );
}
