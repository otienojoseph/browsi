"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/browsi_logo.png";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    closeMobileMenu,
  };
};

export function Navbar() {
  const useActive = useRelume();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => `
    block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 
    transition-colors duration-200 hover:text-primary
    ${isActive(path) ? "text-primary font-semibold" : "text-text-primary"}
  `;

  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-border-primary bg-red-200 lg:min-h-18 lg:px-[5%] sticky top-0"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/" onClick={useActive.closeMobileMenu}>
            <img src={logo} alt="Logo image" className="h-20 w-auto my-2" />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            to="/"
            className={navLinkClass("/")}
            onClick={useActive.closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={navLinkClass("/about")}
            onClick={useActive.closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={navLinkClass("/services")}
            onClick={useActive.closeMobileMenu}
          >
            Our Services
          </Link>
          <Link
            to="/case-studies"
            className={navLinkClass("/services")}
            onClick={useActive.closeMobileMenu}
          >
            Case Studies
          </Link>
          <Link
            to="/contact"
            className={navLinkClass("/services")}
            onClick={useActive.closeMobileMenu}
          >
            Contact Us
          </Link>

          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
            <Link to="/contact" onClick={useActive.closeMobileMenu}>
              <Button
                title="Get Quote"
                variant="secondary"
                size="sm"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-3 lg:w-auto"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
