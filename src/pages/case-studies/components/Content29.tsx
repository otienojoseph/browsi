"use client";

import { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Content29() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="md:prose-md prose lg:prose-lg mb-12 md:mb-20">
            <Fragment>
              <h3 className="font-bold text-lg">Introduction</h3>
              <p>
                In the fast-paced world of digital marketing, standing out is
                essential. Our client, a local retail chain, faced declining
                foot traffic and sales. They needed a solution that would not
                only attract customers but also enhance their online
                presence.{" "}
              </p>
              <p>
                The challenge was clear: how to bridge the gap between their
                physical stores and the growing online market. With a limited
                budget and tight deadlines, we knew we had to devise a strategic
                plan that would yield quick results.
              </p>
              <figure className="py-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                />
                <figcaption>Image caption goes here</figcaption>
              </figure>
              <h6 className="italic font-medium py-4">
                To tackle this issue, we implemented a multi-faceted approach
                that included a revamped website, targeted social media
                campaigns, and local SEO optimization. By focusing on user
                experience and mobile responsiveness, we ensured that potential
                customers could easily navigate their offerings.
              </h6>
              <blockquote>
                "Our sales increased by 50% within three months! The new website
                transformed our business."
              </blockquote>
              <p>
                The results were remarkable. Not only did website traffic
                double, but the conversion rate improved significantly.
                Customers were now engaging with the brand online before
                visiting the stores, leading to increased foot traffic.
              </p>
              <h4 className="font-bold text-lg">Conclusion</h4>
              <p>
                This case study demonstrates the power of a cohesive digital
                strategy. By integrating online and offline marketing efforts,
                we helped our client achieve their goals and set a foundation
                for future growth.
              </p>
              <p>
                In today’s market, having a strong digital presence is no longer
                optional; it’s essential. Our team is ready to help you navigate
                these challenges and achieve similar success.
              </p>
            </Fragment>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="sm:max-w-1/2">
              <p className="font-semibold md:text-md">Share this story</p>
              <div className="mt-3 flex items-start gap-2 md:mt-4">
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLinkAlt className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoFacebookCircle className="size-6" />
                </a>
              </div>
            </div>
            <div className="sm:max-w-1/2">
              <ul className="flex flex-wrap gap-2 sm:justify-end">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-red-100 px-2 py-1 text-sm font-semibold"
                  >
                    Retail Success
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-red-100 px-2 py-1 text-sm font-semibold"
                  >
                    Digital Strategy
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-red-100 px-2 py-1 text-sm font-semibold"
                  >
                    SEO Optimization
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-red-100 px-2 py-1 text-sm font-semibold"
                  >
                    Website Redesign
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-8 h-px bg-border-primary md:my-12" />
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
              alt="Logo"
              className="size-14 rounded-full rounded-image object-cover"
            />
            <div className="grow">
              <p className="font-semibold md:text-md">Jane Doe</p>
              <p>Marketing Manager, Retail Co.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
