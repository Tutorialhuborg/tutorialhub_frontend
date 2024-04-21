import ClickButton from "../button/clickButton";
import { DoughnutChart } from "../charts/doughnut";

interface Props {
  title: string;
  percentages: {
    id: string;
    value: number;
    label: string;
    text_color: string;
  }[];
  book_description: string;
  button_label: string;
  clickHandler?: () => void;
}

export default function DoughnutActivities({
  clickHandler,
  title,
  percentages,
  book_description,
  button_label,
}: Props) {
  return (
    <div className="w-full p-3">
      <div className="flex justify-between items-center w-full">
        <h5 className=" text-md md:text-2xl">{title}</h5>
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
      <div className="w-full border-t mt-3">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center md:items-center my-3">
          <div className="w-full flex justify-center my-3">
            <DoughnutChart />
          </div>
          <div className=" flex gap-3 flex-wrap items-center justify-center">
            {percentages.map((item) => (
              <div
                key={item?.id}
                className="flex flex-col bg-primary-500/10 p-2 px-3 rounded-md"
              >
                <span className="text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`${item?.text_color} h-8 w-8`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>{" "}
                  {item?.label}
                </span>
                <h6 className=" font-semibold text-xl text-end">
                  {item?.value}%
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className=" p-3 py-5 flex items-center flex-col md:flex-row justify-between gap-5 bg-primary-500/10 rounded-lg w-full">
          <h6 className="text-md md:text-2xl">{book_description}</h6>
          <div className="w-full max-w-36">
            <ClickButton
              label={button_label}
              type="button"
              clickHandler={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
