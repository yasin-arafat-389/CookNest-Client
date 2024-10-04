"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div>
        <section className="pt-8 lg:pt-32 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="border border-secondary p-1 w-72 mx-auto rounded-full flex items-center justify-between mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span className="font-bold text-center text-gray-900 ml-3">
                Explore amazing and tasty recipes.
              </span>
            </motion.div>

            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            >
              Discover and Share Your Favorite Recipes
              <span className="text-secondary"> Anytime, Anywhere</span>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto text-center font-bold leading-7 text-gray-600 mb-9"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            >
              Unlock access to the {`world's`} best recipes. Whether {`it's`}{" "}
              appetizers, main courses, or desserts, create and share your
              favorite dishes with just a few clicks.
            </motion.p>

            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link
                className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-lg font-semibold text-center text-white rounded-full bg-button shadow-xs hover:bg-button-dark transition-all duration-500"
                href={"/recipe"}
              >
                Explore Recipies
                <svg
                  className="ml-2"
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
