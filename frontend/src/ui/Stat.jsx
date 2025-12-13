import { toPersianDigits } from "@/utils/numberFormatter";

const colors = {
  primary: "bg-[#C3CDFF] text-[#3B66FF]",
  emerald: "bg-emerald-300 text-emerald-900",
  pink: "bg-pink-300 text-pink-900",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="mb-4 break-inside-avoid rounded-[32px] bg-[#3B66FF]/10 p-2 shadow-[0_0_30px_rgba(59,102,255,0.5)] md:mb-0">
      <div className="flex gap-x-4 overflow-hidden rounded-3xl bg-[#FCFCFF]">
        <div
          className={`flex aspect-square flex-1 items-center justify-center rounded-l-full ${colors[color]}`}
        >
          {icon}
        </div>
        <div className="flex flex-1 flex-col items-start justify-center gap-y-6 p-4">
          <h5 className="text-xl font-[1000] text-[#1E2A44]/90">{title}</h5>
          <p className="text-3xl font-[1000] text-[#1E2A44]">
            {toPersianDigits(value)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stat;
