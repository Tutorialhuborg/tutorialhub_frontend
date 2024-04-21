import { useState } from "react";
import BarChart from "../charts/barChart";
import Select from "../select";

interface Props {
  title: string;
  increment: number;
}

export default function BarActivities({ title, increment }: Props) {
  const [meetStatisticPeriod, setMeetStatisticsPeriod] = useState("weekly");
  return (
    <div className="w-full flex flex-col gap-2 p-3">
      <div className="flex justify-between flex-col md:flex-row items-start md:items-center w-full">
        <h5 className=" text-lg md:text-2xl">{title}</h5>
        <div className=" max-w-40">
          <Select
            id="meet-statistics-period"
            value={meetStatisticPeriod}
            setValue={setMeetStatisticsPeriod}
          >
            {[
              {
                id: "1",
                label: "Weekly",
                value: "week",
              },
              {
                id: "2",
                label: "Monthly",
                value: "month",
              },
              {
                id: "3",
                label: "Yealy",
                value: "year",
              },
            ].map((item) => (
              <option key={item?.id} value={item?.value}>
                {item?.label}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-4">
        <div className="w-fit flex items-center p-1 text-green-600 bg-green-600/20 rounded-lg">
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
          <span className=" text-xs">{increment}%</span>
        </div>
        <p className=" text-gray-500">
          Increase than last {meetStatisticPeriod}
        </p>
      </div>
      <div className="border-t mt-3 h-full">
        <BarChart
          data={{
            labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
            datasets: [
              {
                label: "Tutees Meetings",
                data: [600, 900, 13, 545, 92, 44],
                backgroundColor: "rgba(97, 114, 243, 1)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
