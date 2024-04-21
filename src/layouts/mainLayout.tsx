import React, { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { toggleMenuView } from "../stores/appFunctionality/navMenuFunctions";
import NavigationMenu from "../components/navigationMenu";
import { Link } from "react-router-dom";
import NotificationsMenu from "../pages/notifications/notificationMenu";
import Loader from "../pages/loader";
import MetaTags from "../components/metaTags";
import ChatMenu from "../pages/chat/chatMenu";

interface layoutProps {
  children: React.ReactNode;
  breadCrumb?: { url: string; label: string; icon: React.ReactNode }[];
  pageTitle?: string;
  pageDescription?: string;
  isLoading?: boolean;
  failedToLoad?: boolean;
  setFailedToLoad?: Function;
  retryRequest?: Function;
}

function MainLayout({
  children,
  breadCrumb = [],
  pageTitle = "Dashboard",
  pageDescription,
  isLoading = false,
  failedToLoad = false,
  setFailedToLoad,
  retryRequest,
}: layoutProps) {
  const dispatch = useAppDispatch();
  //get status of side menu from redux store
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  //toggle side bar menu using reux dispatcher
  const toggleMenu = useCallback(() => {
    dispatch(toggleMenuView());
  }, []);

  return (
    <>
      <MetaTags title={pageTitle} description={pageDescription} />
      <main className=" flex w-full">
        <nav className="z-10 fixed left-0 top-0">
          <NavigationMenu />
        </nav>
        <div className=" w-full absolute top-0 left-0 pl-0 md:pl-24">
          <div className="w-full webkit-sticky top-0 z-[8] bg-white shadow-md">
            <div className="flex border-b border-gray-200">
              {!fullView && (
                <button
                  type="button"
                  title="toggle-bar"
                  onClick={() => toggleMenu()}
                  className="py-5 bg-gray-400/20 h-fit px-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" w-8 h-8 text-gray-700 hover:text-primary_green-500 transition-all cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                </button>
              )}
              <div className="w-full flex justify-between p-5">
                <div className="w-full hidden md:block">
                  <p className=" text-gray-500 text-sm">Hi Jean,</p>
                  <h6 className=" font-semibold text-lg text-gray-700 w-full hidden md:block">
                    Welcome to your {pageTitle}
                  </h6>
                </div>
                <div className="relative flex items-center gap-5 w-full justify-end">
                  <div className=" group flex justify-end cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                    <div className=" group-hover:flex absolute top-0 right-0 hidden pt-10 justify-end">
                      <ChatMenu />
                    </div>
                  </div>
                  <div className=" group flex justify-end cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                    <div className=" group-hover:flex absolute top-0 right-0 hidden pt-10 justify-end">
                      <NotificationsMenu />
                    </div>
                  </div>
                  <Link to="/profile" className="flex items-center">
                    <div className="flex items-center gap-3 w-full">
                      <img
                        src="/logo.png"
                        alt="avatar"
                        className="w-10 h-10 aspect-square rounded-full overflow-hidden"
                      />
                      <div className="hidden md:block">
                        <h6 className=" font-semibold text-dark-500">
                          Jean Chopra
                        </h6>
                        <span className=" text-gray-500 text-sm">Tutor</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex gap-1 p-5 text-primary_green-500 text-xs">
              {breadCrumb.map((crumb) => {
                return (
                  <Link
                    to={crumb?.url}
                    key={crumb?.label}
                    className="flex items-center gap-1"
                  >
                    {crumb?.icon} <span>{crumb?.label}</span> {"/"}
                  </Link>
                );
              })}
            </div>
          </div>
          <section className=" w-full h-full overflow-y-auto overflow-x-hidden pb-36">
            {isLoading ? (
              <Loader
                failed={failedToLoad}
                setFailed={setFailedToLoad}
                tryAgain={retryRequest}
              />
            ) : (
              children
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default MainLayout;
