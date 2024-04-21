import { Link } from "react-router-dom";
import Pagination from "../../../../components/pagination";
import Status from "../../../../components/status";

interface tableProps {
  dataset: {
    id: string;
    sn: number;
    date: string;
    profile_image: string;
    description: string;
    status: string;
  }[];
}

export default function SupportRequests({ dataset }: tableProps) {
  return (
    <div className="text-sm md:text-md w-full overflow-x-auto">
      <table className=" w-full ">
        <thead className="border">
          <tr className=" text-left bg-gray-300/30 text-gray-500">
            <th>ID</th>
            <th>Date</th>
            <th>User</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {dataset.map((request, index) => {
            return (
              <tr key={request?.id} className=" border-b">
                <td className=" text-gray-500  max-w-xs">{request?.id}</td>
                <td className=" text-gray-500  max-w-xs">{request?.date}</td>
                <td className=" max-w-xs">
                  <div className="flex items-center gap-2">
                    <img
                      src={request?.profile_image}
                      alt={"user"}
                      className="w-6 h-6 overflow-hidden aspect-square"
                    />
                  </div>
                </td>
                <td className=" max-w-xs text-gray-500">
                  {request?.description}
                </td>
                <td className=" max-w-xs">
                  <div className="flex items-center gap-3">
                    <Status status={request?.status} />
                  </div>
                </td>
                <td className=" text-sm flex items-center gap-3">
                  <Link
                    to="#"
                    title="feedback"
                    className=" p-2 bg-primary-500/20 text-primary-500 aspect-square rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}
