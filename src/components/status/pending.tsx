export default function Pending() {
  return (
    <div className=" flex gap-2 items-center text-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="w-4 h-4"
        viewBox="0 0 16 16"
      >
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      </svg>
      <span>Pending</span>
    </div>
  );
}
