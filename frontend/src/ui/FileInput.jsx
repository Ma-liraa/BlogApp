import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

function FileInput({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  className,
  errors,
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        {label} {isRequired && <span className="text-rose-500">*</span>}
      </label>

      <label
        htmlFor="file-upload"
        className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition-all duration-300 ${
          hasError
            ? "border-rose-300 bg-rose-50 hover:bg-rose-100"
            : "border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50"
        } `}
      >
        <div
          className={`mb-3 rounded-full p-3 transition-colors ${hasError ? "bg-rose-200 text-rose-600" : "bg-white text-blue-600 shadow-sm group-hover:scale-110 group-hover:text-blue-700"}`}
        >
          <CloudArrowUpIcon className="h-8 w-8" />
        </div>

        <p className="text-center text-sm font-medium text-slate-600">
          <span className="font-bold text-blue-600">کلیک کنید</span> یا فایل را
          اینجا رها کنید
        </p>
        <p className="mt-1 text-xs text-slate-400">
          PNG, JPG, WEBP (حداکثر 5MB)
        </p>

        <input
          id="file-upload"
          type="file"
          className="sr-only hidden"
          name={name}
          dir={dir}
          onChange={onChange}
          {...rest}
        />
      </label>

      {hasError && (
        <span className="mt-1.5 block text-xs font-medium text-rose-500">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}

export default FileInput;
