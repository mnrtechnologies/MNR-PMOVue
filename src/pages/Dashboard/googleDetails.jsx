import React, { useState } from "react";
import { FaTimes, FaCheckCircle, FaCheck } from "react-icons/fa";

const GoogleDetails = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);

  const data = [
    { label: "Vendor", value: "X" },
    { label: "Allocated Hours", value: "173" },
    { label: "Actual Hours", value: "143", align: "text-right" },
  ];

  return (
    <div className="bg-white text-gray-900 max-w-[1200px] mx-auto p-6">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-300 pb-3 mb-6">
        <h1 className="text-[17px] font-normal text-[#0B2E56]">Project A</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
        {/* Left Section */}
        <section className="space-y-6">
          <h2 className="bg-[#00294D] text-white text-xl font-semibold rounded-t-md px-6 py-3">
            Program - Alpha
          </h2>

          {/* Project Manager */}
          <div className="bg-[#F7FAF9] p-4 space-y-4 rounded-md">
            <div className="flex justify-between items-center px-4 py-2 rounded-md transition group hover:bg-[#D9E6F0] hover:border hover:border-dashed hover:border-gray-400">
              <span className="font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]">
                Project Manager
              </span>
              <span className="font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]">
                John Smith
              </span>
            </div>
            <div className="space-y-2">
              {[
                ["Contract ID", "C-665"],
                ["Contract Start Date", "Jun 27 2024"],
                ["Contract End Date", "Feb 28 2025"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-2 rounded-md transition group hover:bg-[#D9E6F0] hover:border hover:border-dashed hover:border-gray-400"
                >
                  <span className="font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]">
                    {label}
                  </span>
                  <span className="font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Bars */}
          <div className="bg-[#F7FAF9] p-4 rounded-md space-y-4">
            {[
              ["Contract Celling Price", "$121142", "bg-yellow-400"],
              ["Contract Target Price", "$113587", "bg-[#0B7B8A]"],
              ["Actual Contract Spend", "$113123", "bg-[#00294D]"],
            ].map(([label, amount, color], i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="font-semibold text-xs w-40">{label}</span>
                <div className="flex-1 mx-4">
                  <div className={`h-3 rounded-full ${color} w-full`}></div>
                </div>
                <span className="font-semibold text-xs">{amount}</span>
              </div>
            ))}
          </div>

          {/* Expiry and Burnout with Circular Chart */}
          <div className="flex flex-wrap justify-between gap-4">
            {/* Expiry & Burnout */}
            <div className="space-y-4 flex-1 min-w-[240px] max-w-[520px]">
              <div className="bg-yellow-300 rounded-md px-6 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2 font-semibold text-sm text-yellow-900">
                  <FaCheckCircle />
                  <span>Expiring soon</span>
                </div>
                <span className="font-semibold text-sm">TRUE</span>
              </div>

              <div className="bg-[#FDEDED] rounded-md px-6 py-6 text-center">
                <p className="text-red-700 font-semibold text-lg">
                  Burnout Risk (%)
                </p>
                <p className="text-red-700 font-semibold text-2xl mt-1">
                  78.98
                </p>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="bg-[#F7FAF9] rounded-md p-4 flex items-center justify-center w-[180px] h-[180px]">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                {/* White inner circle */}
                <circle cx="60" cy="60" r="42" fill="white" />

                {/* Outer circular track */}
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#F7D130"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Progress path */}
                <path
                  d="M114 60a54 54 0 0 1-54 54"
                  stroke="#F47E2B"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Center value */}
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="24"
                  fontWeight="700"
                  fill="#7B8FA4"
                >
                  70.98
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="space-y-6 w-full min-w-0">
          <h2 className="bg-[#0B7B8A] text-white text-xl font-semibold rounded-t-md px-6 py-3">
            Portfolio - Growth
          </h2>

          {/* Resource and Vendor */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-[#F7FAF9] rounded-md p-4 flex-1 min-w-[200px]">
              <p className="text-xs text-gray-600 font-semibold">
                Resource Name
              </p>
              <p className="font-bold text-lg">Lisa Ray</p>
              <p className="text-xs text-gray-600 font-semibold mt-2">Role</p>
              <p className="font-bold text-base">QA Engineer</p>
            </div>
            <div className="bg-[#F7FAF9] rounded-md px-4 py-4 space-y-2">
              {data.map(({ label, value, align }, i) => {
                const isSelected = selectedLabel === label;

                return (
                  <div
                    key={i}
                    onClick={() => setSelectedLabel(label)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 cursor-pointer transition-all duration-200 group
              hover:bg-[#D9E6F0] hover:border hover:border-dashed hover:border-gray-400
              ${
                isSelected ? "border border-dashed border-red-600 bg-white" : ""
              }
            `}
                  >
                    <span
                      className={`font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]`}
                    >
                      {label}
                    </span>
                    <span
                      className={`text-xs text-gray-700 group-hover:text-[#0B7B8A] ${
                        isSelected ? "font-bold text-lg" : "font-semibold"
                      } ${align || ""}`}
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-[#F7FAF9] rounded-md px-4 py-4 space-y-2">
            {[
              {
                label: "Planned Cost",
                amount: "$113587",
                color: "bg-[#9B8ABF]",
              },
              {
                label: "Forecasted Cost",
                amount: "$113587",
                color: "bg-[#E87C7C]",
              },
              {
                label: "Actual Cost",
                amount: "$113587",
                color: "bg-[#F7D130]",
              },
              {
                label: "Forecasted Deviation",
                amount: "$113587",
                color: "bg-[#0B7B8A]",
              },
            ].map(({ label, amount, color }, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-[#D9E6F0] hover:border hover:border-dashed hover:border-gray-400 group"
              >
                <span className="font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]">
                  {label}
                </span>
                <div className="flex-1 mx-4 max-w-[140px]">
                  <div className={`h-3 rounded-full w-full ${color}`}></div>
                </div>
                <span className="font-semibold text-xs text-gray-700 group-hover:text-[#0B7B8A]">
                  {amount}
                </span>
              </div>
            ))}
          </div>

          {/* Project Status + Gauge */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#F7FAF9] rounded-md flex flex-col items-center justify-center p-4 w-[200px]">
              <svg width="160" height="100" viewBox="0 0 160 100">
                <path
                  d="M20 80 A60 60 0 0 1 140 80"
                  fill="none"
                  stroke="#E52E2E"
                  strokeWidth="20"
                  strokeDasharray="40 120"
                />
                <path
                  d="M20 80 A60 60 0 0 1 140 80"
                  fill="none"
                  stroke="#F7D130"
                  strokeWidth="20"
                  strokeDasharray="40 80"
                />
                <path
                  d="M20 80 A60 60 0 0 1 140 80"
                  fill="none"
                  stroke="#3ED400"
                  strokeWidth="20"
                  strokeDasharray="40 40"
                />
                <line
                  x1="80"
                  y1="80"
                  x2="110"
                  y2="40"
                  stroke="#2F2F2F"
                  strokeWidth="4"
                />
                <circle cx="80" cy="80" r="5" fill="#2F2F2F" />
              </svg>
              <p className="font-semibold mt-2 text-sm">Project Status (RAG)</p>
            </div>

            <div className="bg-[#F7FAF9] rounded-md p-4 flex-1 min-w-[200px] space-y-3">
              {[
                ["Updated Date", "6/09/2025"],
                ["Risk", "Vendor Delay"],
                ["Issues", "Budget cut"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="flex justify-between text-xs font-semibold"
                >
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone */}
          <div className="bg-[#D4F0C0] rounded-md px-4 py-3 flex items-center font-semibold text-[#3CA52B] text-lg">
            <span>Milestone Status</span>
            <FaCheck className="ml-3" />
            <span className="ml-2">Completed</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GoogleDetails;
