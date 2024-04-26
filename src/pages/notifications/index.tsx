import MainLayout from "../../layouts/mainLayout";

const breadCrumb = [
  {
    url: "#",
    label: "Notifications",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>
    ),
  },
];

function Notifications() {
  return (
    <MainLayout breadCrumb={breadCrumb} pageTitle="Notifications">
      <main className="w-full flex flex-col gap-10 items-center justify-center">
        <section className=" max-w-screen-2xl w-full px-5 md:px-10">
          <h2 className=" text-2xl font-semibold mt-10 text-gray-700">
            View all Notifications
          </h2>
          <div className=" w-full my-10">
            {[
              {
                id: 1,
                read: false,
                status: "approved",
                notification_type: "Mail",
                notification_type_title: "A new request",
                title: "Schedule",
                date: "2min ago",
                message: "New request cam in for you.",
              },
              {
                id: 2,
                read: true,
                status: "approved",
                notification_type: "Mail",
                notification_type_title: "A new time",
                title: "Schedule",
                date: "10min ago",
                message: "Time Change came in",
              },
              {
                id: 3,
                read: false,
                status: "approved",
                notification_type: "Mail",
                notification_type_title: "A new update",
                title: "Schedule",
                date: "18 min ago",
                message: "Scheduled update.",
              },
            ].map((notification) => (
              <div
                key={notification?.id}
                className=" flex items-start gap-2 md:gap-5 py-4 border-b"
              >
                {!notification?.read && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-10 w-10 text-red-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                )}

                <div>
                  {notification?.status === "Approved" ? (
                    <div className=" h-8 w-8 md:h-12 md:w-12 aspect-square text-primary_green-500 bg-primary_green-500/20 rounded-full flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" h-6 w-6 md:w-10 md:h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  ) : notification?.status === "Declined" ? (
                    <div className="  h-8 w-8 md:h-12 md:w-12 aspect-square text-red-500 bg-red-500/20 rounded-full flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 md:w-10 md:h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  ) : notification?.status === "Mail" ? (
                    <div className="  h-8 w-8 md:h-12 md:w-12 aspect-square text-primary_green-500 bg-primary_green-500/20 rounded-full flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 md:w-10 md:h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="  h-8 w-8 md:h-12 md:w-12 aspect-square text-primary_green-500 bg-primary_green-500/20 rounded-full flex justify-center items-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 md:w-10 md:h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className=" flex flex-col gap-2 max-w-screen-md">
                  <h4 className=" font-semibold">
                    {notification?.notification_type_title}
                    {":"}{" "}
                    <span className="  font-normal text-gray-700">
                      {notification?.title}
                    </span>
                  </h4>
                  <p className=" text-gray-500 line-clamp-2">
                    {notification?.message}
                  </p>
                  <span className=" text-gray-500 font-semibold text-sm">
                    {notification?.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Notifications;
