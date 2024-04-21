import { Link } from "react-router-dom";

import MainLayout from "../../../../layouts/mainLayout";
import supportRequestData from "../../../../assets/supportRequestsDataset.json";
import Search from "../../../../components/filterAndSearch/search";

import upcomingMeetSchedules from "../../../../assets/maintenanceScheduleDataset.json";
import SupportRequests from "./supportRequest";
import MaintenanceSchedule from "./maintenanceSchedule";
import Select from "../../../../components/select";
import { useState } from "react";
import BarChart from "../../../../components/charts/barChart";
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
function AdminDashboard() {
  const [meetStatisticPeriod, setMeetStatisticsPeriod] = useState("12");

  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="w-full flex flex-col gap-5 px-5 md:px-10 py-10">
        <section className="w-full flex-[.8] flex flex-col gap-5">
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10 items-stretch flex-wrap">
            {[
              {
                id: 1,
                label: "Total Tutees",
                value: 2420,
                isRise: true,
                percentage_change: 5,
                url: "#",
                url_label: "Manage",
              },
              {
                id: 2,
                label: "Total Tutors",
                value: 2420,
                isRise: false,
                percentage_change: 2,
                url: "#",
                url_label: "Manage",
              },
              {
                id: 1,
                label: "Total Meetings",
                value: 2420,
                isRise: true,
                percentage_change: 5,
                url: "/admin/meeting-records",
                url_label: "View records",
              },
            ].map((item) => {
              return (
                <div
                  key={item?.id}
                  className="w-full rounded-lg p-5 shadow-2xl flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center w-full">
                    <h5 className=" text-md md:text-xl font-semibold">
                      {item?.label}
                    </h5>
                    <Link
                      to={item?.url}
                      className=" text-sm md:text-md text-primary-500 font-semibold bg-primary-500/10 rounded-xl p-2"
                    >
                      {item?.url_label}
                    </Link>
                  </div>
                  <div className=" grid grid-cols-2">
                    <div className=" flex flex-col gap-3 justify-center">
                      <h5 className=" text-4xl font-semibold">{item?.value}</h5>
                      <div className="flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-3">
                        <div
                          className={`w-fit flex items-center p-1 px-3 ${
                            item?.isRise
                              ? "text-green-600 bg-green-600/10"
                              : "text-red-600 bg-red-600/10"
                          }  rounded-lg`}
                        >
                          {item?.isRise ? (
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
                                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                              />
                            </svg>
                          ) : (
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
                                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                              />
                            </svg>
                          )}
                          <span className=" text-xs">
                            {item?.percentage_change}%
                          </span>
                        </div>
                        <p className=" text-gray-500 text-sm md:text-md">
                          vs last session
                        </p>
                      </div>
                    </div>
                    <div>
                      {item?.isRise ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={0.5}
                          stroke="currentColor"
                          className="w-full h-auto text-green-500 opacity-40"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={0.5}
                          stroke="currentColor"
                          className="w-full h-auto text-red-500 opacity-40"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="w-full border rounded-lg p-3 flex-1 md:flex-[0.8]">
              <div className="flex justify-between items-center w-full">
                <h5 className=" text-xl md:text-2xl">System Usage</h5>
                <div className=" max-w-40">
                  <Select
                    id="meet-statistics-period"
                    value={meetStatisticPeriod}
                    setValue={setMeetStatisticsPeriod}
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index} value={`${index}`}>
                        {index + 1} months
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className=" w-full flex justify-center">
                <BarChart
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    datasets: [
                      {
                        label: "Tutees",
                        data: [
                          600, 43, 13, 545, 92, 44, 343, 21, 434, 42, 543, 212,
                        ],
                        backgroundColor: "rgba(97, 114, 243, 1)",
                      },
                      {
                        label: "Tutor",
                        data: [
                          88, 56, 234, 545, 92, 218, 42, 21, 332, 42, 776, 21,
                        ],
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="w-full border rounded-lg p-3 flex-1 md:flex-[0.2]">
              <div className="w-full p-3">
                <div className="flex justify-between items-center w-full">
                  <h5 className=" text-xl md:text-2xl">Users Satisfaction</h5>
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
                <div className="w-full border-t mt-3 flex justify-center">
                  <PieChart
                    data={{
                      labels: ["High", "Low"],
                      datasets: [
                        {
                          label: "Tutees Performace",
                          data: [80, 20],
                          backgroundColor: [
                            "rgba(97, 114, 243, 1)",
                            "rgba(224, 234, 255, 1)",
                          ],
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
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row gap-5">
          <div className="flex-1 md:flex-[0.8]">
            <div className="w-full border rounded-2xl p-3">
              <div className="flex items-center w-full justify-between px-3 my-4">
                <h5 className=" text-xl md:text-2xl">Support Requests</h5>
                <div className="">
                  <Search placeholder="Search" id="search" label="" />
                </div>
              </div>
              <SupportRequests dataset={supportRequestData} />
            </div>
          </div>
          <div className=" border rounded-lg p-3 flex-1 md:flex-[0.2]">
            <div className="py-3 border-b mb-3 flex w-full justify-between">
              <h5 className=" font-semibold text-lg">Upcoming</h5>
              <Link to={"#"} className=" text-primary-500 text-md">
                View All
              </Link>
            </div>
            <MaintenanceSchedule dataset={upcomingMeetSchedules} />
            <div className=" mt-3">
              <button
                type="button"
                className="flex items-center p-3 px-5 rounded-2xl button-gradient  text-white hover:border hover:border-green-600 transition-all"
              >
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span>Add Schedule</span>{" "}
              </button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default AdminDashboard;
