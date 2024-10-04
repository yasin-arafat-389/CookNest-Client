import Image from "next/image";

import googlePlaySVG from "../../../public/google-play-badge-logo.svg";
import appleStoreSVG from "../../../public/download-on-the-app-store-apple-logo.svg";
import facebookSVG from "../../../public/facebook-3-logo.svg";
import twitterSVG from "../../../public/twitter-3-logo.svg";
import instagramSVG from "../../../public/instagram-2-1-logo.svg";
import githubSVG from "../../../public/github.svg";
import linkedinSVG from "../../../public/linkedin.svg";
import dribbleSVG from "../../../public/dribbble.svg";
import iconSVG from "../../../public/path.svg";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="bg-[#D6EFD8] font-sans">
          <div className="container px-6 pt-12 pb-5 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">
                  Subscribe our newsletter to get an update.
                </h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                    id="email"
                    placeholder="Email Address"
                    type="text"
                  />

                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-button rounded-lg hover:bg-button-dark focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                    Home
                  </p>
                  <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                    Who We Are
                  </p>
                  <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                    Our Philosophy
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 ">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                    Food and Entertainment
                  </p>
                  <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                    Food Brandings
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                    Recipies Specialists
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-200 md:my-8  h-2" />

            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <Image alt="" height="110" src={googlePlaySVG} width="130" />
                <Image alt="" height="110" src={appleStoreSVG} width="130" />
              </div>

              <div className="flex gap-4 hover:cursor-pointer">
                <Image alt="fb" height="30" src={facebookSVG} width="30" />
                <Image alt="tw" height="30" src={twitterSVG} width="30" />
                <Image alt="inst" height="30" src={instagramSVG} width="30" />
                <Image
                  alt="gt"
                  className=""
                  height="30"
                  src={githubSVG}
                  width="30"
                />
                <Image alt="pn" height="30" src={iconSVG} width="30" />
                <Image alt="in" height="30" src={linkedinSVG} width="30" />
                <Image
                  alt="db"
                  className=""
                  height="30"
                  src={dribbleSVG}
                  width="30"
                />
              </div>
            </div>
            <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
              © 2024 SportEase Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
