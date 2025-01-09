"use client";

import Link from "next/link";

import { useGetNonPremiumRecipe } from "@/src/hooks/recipe.hooks";

const RecentRecipes = () => {
  const { data: recipe, isLoading } = useGetNonPremiumRecipe();

  const avgRating = (ratings: any) => {
    const averageRating =
      ratings?.length > 0
        ? ratings?.reduce(
            (sum: number, item: { rating: number }) => sum + item?.rating,
            0
          ) / ratings?.length
        : 0;

    return averageRating;
  };

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="!text-5xl font-bold text-gray-900 lg:text-4xl">
            Recent <span className="text-secondary">Recipes</span>
          </h2>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Skeleton Image */}
                  <div className="w-full h-56 bg-gray-200 animate-pulse" />

                  {/* Skeleton Content */}
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                  </div>
                </div>
              ))
            : recipe?.data?.map((recipe: any) => (
                <div
                  key={recipe._id}
                  className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Recipe Image */}
                  <img
                    alt={recipe.title}
                    className="w-full h-56 object-cover"
                    src={recipe.image}
                  />

                  {/* Recipe Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {recipe.title}
                    </h3>

                    {/* Average Rating */}
                    <div className="text-secondary text-lg font-bold">
                      Average Rating: {avgRating(recipe.rating)}
                    </div>

                    {/* Show Details Button */}
                    <div className="text-center mt-4">
                      <Link href={`/recipe/${recipe?._id}`}>
                        <button className="bg-button text-white text-lg px-4 py-2 rounded transition-colors">
                          Show Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="text-center mt-14">
          <Link href={"/recipe"}>
            <button className="bg-button text-white text-lg px-4 py-2 rounded transition-colors">
              Browse All Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentRecipes;
