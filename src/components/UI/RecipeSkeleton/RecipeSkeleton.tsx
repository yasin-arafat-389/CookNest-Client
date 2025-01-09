import React from "react";

const RecipeSkeleton = () => {
  return (
    <div className="bg-[#F5EDED]">
      <div className="w-[90%] mx-auto py-10 md:w-[80%]">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl animate-pulse">
          {/* Skeleton for Image */}
          <div className="relative">
            <div className="w-full h-[300px] md:h-[500px] bg-gray-300" />
          </div>

          {/* Skeleton for Content */}
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="h-8 w-1/2 bg-gray-300 rounded-md" />
              <div className="h-6 w-1/4 bg-gray-300 rounded-md" />
            </div>

            <div className="border-2 border-gray-300 mt-3 p-3 rounded-lg inline-flex justify-center items-center gap-5">
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 bg-gray-300 rounded-md" />
                <div className="h-4 w-48 bg-gray-300 rounded-md" />
              </div>
            </div>

            {/* Skeleton for Description */}
            <div className="mt-4 space-y-3">
              <div className="h-4 w-full bg-gray-300 rounded-md" />
              <div className="h-4 w-3/4 bg-gray-300 rounded-md" />
              <div className="h-4 w-5/6 bg-gray-300 rounded-md" />
            </div>
          </div>

          {/* Skeleton for Buttons */}
          <div className="pb-5 flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="h-10 w-32 bg-gray-300 rounded-md" />
            <div className="h-10 w-32 bg-gray-300 rounded-md" />
          </div>

          {/* Skeleton for Comments */}
          <div className="mt-10 pb-5">
            <div className="h-6 w-48 bg-gray-300 mx-auto mb-7 rounded-md" />
            <div className="flex flex-col gap-5">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border-2 border-gray-300 flex gap-3 w-full md:w-[70%] mx-auto"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                    <div className="flex flex-col gap-2 flex-grow">
                      <div className="h-4 w-1/4 bg-gray-300 rounded-md" />
                      <div className="h-4 w-2/3 bg-gray-300 rounded-md" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSkeleton;
