"use client";

import Header from "@/components/Header";
import NavigationBar from "@/ui/NavigationBar";
import React from "react";

function layout({ children }) {
  // const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <Header />
      {children}
      <NavigationBar />
    </div>
  );
}

export default layout;
