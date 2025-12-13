import React from "react";

function layout({ children }) {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="p-2 w-full max-w-md">{children}</div>
    </div>
  );
}

export default layout;
