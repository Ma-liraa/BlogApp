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
  const hasError = !!errorMessages;

  return (
    <div className="w-full text-xs font-medium sm:text-sm">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className={`mb-2 flex items-center gap-2 transition-colors ${
            hasError ? "text-rose-400" : "text-[#1E2A44]"
          }`}
        >
          {label}
          {isRequired && (
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          )}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        <input
          autoComplete="off"
          type={type}
          id={name}
          dir={dir}
          className={`w-full rounded-2xl px-4 py-3 text-xs outline-none transition-all duration-300 sm:px-5 sm:py-4 sm:text-sm ${dir === "ltr" ? "text-left" : "text-right"} bg-[#F3F6FB] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(94,114,228,0.15)] ${
            hasError
              ? "border border-rose-300 focus:shadow-[0_0_0_3px_rgba(244,63,94,0.15)]"
              : "border border-transparent focus:border-[#5E72E4]"
          } `}
          {...register(name, validationSchema)}
          {...rest}
        />

        {/* Soft Glow Layer */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5E72E4]/0 via-[#5E72E4]/5 to-[#5E72E4]/0 opacity-0 transition duration-300 focus-within:opacity-100" />
      </div>

      {/* Error */}
      {hasError && (
        <span className="mt-2 block pr-1 text-[11px] text-rose-400 sm:text-xs">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}
