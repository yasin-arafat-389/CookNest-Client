export const ProfileSkeletonLoader = () => {
  return (
    <div className="py-10">
      <div className="w-[90%] sm:w-[70%] lg:w-[50%] mx-auto pb-6 rounded-xl shadow-md bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col items-center py-6 bg-[#D3B89A] rounded-t-xl shadow-inner">
          <div className="rounded-full bg-gray-300 h-28 w-28" />
          <div className="bg-gray-300 h-8 w-3/5 mt-4 rounded" />
          <div className="bg-gray-300 h-6 w-2/5 mt-2 rounded" />
        </div>

        <div className="flex justify-around gap-4 px-6 py-4 mt-4">
          <div className="flex flex-col items-center w-[45%] p-4 rounded-lg border-2 border-gray-200 shadow-sm bg-white">
            <div className="bg-gray-300 h-6 w-3/4 rounded" />
            <div className="bg-gray-300 h-8 w-2/4 mt-2 rounded" />
          </div>
          <div className="flex flex-col items-center w-[45%] p-4 rounded-lg border-2 border-gray-200 shadow-sm bg-white">
            <div className="bg-gray-300 h-6 w-3/4 rounded" />
            <div className="bg-gray-300 h-8 w-2/4 mt-2 rounded" />
          </div>
        </div>

        <div className="px-5">
          <div className="px-6 py-4 mt-4 bg-white rounded-lg shadow-inner border">
            <div className="bg-gray-300 h-6 w-2/4 rounded" />
            <div className="bg-gray-300 h-20 w-full mt-2 rounded" />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-5 justify-center items-center mt-6 px-6">
          <div className="bg-gray-300 h-10 w-40 rounded" />
          <div className="bg-gray-300 h-10 w-40 rounded" />
        </div>
      </div>

      <div className="w-[90%] sm:w-[80%] mt-7 mx-auto">
        <div className="bg-gray-300 h-8 w-2/5 mx-auto rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow bg-white flex flex-col items-center"
            >
              <div className="bg-gray-300 h-40 w-full rounded" />
              <div className="bg-gray-300 h-6 w-3/4 mt-4 rounded" />
              <div className="bg-gray-300 h-5 w-1/2 mt-2 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
