"use client";

import { Button } from "@relume_io/relume-ui";

export function Cta1() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-red-700 text-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
              Unlock Your Business Potential Today
            </h2>
            <p className="md:text-md">
              Ready to elevate your online presence? Schedule a free
              consultation to explore our services.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Consult" className="py-2 px-3">
                Consult
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
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
