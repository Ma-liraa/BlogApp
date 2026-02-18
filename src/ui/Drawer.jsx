"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function Drawer({ open, onClose, children }) {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady
    ? createPortal(
        <>
          <div
            className={`fixed inset-0 h-screen w-full bg-secondary-800 bg-opacity-30 backdrop-blur-sm ${
              open ? "block" : "pointer-events-none hidden"
            }`}
            onClick={onClose}
          ></div>

          <div
            className={`fixed right-0 top-0 h-full w-[250px] transform transition-transform ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <div className="max-h-full overflow-y-auto bg-secondary-0">
              {children}
            </div>
          </div>
        </>,
        typeof document !== "undefined" && document.body,
      )
    : null;
}
export default Drawer;
