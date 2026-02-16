import React from "react";

function layout({ children }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}

export default layout;
