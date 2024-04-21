import { Link } from "react-router-dom";
import Pagination from "../../../components/pagination";
import { useCallback, useState } from "react";
import DeleteTuteeRecordingModal from "./deleteModal";

interface tableProps {
  dataset: {
    id: number;
    sn: number;
    email: string;
    tutor_meetings: number;
    profile: {
      profile_image: string;
      name: string;
    };
  }[];
}

export default function TuteesTutorRecording({ dataset }: tableProps) {
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [userData, setUserData] = useState(dataset);

  // handle remove user from list
  const handleDelete = useCallback(() => {
    setUserData((prev) => {
      const newFilter = [...prev];
      newFilter.splice(selectedIndex, 1);
      return newFilter;
    });
    setOpenDelete(false);
  }, [selectedIndex]);

  // open delete modal and update delete index
  const onDeleteClick = useCallback((index: number) => {
    setOpenDelete(true);
    setSelectedIndex(index);
  }, []);

  return (
    <div className="text-sm md:text-md w-full overflow-x-auto">
      <table className=" w-full ">
        <thead className="border">
          <tr className=" text-left bg-gray-300/30 text-gray-500">
            <th>ID</th>
            <th>Name</th>
            <th>Email address</th>
            <th>Tutor Meetins</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {userData.map((meeting, index) => {
            return (
              <tr key={meeting?.id} className=" border-b">
                <td className=" text-gray-500  max-w-xs">{meeting?.id}</td>
                <td className=" max-w-xs">
                  <div className="flex items-center gap-2">
                    <img
                      src={meeting?.profile?.profile_image}
                      alt={meeting?.profile?.name}
                      className="w-6 h-6 overflow-hidden aspect-square"
                    />
                    <div className="flex flex-col">
                      <span>{meeting?.profile?.name}</span>
                    </div>
                  </div>
                </td>
                <td className=" max-w-xs text-gray-500">{meeting?.email}</td>
                <td className=" max-w-xs">
                  <span>{meeting?.tutor_meetings}</span>
                </td>

                <td className=" text-sm flex items-center gap-3">
                  <Link to={`#`} title="edit" className="group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:scale-125 cursor-pointer transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    title="delete"
                    onClick={() => onDeleteClick(index)}
                    className="group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:scale-125 cursor-pointer transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination />
      <DeleteTuteeRecordingModal
        handleDelete={handleDelete}
        openModal={openDelete}
        setOpenModal={setOpenDelete}
      />
    </div>
  );
}
