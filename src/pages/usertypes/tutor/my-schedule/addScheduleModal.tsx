import { Fragment, SyntheticEvent, useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "../../../../components/textInput";
import LoadingButton from "../../../../components/button";
import AddScheduleSuccess from "./createSuccess";
import Select from "../../../../components/select";

export default function AddNewSchedule({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: Function;
}) {
  const [tutee, setTutee] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [isCreating, setIsCreating] = useState(false);

  const [openSuccess, setOpenSuccess] = useState(false);

  //close modal function handler
  const handleClose = useCallback(() => {
    setOpenModal(false);
  }, []);

  // create role
  const addSchedule = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setIsCreating(true);
    handleClose();
    try {
      setOpenSuccess(true);
    } catch (error) {
    } finally {
      setIsCreating(false);
    }
  }, []);

  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => handleClose()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form
                    onSubmit={addSchedule}
                    className="flex flex-col gap-6 justify-center items-center"
                  >
                    <div className="flex justify-end w-full">
                      <button
                        type="button"
                        title="clode modal"
                        onClick={() => handleClose()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className=" w-full flex flex-col gap-5">
                      <h4 className=" font-semibold text-2xl md:text-3xl text-center">
                        Tutee Meeting
                      </h4>
                      <p className=" text-sm text-gray-500 text-center">
                        Choose a tutte and date you want to meet
                      </p>
                      <Select
                        value={tutee}
                        setValue={setTutee}
                        label={"Tutee"}
                        isRequired={true}
                        id={"tutee"}
                      >
                        <option disabled value={""}>
                          Choose or search Tutee name
                        </option>
                        {[
                          {
                            id: "1",
                            lable: "Folarin Abiodun",
                            value: "232455544",
                          },
                        ].map((item) => (
                          <option key={item?.id} value={item?.value}>
                            {item?.lable}
                          </option>
                        ))}
                      </Select>
                      <TextInput
                        value={date}
                        setValue={setDate}
                        inputType={"date"}
                        label={"Choose a date"}
                        isRequired={true}
                        id={"meet-date"}
                        placeholder="Choose a date"
                      />
                      <Select
                        value={time}
                        setValue={setTime}
                        label={"Time"}
                        isRequired={true}
                        id={"meet-time"}
                      >
                        <option disabled value={""}>
                          Select a time
                        </option>
                        {Array.from({ length: 24 }, (_, index) => (
                          <option key={index} value={index}>
                            {index < 10 ? `0${index}` : index} : 00
                          </option>
                        ))}
                      </Select>
                    </div>
                    <div className="w-full flex items-center gap-4">
                      <input
                        id="confirmation"
                        required
                        type="checkbox"
                        placeholder="Check"
                        className="w-6 h-6"
                      />
                      <label htmlFor="confirmation" className=" text-gray-500">
                        Check this box to confirm booking.
                      </label>
                    </div>
                    <div className="w-full flex flex-col md:flex-row text-center gap-5 md:gap-10">
                      <LoadingButton
                        isLoading={isCreating}
                        type="submit"
                        label="Book meeting"
                      />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <AddScheduleSuccess
        openModal={openSuccess}
        setOpenModal={setOpenSuccess}
      />
    </>
  );
}
