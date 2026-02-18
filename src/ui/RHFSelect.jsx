"use client";

import { useState, useRef, useEffect } from "react";
import { useController } from "react-hook-form"; // استفاده از کنترلر برای مدیریت فرم
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function RHFSelect({
  label,
  name,
  control, // به جای register از control استفاده می‌کنیم
  options,
  isRequired,
  placeholder = "انتخاب کنید...",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // اتصال به react-hook-form
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: isRequired ? "این فیلد الزامی است" : false },
  });

  // بستن منو وقتی بیرون کلیک می‌شود
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // پیدا کردن لیبل گزینه انتخاب شده برای نمایش
  const selectedOption = options.find(
    (opt) => opt._id === value || opt.value === value,
  );

  return (
    <div className="w-full text-xs font-medium sm:text-sm" ref={containerRef}>
      {/* Label */}
      {label && (
        <label
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 flex cursor-pointer items-center gap-1 text-sm font-bold text-slate-700"
        >
          {label}
          {isRequired && <span className="text-rose-500">*</span>}
        </label>
      )}

      {/* Select Trigger (باکس اصلی) */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex w-full items-center justify-between rounded-xl border bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
            error
              ? "border-rose-300 bg-rose-50 text-rose-500"
              : isOpen
                ? "border-blue-500 bg-white ring-4 ring-blue-600/10"
                : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
          }`}
        >
          <span
            className={selectedOption ? "text-slate-800" : "text-slate-400"}
          >
            {selectedOption
              ? selectedOption.title || selectedOption.label
              : placeholder}
          </span>
          <ChevronDownIcon
            className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-blue-600" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu (لیست گزینه‌ها) */}
        <div
          className={`absolute left-0 right-0 top-[110%] z-50 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 transition-all duration-200 ease-out ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 max-h-60 overflow-y-auto p-1">
            {/* گزینه "همه" یا خالی (اختیاری) */}
            <li
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className="cursor-pointer rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-50"
            >
              همه
            </li>

            {options.map((option) => {
              // هندل کردن تفاوت ساختار دیتا (بعضی وقتها _id و title است، بعضی وقتها value و label)
              const optValue = option._id || option.value;
              const optLabel = option.title || option.label;
              const isSelected = value === optValue;

              return (
                <li
                  key={optValue}
                  onClick={() => {
                    onChange(optValue);
                    setIsOpen(false);
                  }}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                    isSelected
                      ? "bg-blue-50 font-bold text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{optLabel}</span>
                  {isSelected && <CheckIcon className="h-4 w-4" />}
                </li>
              );
            })}

            {options.length === 0 && (
              <li className="p-3 text-center text-xs text-slate-400">
                گزینه‌ای موجود نیست
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-500">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9V14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12.0001 17.5001H12.0101"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {error.message}
        </span>
      )}
    </div>
  );
}
