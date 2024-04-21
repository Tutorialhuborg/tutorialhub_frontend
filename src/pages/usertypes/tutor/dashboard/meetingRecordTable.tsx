import { Link } from "react-router-dom";
import Pagination from "../../../../components/pagination";

interface tableProps {
  dataset: {
    id: number;
    sn: number;
    tutee_details: {
      name: string;
      email: string;
      profile_image: string;
    };
    meeting_description: string;
    sign_off: {
      profile_image: string;
      position: string;
    };
  }[];
}

export default function MeetingsRecordTable({ dataset }: tableProps) {
  return (
    <div className="text-sm md:text-md w-full overflow-x-auto">
      <table className=" w-full ">
        <thead className="border">
          <tr className=" text-left bg-gray-300/30 text-gray-500">
            <th>No.</th>
            <th>Tutee Details</th>
            <th>Meeting Description</th>
            <th>Sign off</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody className="">
          {dataset.map((meeting, index) => {
            return (
              <tr key={meeting?.id} className=" border-b">
                <td className=" text-gray-500  max-w-xs">{meeting?.sn}</td>
                <td className=" max-w-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 overflow-hidden aspect-square rounded-full">
                      <img
                        src={meeting?.tutee_details?.profile_image}
                        alt={meeting?.tutee_details?.name}
                        className="w-full h-auto "
                      />
                    </div>
                    <div className="flex flex-col">
                      <span>{meeting?.tutee_details?.name}</span>
                      <span className=" text-xs text-gray-500">
                        {meeting?.tutee_details?.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className=" max-w-xs text-gray-500">
                  {meeting?.meeting_description}
                </td>
                <td className=" max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 overflow-hidden aspect-square rounded-full">
                      <img
                        src={meeting?.sign_off?.profile_image}
                        alt={meeting?.sign_off?.position}
                        className="h-4 w-4 "
                      />
                    </div>
                    <span>{meeting?.sign_off?.position}</span>
                  </div>
                </td>
                <td className=" text-sm flex items-center h-full justify-center">
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
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
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
