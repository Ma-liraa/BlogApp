"use client";
import Header from "@/components/Header";
import NavigationBar from "@/ui/NavigationBar";
import SideBar from "@/ui/SideBar";
import React, { useState } from "react";

function layout({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <div className="contain flex h-screen overflow-y-auto p-4 md:overflow-hidden">
        <div
          className={`hidden transition-all md:block ${sideBarOpen ? "w-[250px]" : "w-[72px]"} `}
        >
          <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        </div>
        <div className="w-full md:flex-1 md:overflow-y-auto md:rounded-[24px] md:bg-[#FCFCFF]/60 md:p-4">
          {/* <Header /> */}
          <div>{children}</div>
        </div>
      </div>
      <NavigationBar />
    </>
  );
}

export default layout;
