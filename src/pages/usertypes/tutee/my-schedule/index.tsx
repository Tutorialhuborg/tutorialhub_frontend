import { Link } from "react-router-dom";
import MainLayout from "../../../../layouts/mainLayout";
import userCountDataset from "../../../../assets/userCountDataset.json";
import upcomingMeetSchedules from "../../../../assets/upcomingMeetSchduleDataset.json";
import UsersCount from "../../../../components/meetSchedule/usersCount";
import meetSchedules from "../../../../assets/meetingScheduleDataset.json";
import FloatButton from "../../../../components/button/floatButton";
import { useCallback, useState } from "react";
import AddNewSchedule from "./addScheduleModal";

const breadCrumb = [
  {
    url: "#",
    label: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3 h-3"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
];

export default function TuteeSchedule() {
  const [openAddSchedule, setOpenAddSchedule] = useState(false);
  const handleAddSchedule = useCallback(() => {
    setOpenAddSchedule(true);
  }, []);

  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="w-full flex flex-col justify-center items-center gap-5 px-5 md:px-10 py-10">
        <div className="w-full max-w-screen-xl rounded-2xl border p-5">
          <h3 className=" text-lg md:text-3xl font-semibold my-3">
            Today's Schedule
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            {meetSchedules?.map((item) => (
              <div
                key={item?.id}
                className="w-full p-5 text-sm border rounded-xl flex flex-col gap-2 text-gray-700"
              >
                <div className="flex items-center gap-1">
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
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="font-semibold text-dark-500">
                    {item?.meet_title}
                  </span>
                </div>
                <div className="flex items-center gap-1">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>{item?.time}</span>
                </div>
                <div className="w-full flex items-stretch gap-5">
                  <div className="w-fit text-nowrap flex items-center gap-1">
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
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span>{item?.location}</span>
                  </div>
                  <UsersCount dataset={userCountDataset} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-screen-xl rounded-2xl border p-5">
          <h3 className=" text-lg md:text-3xl font-semibold my-3">
            Upcoming Schedule
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            {meetSchedules?.map((item) => (
              <div
                key={item?.id}
                className="w-full p-5 text-sm border rounded-xl flex flex-col gap-2 text-gray-700"
              >
                <div className="flex items-center gap-1">
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
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span className="font-semibold text-dark-500">
                    {item?.meet_title}
                  </span>
                </div>
                <div className="flex items-center gap-1">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>{item?.time}</span>
                </div>
                <div className="w-full flex items-stretch gap-5">
                  <div className="w-fit text-nowrap flex items-center gap-1">
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
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span>{item?.location}</span>
                  </div>
                  <UsersCount dataset={userCountDataset} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <FloatButton
          label="Add Schedule"
          type="button"
          isLoading={false}
          clickHandler={() => handleAddSchedule()}
        />
      </main>
      <AddNewSchedule
        openModal={openAddSchedule}
        setOpenModal={setOpenAddSchedule}
      />
    </MainLayout>
  );
}
