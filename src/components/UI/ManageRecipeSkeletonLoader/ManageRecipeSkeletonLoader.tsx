const ManageRecipeSkeletonLoader = () => {
  const Skeleton = ({ className }: { className: string }) => (
    <div className={`bg-gray-300 animate-pulse ${className}`} />
  );

  const rows = Array.from({ length: 5 }); // Placeholder for 5 rows/cards

  return (
    <div className="container mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        <Skeleton className="h-8 w-1/3 mx-auto" />
      </h1>

      {/* Desktop Table Skeleton */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="text-left p-4">
                <Skeleton className="h-4 w-16" />
              </th>
              <th className="text-left p-4">
                <Skeleton className="h-4 w-32" />
              </th>
              <th className="text-left p-4">
                <Skeleton className="h-4 w-24" />
              </th>
              <th className="text-left p-4">
                <Skeleton className="h-4 w-40" />
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
                  <Skeleton className="h-16 w-16 rounded" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-6 w-48" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-6 w-24" />
                </td>
                <td className="p-4 flex space-x-4">
                  <Skeleton className="h-10 w-24 rounded" />
                  <Skeleton className="h-10 w-24 rounded bg-red-300" />
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
              <Skeleton className="h-16 w-16 rounded" />
              <div className="ml-4 w-full">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-10 w-24 rounded" />
              <Skeleton className="h-10 w-24 rounded bg-red-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRecipeSkeletonLoader;
