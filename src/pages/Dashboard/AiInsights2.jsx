import React from "react";

const ProjectDashboard = () => {
  return (
    <div className="bg-white text-[#00294D] p-6 sm:p-10 font-[Inter]">
      <main className="max-w-[900px] mx-auto">
        <h2 className="font-extrabold text-lg mb-6">Project A</h2>

        {/* Status + Spend Analysis */}
        <section className="flex flex-col md:flex-row md:justify-between gap-6 mb-10">
          {/* Current Status */}
          <div className="md:w-[60%]">
            <h3 className="font-semibold text-sm mb-3">Current Status</h3>
            <div className="relative w-full h-[180px]">
              {/* Embed the same SVG from your HTML above */}
              {/* For brevity, you can split this into its own <StatusChart /> component */}
              <svg
                width="100%"
                height="180"
                viewBox="0 0 600 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                {/* SVG content same as HTML version */}
              </svg>
            </div>
          </div>

          {/* Spend Analysis */}
          <div className="md:w-[38%] bg-[#F7FAF7] rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-sm mb-4">Spend Analysis</h3>
            <div className="flex items-center gap-6">
              {/* Pie Chart SVG */}
              <div className="w-[120px] h-[120px]">
                <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Circles same as HTML */}
                </svg>
              </div>
              {/* Labels */}
              <div className="flex flex-col gap-3 text-sm font-semibold">
                <Legend color="#6FCF97" label="Planned Cost" />
                <Legend color="#6B8CF5" label="Forecasted Cost" />
                <Legend color="#FAD961" label="Actual Cost" />
                <Legend color="#F56565" label="Forecast Deviation" />
              </div>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section>
          <table className="w-full border-collapse bg-[#F9FAFB] rounded-lg overflow-hidden">
            <thead>
              <tr className="text-xs font-semibold text-[#00294D] border-b border-[#E5E7EB]">
                <th className="py-3 px-4 text-left">Program</th>
                <th className="py-3 px-4 text-left">Portfolio</th>
                <th className="py-3 px-4 text-left">Vendor</th>
                <th className="py-3 px-4 text-left">Project Manager</th>
                <th className="py-3 px-4 text-left">Contract ID</th>
                <th className="py-3 px-4 text-left">Burnout Risk (%)</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[#6B7280]">
              {/* Repeat for each row using map if dynamic */}
              <ProjectRow initial="J" name="John Smith" program="Alpha" portfolio="Growth" vendor="Vendor X" contract="C-665" risk="70.98" icon="fas fa-file-code" />
              {/* Add more ProjectRow components here */}
            </tbody>
          </table>
        </section>

        {/* Pagination */}
        <nav
          className="flex justify-end items-center gap-3 mt-6 text-sm font-semibold text-[#00294D]"
          aria-label="Pagination"
        >
          <PaginationButton icon="fas fa-chevron-left" label="Previous" />
          <PaginationPage page={1} active />
          <PaginationPage page={2} />
          <PaginationPage page={3} />
          <PaginationPage page={4} />
          <PaginationPage page={5} />
          <PaginationButton icon="fas fa-chevron-right" label="Next" />
        </nav>
      </main>
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
    <span className="text-[#00294D]">{label}</span>
  </div>
);

const ProjectRow = ({ initial, name, program, portfolio, vendor, contract, risk, icon }) => (
  <tr className="border-b border-[#E5E7EB]">
    <td className="py-3 px-4 font-light">{program}</td>
    <td className="py-3 px-4 font-semibold">{portfolio}</td>
    <td className="py-3 px-4 font-semibold">{vendor}</td>
    <td className="py-3 px-4 flex items-center gap-3 font-light text-[#6B7280]">
      <div className="w-7 h-7 rounded-full bg-[#6FCF97] flex items-center justify-center font-semibold text-white">
        {initial}
      </div>
      {name}
    </td>
    <td className="py-3 px-4 font-light">{contract}</td>
    <td className="py-3 px-4 font-light">{risk}</td>
    <td className="py-3 px-4 font-semibold text-[#00294D] flex items-center gap-2 cursor-pointer">
      <i className={icon}></i> Detail View
    </td>
  </tr>
);

const PaginationButton = ({ icon, label }) => (
  <button className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#E5E7EB]" aria-label={label}>
    <i className={icon}></i>
  </button>
);

const PaginationPage = ({ page, active }) => (
  <button
    className={`w-8 h-8 rounded-full flex items-center justify-center ${active ? "bg-[#00294D] text-white" : "border border-[#E5E7EB] hover:bg-[#E5E7EB]"}`}
    aria-current={active ? "page" : undefined}
  >
    {page}
  </button>
);

export default ProjectDashboard;
