import React from "react";

const AuthRightPanel = ({ children }) => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center mt-14 px-4 sm:px-10 py-10 sm:py-16">
      <div className="w-full max-w-lg sm:max-w-md shadow-2xl p-6 sm:p-8 rounded-lg bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AuthRightPanel;
