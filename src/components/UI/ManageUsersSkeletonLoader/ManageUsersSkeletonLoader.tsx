const ManageUsersSkeletonLoader = () => {
  const rows = Array.from({ length: 5 }); // Placeholder for 5 rows/cards

  return (
    <div className="container mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        <div className="h-8 w-1/3 mx-auto bg-gray-300 animate-pulse rounded" />
      </h1>

      {/* Desktop Table Skeleton */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="text-left p-4">
                <div className="h-4 w-16 bg-gray-300 animate-pulse rounded" />
              </th>
              <th className="text-left p-4">
                <div className="h-4 w-32 bg-gray-300 animate-pulse rounded" />
              </th>
              <th className="text-left p-4">
                <div className="h-4 w-24 bg-gray-300 animate-pulse rounded" />
              </th>
              <th className="text-left p-4">
                <div className="h-4 w-40 bg-gray-300 animate-pulse rounded" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((_, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">
                  <div className="h-16 w-16 bg-gray-300 animate-pulse rounded-full" />
                </td>
                <td className="p-4">
                  <div className="h-6 w-48 bg-gray-300 animate-pulse rounded" />
                </td>
                <td className="p-4">
                  <div className="h-6 w-24 bg-gray-300 animate-pulse rounded" />
                </td>
                <td className="p-4 flex space-x-4">
                  <div className="h-10 w-24 bg-gray-300 animate-pulse rounded" />
                  <div className="h-10 w-24 bg-red-300 animate-pulse rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Skeleton */}
      <div className="block md:hidden">
        {rows.map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 bg-gray-300 animate-pulse rounded-full" />
              <div className="ml-4 w-full">
                <div className="h-6 w-48 mb-2 bg-gray-300 animate-pulse rounded" />
                <div className="h-4 w-24 bg-gray-300 animate-pulse rounded" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="h-10 w-24 bg-gray-300 animate-pulse rounded" />
              <div className="h-10 w-24 bg-red-300 animate-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsersSkeletonLoader;
