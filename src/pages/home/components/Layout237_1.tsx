"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaCogs, FaProjectDiagram, FaSearchPlus } from "react-icons/fa";

export function Layout237_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-4xl text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Simple Steps to Success
            </h2>
            <p className="md:text-md">
              We follow a streamlined process to ensure your project is a
              success. Each step is designed to maximize efficiency and results.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaSearchPlus className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Step 1: Discovery
              </h3>
              <p>We dive deep to understand your goals and needs.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaProjectDiagram className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Step 2: Strategy
              </h3>
              <p>We craft a tailored strategy to achieve your objectives.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <FaCogs className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Step 3: Build
              </h3>
              <p>Our team brings the strategy to life with precision.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary" className="py-2 px-3">
              Get Started
            </Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
