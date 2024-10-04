"use client";
import { motion } from "framer-motion";

const MainContentsOfContactUs = () => {
  return (
    <div className="bg-[#F5EDED]">
      <form>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            {/* Left Map Section */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                className="absolute inset-0"
                height="100%"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Dhaka+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(0.3) contrast(1.2) opacity(0.4)" }}
                title="map"
                width="100%"
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    60 feet road, barek molla more, Mirpur 2, Dhaka
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <div className="text-red-500 leading-relaxed">
                    hi@cooknest.com
                  </div>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </motion.div>

            {/* Right Form Section */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-7 mt-8 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font">
                Contact us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                If you have any doubts, please contact us by submitting the
                following form.
              </p>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="subject"
                  name="subject"
                  type="text"
                />
              </div>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="message"
                  name="message"
                />
              </div>
              <button
                className="text-white bg-button border-0 py-2 px-6 focus:outline-none hover:bg-button-dark rounded text-lg"
                type="button"
              >
                Submit
              </button>
            </motion.div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default MainContentsOfContactUs;
