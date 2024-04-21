import tuteeRecordingDatase from "../../../../assets/tuteesRecording.json";
import MainLayout from "../../../../layouts/mainLayout";
import Search from "../../../../components/filterAndSearch/search";
import Sort from "../../../../components/filterAndSearch/sort";
import TuteesTutorRecording from "../tutor-tutee-record-table";

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

export default function TuteesRecording() {
  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="w-full flex flex-col items-center ">
        <div className="w-full max-w-screen-2xl flex flex-col gap-5 my-10 px-5 md:px-10 border rounded-2xl py-5">
          <div className="flex justify-between flex-col md:flex-row w-full gap-2 items-start md:items-center">
            <div className="w-full">
              <div className=" w-full md:w-fit flex items-center justify-between md:justify-start gap-3">
                <h4 className=" text-2xl">Tutees Record</h4>{" "}
                <span className=" text-xs text-primary-500 bg-primary-500/20 rounded-3xl p-1 px-2">
                  2420 tutees
                </span>
              </div>
              <p className=" text-gray-500">Manage tutee recording here</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-fit">
              <Search label="Search" placeholder="Search" id="search" />
              <Sort />
            </div>
          </div>
          <TuteesTutorRecording dataset={tuteeRecordingDatase} />
        </div>
      </main>
    </MainLayout>
  );
}
