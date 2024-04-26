import { useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import TextInput from "../../components/textInput";
import Select from "../../components/select";
import Password from "../../components/password";

const breadCrumb = [
  {
    url: "/profile",
    label: "Profile",
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

function Profile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [othernames, setOthernames] = useState("");
  const [gender, setGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <MainLayout breadCrumb={breadCrumb}>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl px-5 md:px-10">
          <div className="flex flex-col md:flex-row w-full gap-10 mt-10 border-b pb-10">
            <div className=" max-w-sm w-full">
              <h4 className=" font-semibold text-xl">Personal Info</h4>
              <p className=" text-gray-500">
                This will be displayed on your profile
              </p>
            </div>
            <div className=" w-full flex flex-col gap-3">
              <div className="flex items-center justify-center w-20 h-20 aspect-square rounded-full overflow-hidden">
                <img
                  src="./logo512.png"
                  alt="avatar"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                <TextInput
                  id="firstname"
                  value={firstname}
                  setValue={setFirstname}
                  inputType="text"
                  label="First name"
                  placeholder="Joel"
                  isRequired={false}
                />
                <TextInput
                  id="other-names"
                  value={othernames}
                  setValue={setOthernames}
                  inputType="text"
                  label="Other names"
                  placeholder="Aramide"
                  isRequired={false}
                />
                <TextInput
                  id="lastname"
                  value={lastname}
                  setValue={setLastname}
                  inputType="text"
                  label="Last name"
                  placeholder="Bisola"
                  isRequired={false}
                />
              </div>
              <div className="w-full max-w-md ">
                <Select
                  value={gender}
                  setValue={setGender}
                  label="Gender"
                  isRequired={false}
                  id="gender"
                >
                  {[
                    {
                      value: "Male",
                      label: "male",
                    },
                    {
                      value: "Female",
                      label: "female",
                    },
                  ].map((item) => (
                    <option key={item?.value} value={item?.value}>
                      {item?.label}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full max-w-md">
                <TextInput
                  id="phone-number"
                  value={phoneNumber}
                  setValue={setPhoneNumber}
                  inputType="number"
                  label="Phone Number"
                  placeholder="090000000000"
                  isRequired={false}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-10 mt-10">
            <div className=" max-w-sm w-full">
              <h4 className=" font-semibold text-xl">Login Details</h4>
              <p className=" text-gray-500">Modify your password</p>
            </div>
            <div className=" w-full">
              <div className="w-full max-w-md flex flex-col gap-5">
                <Password
                  id="current-password"
                  value={currentPassword}
                  setValue={setCurrentPassword}
                  label="Current Password"
                  placeholder="Your current password"
                  isRequired={false}
                />

                <Password
                  id="new-password"
                  value={newPassword}
                  setValue={setNewPassword}
                  label="New Password"
                  placeholder="Your new password"
                  isRequired={false}
                />
                <Password
                  id="confirm-new-password"
                  value={confirmNewPassword}
                  setValue={setConfirmNewPassword}
                  label="Confirm New Password"
                  placeholder="Confirm password"
                  isRequired={false}
                />
              </div>
            </div>
          </div>
          <div className=" flex w-full justify-end gap-4 mt-10">
            <button
              type="button"
              className="flex justify-center border-2 text-primary_green-500 shadow-md hover:border-primary_green-500 transition-all hover:border-2 text-center border-gray-300 rounded-lg p-3 font-bold"
            >
              <span>Cancel</span>
            </button>
            <button
              type="button"
              className="flex justify-center border-2 text-center border-gray-300 rounded-lg p-3 bg-primary_green-500 font-bold text-white hover:bg-primary_blue-500 cursor-pointer transition-all"
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
