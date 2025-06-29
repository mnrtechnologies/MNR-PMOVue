import React from "react";
import logo from "../../assets/logo.png";

const AuthLeftPanel = () => {
  return (
    <div
      className="hidden lg:block w-2/3 bg-[#04254d] relative"
      style={{
        clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-20">
        <div className="text-white text-center">
          <img
            src={logo}
            alt="PortfolioVue Logo"
            className="mx-auto mb-6 w-48 md:w-56 lg:w-72"
          />
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed font-medium">
            Empowering cross-industry enterprises <br />
            to optimize delivery, maximize ROI, <br />
            and surface predictive insights <br />
            through role-based <br />
            AI dashboards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLeftPanel;
