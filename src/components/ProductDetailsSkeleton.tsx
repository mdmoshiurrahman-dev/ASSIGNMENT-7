const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto animate-pulse">
      {/* Product Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 bg-white p-3 mt-5 mx-3 sm:mx-5 rounded-xl border border-gray-300">
        <div className="flex gap-3">
          {/* Icon */}
          <div className="flex justify-center items-center shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-xl" />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-around items-start gap-2">
            <div className="h-6 sm:h-7 w-36 sm:w-48 bg-gray-200 rounded" />
            <div className="h-4 w-32 sm:w-40 bg-gray-200 rounded" />
            <div className="h-4 w-48 sm:w-72 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Today's Price */}
        <div className="bg-gray-200 rounded-xl flex flex-row lg:flex-col justify-around items-center py-3 px-4 lg:px-6 gap-3 lg:gap-0">
          <div className="h-4 w-20 bg-gray-300 rounded" />
          <div className="h-7 w-20 bg-gray-300 rounded" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-5 w-14 bg-gray-300 rounded-xl" />
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-white p-4 sm:p-5 mx-3 sm:mx-5 rounded-2xl mt-5 border border-gray-300">
        <div className="h-6 w-40 bg-gray-200 rounded mb-4" />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-3"
            >
              <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
              <div className="h-8 w-28 bg-gray-200 rounded mb-2" />
              <div className="h-4 w-36 bg-gray-200 rounded" />
            </div>
          ))}
        </div>

        {/* Market Section */}
        <div>
          <div className="h-6 w-56 bg-gray-200 rounded mb-3 mt-6" />

          <div className="border border-gray-300 rounded-xl overflow-x-auto">
            <table className="table min-w-175">
              <thead>
                <tr>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <th key={index}>
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 6 }).map((_, index) => (
                  <tr key={index}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <td key={i}>
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;