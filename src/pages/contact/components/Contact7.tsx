"use client";

import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";

export function Contact7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Get in Touch</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Contact Us
            </h2>
            <p className="md:text-md">We'd love to hear from you!</p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input type="text" id="name" className="border border-gray-300" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="border border-gray-300"
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto border border-gray-300 p-3"
              />
            </div>

            <div>
              <Button
                title="Submit"
                className="py-2 px-3 border-2 border-gray-700 text-black hover:border-red-500 hover:text-red-500 transition-colors duration-300"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="size-full rounded-image object-cover"
          />
        </div>
      </div>
    </section>
  );
}
