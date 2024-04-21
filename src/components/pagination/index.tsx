export default function Pagination() {
  return (
    <div className=" text-sm md:text-md flex justify-center md:justify-between flex-col md:flex-row items-start gap-3 md:gap-6 w-full  px-4 mt-10 md:mt-16">
      <button
        type="button"
        className="w-full md:w-fit items-center justify-center border rounded-md p-3 px-5 hover:border-primary_green-500 transition-all flex gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span>Previous</span>
      </button>
      <div className="flex gap-2 flex-wrap w-full justify-between md:justify-center">
        {Array.from({ length: 8 }, (_, index) => (
          <span
            key={index}
            className=" border rounded-md p-3 hover:border-primary_green-500 transition-all cursor-pointer"
          >
            {index + 1}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="w-full md:w-fit items-center justify-center border rounded-md p-3 px-5 hover:border-primary_green-500 transition-all flex gap-3"
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
