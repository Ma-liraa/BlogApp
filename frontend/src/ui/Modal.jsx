"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";

function Modal({ open, onClose, title, children, description = "" }) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div className="fixed left-0 top-0 z-50 h-screen w-full bg-secondary-800 bg-opacity-30 backdrop-blur-sm">
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out md:max-w-lg"
        >
          <div className="mb-6 flex items-center justify-between border-b border-b-secondary-300 pb-2">
            <div>
              <p className="text-base font-bold text-secondary-700">{title}</p>
              <p className="text-sm text-secondary-400 lg:text-base">
                {description}
              </p>
            </div>
            <button onClick={onClose}>
              <XMarkIcon className="h-5 w-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>,
      typeof document !== "undefined" && document.body,
    )
  );
}
export default Modal;
