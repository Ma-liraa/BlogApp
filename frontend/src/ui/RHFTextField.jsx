export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`txt-sm relative w-full font-[1000] text-[#1E2A44] ${hasError ? "text-rose-500" : ""}`}
    >
      <label htmlFor={name} className="mb-2 flex items-center gap-x-1">
        {label}
        {isRequired && (
          <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
        )}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`w-full rounded-xl bg-[#C3CDFF] p-4 text-xs ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="mt-2 block text-xs text-rose-600">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
