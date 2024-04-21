import { useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import adminNavMenu from "../../assets/navItems/adminMenu";
import tutorNavMenu from "../../assets/navItems/tutorMenu";
import tuteeNavMenu from "../../assets/navItems/tuteeMenu";

import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { toggleMenuView } from "../../stores/appFunctionality/navMenuFunctions";
import { clearProfile } from "../../stores/users/profile";

//full view
function FullMenuView() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { usertype } = useAppSelector((state) => state?.userProfile?.value);
  const navMenu =
    usertype === "admin"
      ? adminNavMenu
      : usertype === "tutor"
      ? tutorNavMenu
      : tuteeNavMenu;

  //get side bar meny status from redux store
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  //toggle side bar menu using redux dispatcher
  const toggleMenu = useCallback(() => {
    dispatch(toggleMenuView());
  }, []);

  const logOut = useCallback(() => {
    dispatch(clearProfile());
    navigate("/");
  }, []);

  return (
    <div
      className={`flex h-screen overflow-y-auto flex-col justify-between gap-10 p-2 md:p-5 transition-all bg-white border-r border-gray-200 ${
        fullView ? "w-[300px]" : "hidden md:w-24 md:flex"
      }`}
    >
      {/* nav items section */}
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-between items-center mt-5">
          <div className="flex items-center w-full">
            <Link
              to={`/${usertype}/dashboard`}
              className="w-full flex items-center justify-center h-10 aspect-square rounded-full overflow-hidden"
            >
              <img
                src={fullView ? "/logo512.png" : "/logo.png"}
                alt="logo"
                className="w-full h-auto pr-2"
              />
            </Link>
          </div>
          {fullView && (
            <button
              type="button"
              title="toggle-bar"
              onClick={() => toggleMenu()}
              className=" p-2 bg-red-700/10 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-8 h-8 text-red-700 hover:text-primary_green-500 transition-all cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div
          className={`flex flex-col gap-5 mt-10 ${
            fullView ? "justify-start" : "justify-center"
          }`}
        >
          {navMenu?.map((items) => {
            return (
              <div key={items?.id} className="w-full group">
                <NavLink
                  to={items?.url}
                  className={({ isActive }) =>
                    isActive
                      ? `flex justify-between bg-primary-500/20 text-secondary-500 rounded-xl w-full p-2 md:p-3 hover:border hover:border-primary-500 hover:bg-transparent hover:text-primary-500 transition-all`
                      : "flex justify-between text-gray-500 rounded-xl w-full p-2 md:p-3 hover:bg-primary-500 hover:text-white transition-all"
                  }
                >
                  <div className="flex items-center gap-4">
                    {items?.icon}{" "}
                    {fullView && <span className=" ">{items?.label}</span>}{" "}
                  </div>
                  {items?.hasSubMenu && fullView && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </NavLink>
                {items?.hasSubMenu && fullView && (
                  <div className=" w-full ml-5 group-hover:my-4 transition-all">
                    {items?.subMenu.map((subItem) => {
                      return (
                        <Link
                          to={subItem?.url}
                          key={subItem?.id}
                          className=" text-gray-500 group-hover:flex hidden hover:text-primary_green-500"
                        >
                          <div className="flex items-center">
                            {subItem?.icon}{" "}
                            <span className=" ">{subItem?.label}</span>{" "}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* signout nav section */}
      <div className=" flex flex-col items-center gap-4">
        {usertype === "admin" ? (
          <Link
            to="#"
            className="w-full flex items-center gap-4 p-3 cursor-pointer text-gray-500 rounded-xl md:p-3 hover:bg-primary-500 hover:text-white transition-all"
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
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {fullView && <span className=" ">Settings</span>}
          </Link>
        ) : (
          <Link
            to="#"
            className="w-full flex items-center gap-4 p-3 cursor-pointer text-gray-500 rounded-xl md:p-3 hover:bg-primary-500 hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
            </svg>
            {fullView && <span className=" ">Support</span>}
          </Link>
        )}
        <button
          type="button"
          onClick={() => logOut()}
          className={`w-full flex items-center text-red-500 p-3 border-2 ${
            fullView ? "" : ""
          } gap-4 rounded-lg hover:text-primary-500 hover:border-primary-500 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
          {fullView && <span className=" ">Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default FullMenuView;
