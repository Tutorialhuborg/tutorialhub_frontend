import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import MainLayout from "../../../../layouts/mainLayout";

import meetSchedules from "../../../../assets/meetingScheduleDataset.json";
import tuteeUpcomingMeetSchedules from "../../../../assets/tuteeUpcomingMeetSchedule.json";
import MeetSchedules from "../../../../components/meetSchedule";
import BarActivities from "../../../../components/activitiesCharter/barActivities";
import DoughnutActivities from "../../../../components/activitiesCharter/doughnutActivies";
import AddNewSchedule from "../my-schedule/addScheduleModal";
import Search from "../../../../components/filterAndSearch/search";
import { PieChart } from "../../../../components/charts/pieChart";

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
function TuteeDashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [openAddSchedule, setOpenAddSchedule] = useState(false);

  const onDateChange = useCallback((dates: any) => {
    setStartDate(dates);
  }, []);

  const handleAddSchedule = useCallback(() => {
    setOpenAddSchedule(true);
  }, []);

  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="w-full flex flex-col md:flex-row gap-5 px-5 md:px-10 py-10">
        <section className="w-full flex-[.8] flex flex-col gap-5">
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 items-stretch flex-wrap">
            {[
              {
                id: 1,
                label: "Hours Spent",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-secondary-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
                value: 320,
              },
              {
                id: 2,
                label: "Meetings",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[#12B76A]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                ),
                value: 5,
              },
              {
                id: 3,
                label: "Performance",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[#F79009]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                ),
                value: 8,
              },
            ].map((item) => {
              return (
                <div
                  key={item?.id}
                  className="w-full justify-between bg-white flex items-center rounded-md text-dark-500 p-5 shadow-md border"
                >
                  <div className="flex flex-col gap-2">
                    <span className=" text-gray-500">{item?.label}</span>{" "}
                    {item?.id === 3 ? (
                      <div className="flex items-start gap-1">
                        <h4 className=" text-5xl font-semibold mb-3">
                          {item?.value}
                          <span className=" text-gray-300">/</span>{" "}
                        </h4>
                        <span className=" text-gray-300 text-xl font-semibold">
                          10
                        </span>
                      </div>
                    ) : (
                      <h4 className=" text-5xl font-semibold mb-3">
                        {item?.value}
                      </h4>
                    )}
                  </div>
                  <span className=" p-3 bg-gray-200/20 text-secondary-500 rounded-full aspect-square border border-secondary-500/20">
                    {item?.icon}
                  </span>
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full border rounded-lg">
              <BarActivities increment={3.4} title="Hours Activity" />
            </div>
            <div className="w-full border flex-col md:flex-row rounded-lg ">
              <div className="w-full border-t mt-3">
                <DoughnutActivities
                  title="Course Statistics"
                  book_description="Need to book a meeting with your personal tutor?"
                  button_label="Book here"
                  percentages={[
                    {
                      id: "1",
                      value: 65,
                      label: "Done",
                      text_color: "text-[#12B76A]",
                    },
                    {
                      id: "2",
                      value: 25,
                      label: "In progress",
                      text_color: " text-[#6172F3]",
                    },
                    {
                      id: "3",
                      value: 10,
                      label: "To do",
                      text_color: "text-[#F79009]",
                    },
                  ]}
                  clickHandler={() => handleAddSchedule()}
                />
              </div>
            </div>
            <div className="w-full border rounded-lg">
              <div className="w-full p-3">
                <div className="flex justify-between items-center w-full">
                  <h5 className="text-lg md:text-2xl">Assessment Progress</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </div>

                <div className="w-full border-t mt-3 py-4 flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        id: 1,
                        pecentage: 80,
                        title: "Machine Learning",
                        tasks: 10,
                        backgroundColor: [
                          "rgba(97, 114, 243, 1)",
                          "rgba(224, 234, 255, 1)",
                        ],
                      },
                      {
                        id: 2,
                        pecentage: 50,
                        title: "Machine Learning",
                        tasks: 14,
                        backgroundColor: [
                          "rgba(164, 188, 253, 1)",
                          "rgba(224, 234, 255, 1)",
                        ],
                      },
                    ].map((item) => (
                      <div
                        key={item?.id}
                        className="grid grid-cols-1 lg:grid-cols-2 border-b gap-3 pb-4"
                      >
                        <div className="h-60 md:h-36 flex justify-center md:justify-start">
                          <PieChart
                            data={{
                              labels: ["High", "Low"],
                              datasets: [
                                {
                                  label: "Tutees Performace",
                                  data: [
                                    item?.pecentage,
                                    100 - item?.pecentage,
                                  ],
                                  backgroundColor: item?.backgroundColor,
                                  borderColor: [
                                    "rgba(224, 234, 255, 1)",
                                    "rgba(97, 114, 243, 1)",
                                  ],
                                  borderWidth: 1,
                                },
                              ],
                            }}
                          />
                        </div>
                        <div className="w-full flex items-center gap-3 justify-between">
                          <div className="flex flex-col gap-3">
                            <h6 className="text-lg md:text-2xl">
                              {item?.title}
                            </h6>
                            <span className=" text-gray-500">
                              {item?.tasks} Tasks
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6  text-gray-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 p-3 bg-primary-500/10 rounded-2xl">
                    <h3 className="w-full text-lg md:text-2xl text-gray-800">
                      Want to learn something?
                    </h3>
                    <div className="w-full md:max-w-56">
                      <Search placeholder="Find course" id="find-course" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border rounded-lg p-3"></div>
          </div>
        </section>
        <section className="w-full flex-[.2] flex flex-col gap-5">
          <div className=" border rounded-lg p-3">
            <div className="w-full flex justify-center">
              <DayPicker
                mode="single"
                selected={startDate}
                onSelect={onDateChange}
                // footer={footer}
              />
            </div>
            <div className="py-3 border-y mb-3">
              <h5 className=" font-semibold text-lg">Today's tasks</h5>
            </div>
            <MeetSchedules dataset={meetSchedules} />
          </div>
          <div className=" border rounded-lg p-3">
            <div className="py-3 border-y mb-3 flex w-full justify-between">
              <h5 className=" font-semibold text-lg">Upcoming tasks</h5>
              <Link to={"#"} className=" text-primary-500 text-md">
                View All
              </Link>
            </div>
            <MeetSchedules dataset={tuteeUpcomingMeetSchedules} />
          </div>
        </section>
      </main>
      <AddNewSchedule
        openModal={openAddSchedule}
        setOpenModal={setOpenAddSchedule}
      />
    </MainLayout>
  );
}

export default TuteeDashboard;
