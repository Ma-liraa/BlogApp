"use client";
import { useState } from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

// export const metadata = {
//   title: "پروفایل",
//   description: "پروفایل",
// };

export default function RootLayout({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <div className="bg"></div>
      <div className="contain">
        <div className="flex h-screen p-4">
          <div
            className={`hidden transition-all md:block ${sideBarOpen ? "w-[250px]" : "w-[72px]"} `}
          >
            <SideBar
              sideBarOpen={sideBarOpen}
              setSideBarOpen={setSideBarOpen}
            />
          </div>
          <div className="w-full overflow-y-auto md:flex-1 md:rounded-[24px] md:bg-[#FCFCFF]/60 md:p-4">
            <Header />
            <div>{children}</div>
          </div>
        </div>
        {/* <NavigationBar /> */}
      </div>
    </>
  );
}
