function RHFSelect({ label, name, register, options, isRequired }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex w-full items-center gap-x-1 font-[1000] text-[#1E2A44]"
      >
        {label}
        {isRequired && (
          <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
        )}
      </label>
      <select
        {...register(name)}
        id={name}
        className="w-full rounded-xl bg-[#E5F6FF] p-4 text-xs font-[1000] text-[#1E2A44]"
      >
        <option className="text-sm font-[1000] text-[#1E2A44]" value="#">
          همه
        </option>
        {options.map((option) => (
          <option
            className="text-sm font-[1000] text-[#1E2A44]"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
