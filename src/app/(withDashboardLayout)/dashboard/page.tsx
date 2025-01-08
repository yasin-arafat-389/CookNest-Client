/* eslint-disable prettier/prettier */
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/select";

import { useUser } from "@/src/context/user.provider";
import {
  useBecomePremiumMember,
  useUpdateUserInfo,
  useUserInfo,
} from "@/src/hooks/user.hooks";
import Loader from "@/src/components/Loader/Loader";
import RecipeCard from "@/src/components/UI/RecipeCard/RecipeCard";

const Dashboard = () => {
  const { user } = useUser();

  const { data, isLoading: isSingleUserDataLoading } = useUserInfo(
    user?._id as string
  );

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { mutate: updateUser, isPending: userUpdatePending } =
    useUpdateUserInfo();

  const { mutate: becomePremiumMember, isPending } = useBecomePremiumMember();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: data?.name,
      profilePicture: data?.profilePicture,
      bio: data?.bio,
    },
  });

  const onSubmit = async (formData: any) => {
    updateUser({ id: user?._id as string, payload: formData });
    onOpenChange();
  };

  const [sortedRecipes, setSortedRecipes] = useState<any[]>(
    data?.userPostedRecipeData || []
  );

  const [sortCriterion, setSortCriterion] = useState<string>("upvote");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredRecipes = sortedRecipes.filter(
    (recipe: any) =>
      recipe?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      recipe?.content?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  useEffect(() => {
    if (data?.userPostedRecipeData) {
      const sorted = [...data?.userPostedRecipeData]?.sort((a: any, b: any) => {
        if (sortCriterion === "upvote") {
          return (b?.upvote?.length || 0) - (a?.upvote?.length || 0);
        } else if (sortCriterion === "rating") {
          const avgRatingA =
            a?.rating?.reduce((acc: number, cur: any) => acc + cur?.rating, 0) /
            (a?.rating?.length || 1);
          const avgRatingB =
            b?.rating?.reduce((acc: number, cur: any) => acc + cur?.rating, 0) /
            (b?.rating?.length || 1);

          return avgRatingB - avgRatingA;
        }

        return 0;
      });

      setSortedRecipes(sorted);
    }
  }, [sortCriterion, data]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const indexOfLastRecipe = currentPage * cardsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - cardsPerPage;
  const currentRecipes = filteredRecipes?.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleBecomePremiumMember = async () => {
    const transactionId = `TXN-${Date.now()}`;
    const payload = {
      transactionId,
      custormerName: user?.name,
      customerEmail: user?.email,
      id: user?._id,
    };

    becomePremiumMember(payload);
  };

  const handleModalChange = () => {
    // Allow closure only if `userUpdatePending` is false
    if (!userUpdatePending) {
      onOpenChange();
    }
  };

  if (isSingleUserDataLoading) {
    return <Loader />;
  }

  return (
    <div className="py-10">
      <div className="w-[90%] sm:w-[70%] lg:w-[50%] mx-auto pb-6 rounded-xl shadow-md bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col items-center py-6 bg-[#D3B89A] rounded-t-xl shadow-inner">
          <img
            alt="Profile Pic"
            className="rounded-full object-cover h-28 w-28 border-4 border-white shadow-lg"
            src={data?.userData?.profilePicture}
          />
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            {data?.userData?.name}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-700">
            {data?.userData?.email}
          </p>
        </div>

        {user?.role === "user" && (
          <div className="flex justify-around gap-4 px-6 py-4 mt-4">
            <div className="flex flex-col items-center w-[45%] p-4 rounded-lg border-2 border-gray-200 shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-800">Followers</h2>
              <p className="text-lg font-bold text-gray-600">
                {data?.userData?.followers?.length}
              </p>
            </div>
            <div className="flex flex-col items-center w-[45%] p-4 rounded-lg border-2 border-gray-200 shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-800">Following</h2>
              <p className="text-lg font-bold text-gray-600">
                {data?.userData?.following?.length}
              </p>
            </div>
          </div>
        )}

        <div className="px-5">
          <div className="px-6 py-4 mt-4 bg-white rounded-lg shadow-inner border">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Your Bio
            </h2>
            <p className="text-gray-600 mt-2">{data?.userData?.bio}</p>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-5 justify-center items-center mt-6 px-6">
          <Button
            className="bg-button text-white font-semibold py-2 px-4 rounded-lg shadow"
            onPress={onOpen}
          >
            Update Profile Info
          </Button>
          {data?.userData?.premiumMembership === false &&
            user?.role === "user" && (
              <Button
                className="bg-button text-white font-semibold py-2 px-4 rounded-lg shadow"
                isDisabled={isPending}
                isLoading={isPending}
                onClick={handleBecomePremiumMember}
              >
                Buy Premium Membership
              </Button>
            )}
        </div>

        <Modal
          isOpen={isOpen || userUpdatePending}
          onOpenChange={handleModalChange}
        >
          <ModalContent>
            <div className="p-4 text-xl font-bold text-gray-800">
              Update Profile Info
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-4 pb-4 flex flex-col gap-4">
                <Input
                  defaultValue={data?.userData?.name}
                  label="Name"
                  type="text"
                  {...register("name")}
                />
                <Input
                  defaultValue={data?.userData?.profilePicture}
                  label="Profile Picture URL"
                  type="text"
                  {...register("profilePicture")}
                />
                <Input
                  defaultValue={data?.userData?.bio}
                  label="Bio"
                  type="text"
                  {...register("bio")}
                />
              </div>
              <div className="flex justify-center pb-4">
                <Button
                  className="bg-button text-white py-2 px-4 rounded-lg shadow"
                  isDisabled={userUpdatePending}
                  isLoading={userUpdatePending}
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </ModalContent>
        </Modal>
      </div>

      {user?.role === "user" && (
        <div className="">
          {data?.userPostedRecipeData?.length !== 0 && (
            <div className="text-gray-800 text-center text-3xl sm:text-4xl font-bold mt-10">
              <h1>
                Your <span className="text-secondary">Recipes</span>
              </h1>

              <div className="w-[90%] sm:w-[80%] mt-7 mx-auto mb-7 grid grid-cols-1 md:grid-cols-2 gap-10">
                <Select
                  label="Sort By"
                  onChange={(event) => setSortCriterion(event.target.value)}
                >
                  <SelectItem key={"upvote"}>Upvote</SelectItem>
                  <SelectItem key={"rating"}>Rating</SelectItem>
                </Select>

                <Input
                  label="Search Recipe"
                  type="text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="w-[90%] sm:w-[80%] mx-auto mt-10">
            {currentRecipes?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {currentRecipes?.map((recipe: any, index: number) => (
                  <RecipeCard
                    key={index}
                    button={"delete"}
                    isPremiumUser={data?.userData?.premiumMembership}
                    recipe={recipe}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-3xl text-red-500">
                You have no recipes posted yet.
              </div>
            )}

            {currentRecipes?.length > 0 && (
              <div className="flex justify-center mt-10">
                <button
                  className={`mx-2 px-3 py-1 font-bold text-lg rounded ${
                    currentPage === 1 ? "bg-gray-400" : "bg-button text-white"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                >
                  Previous
                </button>

                {Array.from(
                  {
                    length: Math.ceil(filteredRecipes?.length / cardsPerPage),
                  },
                  (_, index) => (
                    <button
                      key={index + 1}
                      className={`mx-2 px-3 py-1 font-bold text-lg rounded ${
                        currentPage === index + 1
                          ? "bg-button text-white"
                          : "bg-gray-400"
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}

                <button
                  className={`mx-2 px-3 py-1 font-bold text-lg rounded ${
                    currentPage ===
                    Math.ceil(filteredRecipes?.length / cardsPerPage)
                      ? "bg-gray-400"
                      : "bg-button text-white"
                  }`}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredRecipes?.length / cardsPerPage)
                  }
                  onClick={() =>
                    currentPage <
                      Math.ceil(filteredRecipes?.length / cardsPerPage) &&
                    paginate(currentPage + 1)
                  }
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
