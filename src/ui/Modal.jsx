"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function Modal({ open, onClose, title, children, description = "" }) {
  const ref = useOutsideClick(onClose);
  const [mounted, setMounted] = useState(false);

  // برای جلوگیری از خطای هیدراتیشن در نکست جی‌اس
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    // --- لایه پس‌زمینه (Backdrop) ---
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 p-4 backdrop-blur-sm transition-all duration-200">
      {/* --- بدنه اصلی مودال --- */}
      <div
        ref={ref}
        className="animate-in zoom-in-95 relative w-full max-w-lg origin-center overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-100 transition-all duration-300 md:w-[calc(100vw-2rem)]"
      >
        {/* هدر مودال */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
          <div>
            {title && (
              <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            )}
            {description && (
              <p className="mt-1 text-xs font-medium text-slate-500">
                {description}
              </p>
            )}
          </div>

          {/* دکمه بستن */}
          <button
            onClick={onClose}
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-rose-50 hover:text-rose-500 hover:ring-rose-200"
          >
            <XMarkIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
          </button>
        </div>

        {/* محتوای مودال */}
        <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 max-h-[calc(100vh-10rem)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
