import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CloseButton from "./CloseButton";
import CheckCircle from "./CheckCircle";
import ProgressCircle from "./ProgressCircle";
import WhatFuck from "./WhatFuck";

export default function UploadingButton() {
  let [isOpen, setIsOpen] = useState(true);

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
          className="rounded-md bg-red-400 px-6 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-lg transition-all">
                  <div className="flex content-center ">
                    <Dialog.Title
                      as="div"
                      className=" text-lg  leading-6 text-gray-600 font-bold mr-auto"
                    >
                      上传异常
                    </Dialog.Title>
                    <div className="text-blue-800 text-sm cursor-pointer hover:bg-black/15 font-[600] flex items-center">
                      全部继续
                    </div>
                    <CloseButton onClick={closeModal} />
                  </div>
                  <div className=" h-[1px] -mx-6 bg-gray-300 my-4" />
                  <div className="grid gap-4">
                    <div className="flex items-center">
                      <div className="text-base text-gray-600 mr-auto text-ellipsis whitespace-nowrap  overflow-hidden max-w-[60%] ">
                        请24213421342314.asdfsadfasdfsasdfasdfsadfsadfdfsfdpng
                      </div>
                      <CheckCircle />
                    </div>
                    <div className="flex items-center">
                      <div className="text-base text-gray-600 mr-auto text-ellipsis whitespace-nowrap  overflow-hidden max-w-[60%]">
                        请24213421342314.asdfsadfasdfsasdfasdfsadfsadfdfsfdpng
                      </div>
                      <CheckCircle />
                    </div>
                    <div className="flex items-center">
                      <div className="text-base text-gray-600 mr-auto text-ellipsis whitespace-nowrap  overflow-hidden max-w-[60%]">
                        请24213421342314.asdfsadfasdfsasdfasdfsadfsadfdfsfdpng
                      </div>
                      <ProgressCircle percent={10} />
                      <WhatFuck />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
