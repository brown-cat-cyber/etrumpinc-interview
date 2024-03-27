import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CloseMark from "../ui/CloseMark";
import CheckCircle from "../ui/CheckCircle";
import UploadingButton from "./components/SelectingButton";
import { FileWithStatus, useFileStore } from "../../store";
import ProgressCircle from "./components/ProgressCircle";
import RestartButton from "./components/RestartButton";
import FilesList from "./components/FilesList";
import Header from "./components/Header";
export const hoverBg = "hover:p-1 hover:-m-1 hover:bg-gray-200/80 rounded-lg";
export default function UploadingModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-400 px-6 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/85"
        >
          打开上传框
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/15" />
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
                <Dialog.Panel className="w-full max-w-md transform  bg-white p-4 text-left align-middle shadow-lg transition-all">
                  <Header handleClose={closeModal} />
                  <div className=" h-[1px] -mx-4  bg-gray-200 mt-5" />
                  <FilesList />
                  <UploadingButton />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
