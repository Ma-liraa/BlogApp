import Header from "@/components/Header";
import React from "react";

function layout({ children }) {
  return (
    <>
      <div className="bg-white shadow-lg">
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}

export default layout;
