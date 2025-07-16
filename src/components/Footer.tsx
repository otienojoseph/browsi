"use client";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import logo from "../assets/browsi_logo.png";
import svg_logo from "../assets/logo_text_white.svg";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="relume"
      className="px-4 py-8 sm:px-6 md:px-8 lg:px-[5%] md:py-12 lg:py-16 xl:py-20 bg-red-700 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 pb-8 sm:gap-y-10 md:gap-x-8 md:gap-y-12 md:pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-x-12 lg:gap-y-4 lg:pb-16 xl:gap-x-16">
          {/* Left Section - Logo and Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <a href="/" className="inline-block">
                <img
                  src={logo}
                  alt="Logo image"
                  className="h-24 w-auto sm:h-16 md:h-32"
                />
              </a>
            </div>

            <div className="space-y-4 md:space-y-6 text-white">
              <div>
                <p className="mb-2 text-sm font-semibold sm:text-base">
                  Address:
                </p>
                <p className="text-sm sm:text-base">Nairobi, Kenya</p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold sm:text-base">
                  Contact:
                </p>
                <div className="space-y-1 flex flex-col md:flex-row md:space-x-2">
                  <a
                    href="tel:1800 123 4567"
                    className="block text-sm underline decoration-teal-50 underline-offset-2 sm:text-base"
                  >
                    +254 716 937 322
                  </a>
                  <a
                    href="mailto:info@relume.io"
                    className="block text-sm underline decoration-teal-50 underline-offset-2 sm:text-base"
                  >
                    info@browsi.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-5">
              <a
                href="#"
                className="text-gray-200 hover:text-gray-100 transition-colors"
              >
                <BiLogoFacebookCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-100 transition-colors"
              >
                <BiLogoInstagram className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-100 transition-colors"
              >
                <BiLogoLinkedinSquare className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-6">
            <div>
              <ul className="space-y-3 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm text-white font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm text-white font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm text-white font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm text-white font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm text-white font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    Blog Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3 sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    Client Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative inline-block py-1 text-sm font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full sm:text-base"
                  >
                    Get Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Name/Logo */}
        <div className="pb-6 md:pb-8 lg:pb-10">
          <a href="/" className="inline-block">
            <img
              src={svg_logo}
              alt="Company image"
              className="h-20 w-auto sm:h-12 md:h-28"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-300" />

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="flex flex-col items-start justify-between gap-6 pt-6 pb-4 sm:gap-8 md:flex-row md:items-center md:gap-0 md:pt-8 md:pb-0">
          <p className="order-2 text-xs sm:text-sm md:order-1">
            {`© ${year} Browsi. All rights reserved.`}
          </p>

          <ul className="order-1 flex flex-col gap-4 text-xs sm:flex-row sm:gap-6 sm:text-sm md:order-2">
            <li>
              <a href="#" className="underline text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="underline text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
