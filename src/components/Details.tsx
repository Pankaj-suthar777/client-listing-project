const Detail = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex items-center gap-4 mb-1">
        <div className="flex justify-center items-center w-12 h-12">
          <img
            src="https://static.thenounproject.com/png/40841-200.png"
            className="w-8"
          />
        </div>

        <div className="font-medium ">
          <div className="sm:text-sm text-xs">Furnishing</div>
          <div className="sm:text-sm text-xs text-gray-500 dark:text-gray-400">
            {data?.furnishing}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-1">
        <div className="flex justify-center items-center w-12 h-12">
          <i className="ri-map-2-line text-2xl"></i>
        </div>

        <div className="font-medium ">
          <div className="sm:text-sm text-xs">Area</div>
          <div className="sm:text-sm text-xs text-gray-500 dark:text-gray-400">
            {data?.area}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-1">
        <div className="flex justify-center items-center w-12 h-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1190/1190034.png"
            className="w-6 bg-white"
          />
        </div>

        <div className="font-medium ">
          <div className="sm:text-sm text-xs">bathrooms</div>
          <div className="sm:text-sm text-xs text-gray-500 dark:text-gray-400">
            {data?.bathrooms}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-1">
        <div className="flex justify-center items-center w-12 h-12">
          <i className="ri-hotel-bed-line text-2xl"></i>
        </div>

        <div className="font-medium ">
          <div className="sm:text-sm text-xs">bedrooms</div>
          <div className="sm:text-sm text-xs text-gray-500 dark:text-gray-400">
            {data?.bedrooms}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
