import { Link } from "react-router-dom";

function ChatMenu() {
  return (
    <div className=" max-w-screen-sm w-full rounded-xl bg-white shadow-lg">
      <div className="flex  justify-between items-center p-3">
        <h6 className=" font-semibold">Chats</h6>
        <Link
          to="/chat"
          className=" text-primary_green-500 flex items-center gap-3 group"
        >
          <span>View All </span>
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
      <div>
        {[
          {
            id: 1,
            read: false,
            status: "approved",
            notification_type: "Mail",
            notification_type_title: "New Chat",
            title: "Felix message",
            date: "2min ago",
          },
          {
            id: 2,
            read: true,
            status: "Mail",
            notification_type: "Mail",
            notification_type_title: "Chat media",
            title: "Habib sent a file",
            date: "12/09/2023",
          },
        ].map((preview) => {
          return (
            <Link
              to={"/notifications"}
              key={preview?.id}
              className=" flex items-start gap-2 md:gap-5 py-4 border-b hover:shadow-xl"
            >
              <div className="h-10 w-10 text-red-500">
                {!preview?.read && (
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
              </div>

              <div>
                {preview?.status === "Approved" ? (
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
                ) : preview?.status === "Declined" ? (
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
                ) : preview?.status === "Mail" ? (
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
                  {preview?.notification_type_title}
                  {":"}{" "}
                  <span className="  font-normal text-gray-700">
                    {preview?.title}
                  </span>
                </h4>
                <span className=" text-gray-500 text-sm">{preview?.date}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ChatMenu;
