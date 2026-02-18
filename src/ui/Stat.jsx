"use client";
import { toPersianDigits } from "@/utils/numberFormatter";

const colors = {
  primary: {
    boxColor: "bg-[#E5F6FF]",
    boxIcom: "bg-[#B1E6FC]",
    iconColor: "text-[#3072EE]",
  },
  emerald: {
    boxColor: "bg-[#EAFFF4]",
    boxIcom: "bg-[#AFF3C8]",
    iconColor: "text-[#22BF60]",
  },
  pink: {
    boxColor: "bg-[#F8F5FF]",
    boxIcom: "bg-[#DCD6FC]",
    iconColor: "text-[#6054A2]",
  },
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="">
      <div
        className={`flex items-center gap-x-4 overflow-hidden rounded-3xl p-2 px-6 ${colors[color].boxColor}`}
      >
        <div
          className={`flex h-[60px] w-[60px] items-center justify-center rounded-full p-4 ${colors[color].boxIcom} ${colors[color].iconColor}`}
        >
          {icon}
        </div>
        <div className="flex flex-1 flex-col items-start justify-center gap-y-2 p-4">
          <h5 className="text-base font-[1000] text-[#1E2A44]/90">{title}</h5>
          <p className="text-sm font-[1000] text-[#1E2A44]">
            {toPersianDigits(value)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stat;
