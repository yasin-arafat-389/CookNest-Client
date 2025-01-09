/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
"use client";

import React from "react";

const ManageAdminsSkeleton = () => {
  const Skeleton = ({ className }: { className: string }) => (
    <div className={`animate-pulse bg-gray-300 ${className}`} />
  );

  return (
    <div className="container mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Manage <span className="text-secondary">Admins</span>
      </h1>

      {/* Skeleton for CreateAdminForm */}
      <div className="flex items-center justify-center p-6 mb-5">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <Skeleton className="h-8 w-1/3 mx-auto mb-6" />
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <Skeleton className="h-5 w-1/3 mb-2" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>

            {/* Email Field */}
            <div>
              <Skeleton className="h-5 w-1/2 mb-2" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>

            {/* Password Field */}
            <div>
              <Skeleton className="h-5 w-1/3 mb-2" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>

            {/* Profile Picture Field */}
            <div>
              <Skeleton className="h-5 w-2/3 mb-2" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>

            {/* Submit Button */}
            <Skeleton className="h-12 w-full rounded-lg" />
          </form>
        </div>
      </div>

      {/* Skeleton for Admin Table */}
      <div className="hidden md:block">
        <Skeleton className="h-8 w-1/4 mb-4" />
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4">
                <Skeleton className="h-6 w-20" />
              </th>
              <th className="p-4">
                <Skeleton className="h-6 w-20" />
              </th>
              <th className="p-4">
                <Skeleton className="h-6 w-20" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">
                  <Skeleton className="h-16 w-16 rounded" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-6 w-1/3" />
                </td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <Skeleton className="h-10 w-24 rounded-lg" />
                    <Skeleton className="h-10 w-24 rounded-lg" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Skeleton for Mobile View */}
      <div className="block md:hidden">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Skeleton className="h-16 w-16 rounded" />
              <div className="ml-4">
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-10 w-24 rounded-lg" />
              <Skeleton className="h-10 w-24 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAdminsSkeleton;
