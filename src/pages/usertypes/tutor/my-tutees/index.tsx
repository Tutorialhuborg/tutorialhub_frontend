import MainLayout from "../../../../layouts/mainLayout";

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
export default function MyTutee() {
  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="w-full flex flex-col justify-center items-center gap-5 px-5 md:px-10 py-10">
        <div className="w-full max-w-screen-xl rounded-2xl border p-5">
          <h3 className=" text-lg md:text-2xl mb-5 w-full border-b py-5">
            My Tutee and Performance
          </h3>
          <div className="w-full gap-5 flex flex-col  ">
            {[
              {
                id: "1",
                profile_image: "/logo.png",
                percentage: 80,
                name: "Eniola Gbowogbowo",
              },
              {
                id: "2",
                profile_image: "/logo.png",
                percentage: 66,
                name: "Amy Walsh",
              },
              {
                id: "3",
                profile_image: "/logo.png",
                percentage: 45,
                name: "Kelani Johnson",
              },
            ].map((tutee) => (
              <div
                key={tutee?.id}
                className="flex items-center gap-4 justify-between flex-col md:flex-row border-b pb-3"
              >
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={tutee?.profile_image}
                    alt={tutee?.id}
                    className="w-8 h-8 overflow-hidden aspect-square"
                  />
                  <h6 className=" text-gray-500 text-lg">{tutee?.name}</h6>
                </div>
                <div className="w-full flex gap-3 items-center">
                  <span className="text-gray-500">{tutee?.percentage}%</span>
                  <div
                    className={`w-full rounded-full bg-gray-200 border border-gray-300`}
                  >
                    <div
                      style={{ width: `${tutee?.percentage}%` }}
                      className={`h-3 ${
                        tutee?.percentage > 75
                          ? "bg-green-500 "
                          : tutee?.percentage > 50
                          ? "bg-orange-600"
                          : " bg-red-600"
                      } rounded-full`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
