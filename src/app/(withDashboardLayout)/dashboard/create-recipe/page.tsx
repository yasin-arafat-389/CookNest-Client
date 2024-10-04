// /* eslint-disable jsx-a11y/tabindex-no-positive */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/select";
import dynamic from "next/dynamic";
import { toast } from "sonner";

import { useCreateRecipe } from "@/src/hooks/recipe.hooks";
import { useUserInfo } from "@/src/hooks/user.hooks";
import { useUser } from "@/src/context/user.provider";
import Loader from "@/src/components/Loader/Loader";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// Define the validation schema using Yup
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  image: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  content: yup.string().required("Content is required"),
});

const CreateRecipe = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const { data, isLoading } = useUserInfo(user?._id as string);

  const {
    mutate: createRecipe,
    isPending,
    data: isUserBlocked,
  } = useCreateRecipe();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const config = {
    readonly: false,
    height: 600,
    style: {
      color: "black",
    },
    toolbarSticky: false,
    placeholder: "Start typing your recipe here...",
  };

  useEffect(() => {
    if (isUserBlocked && !isUserBlocked.success) {
      toast.error(isUserBlocked.message);
    } else if (isUserBlocked && isUserBlocked.success) {
      router.push("/dashboard");
      toast.success("Recipe posted successfully!");
    }
  }, [isUserBlocked]);

  // Handle form submission
  const onSubmit = async (data: any) => {
    let formData = {
      ...data,
      content,
    };

    if (isPremium) {
      formData = { ...formData, isPremium: true };
    }

    createRecipe(formData);
  };

  // Set the content value in the form when JoditEditor content changes
  const handleEditorBlur = (newContent: string) => {
    setContent(newContent);
    setValue("content", newContent);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-[80%] mx-auto my-10">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
        Create your <span className="text-secondary">recipe</span> post
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 w-[80%] md:w-[40%] mx-auto my-5">
          {/* Title Input */}
          <div className="flex flex-col">
            <Input label="Recipe Title" type="text" {...register("title")} />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Image Input */}
          <div className="flex flex-col">
            <Input
              label="Recipe Thumbnail Image URL"
              type="text"
              {...register("image")}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="flex flex-col">
          <JoditEditor
            ref={editor}
            config={config}
            value={content}
            onBlur={handleEditorBlur}
            onChange={() => {}}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">Content is required.</p>
          )}
        </div>

        <div className="text-center mt-5">
          {data?.userData?.premiumMembership ? (
            <div>
              <Select
                className="max-w-xs font-bold mb-5"
                label="Do you want to post this as premium content?"
                onChange={(e) => setIsPremium(e.target.value === "yes")}
              >
                <SelectItem key={"yes"} value="Yes">
                  Yes
                </SelectItem>
                <SelectItem key={"no"} value="No">
                  No
                </SelectItem>
              </Select>
            </div>
          ) : (
            <div className="mb-5 text-2xl text-gray-900 ">
              Get a <span className="text-secondary">premium membership</span>{" "}
              to post this as premium content.
            </div>
          )}

          <Button
            className="bg-button font-bold text-lg"
            isDisabled={isPending}
            isLoading={isPending}
            type="submit"
          >
            Post Recipe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
