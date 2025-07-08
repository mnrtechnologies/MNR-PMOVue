import React from "react";
import {
  FaTimes,
  FaFlag,
  FaThumbsUp,
  FaExclamationCircle,
} from "react-icons/fa";

// Deduplicated logs
const statusLogs = [
  "Status from “In Process“ to “Done” on 25th March 2025.",
  "Status from “To Do“ to “In Process” on 15th March 2025.",
];

// Dynamic transition
const recentTransition =
  statusLogs.length > 0
    ? statusLogs[0].match(/Status from “(.*?)“ to “(.*?)”/)?.slice(1, 3).join(" → ")
    : "";

const ProjectTask = () => {
  return (
    <div className="bg-white text-gray-900 max-w-[1200px] mx-auto p-1">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-300 pb-3 mb-6">
        <h1 className="text-[17px] font-normal text-[#0B2E56]">Project A</h1>
        {/* <button aria-label="Close" className="text-gray-700 hover:text-gray-900">
          <FaTimes className="text-[22px]" />
        </button> */}
      </header>

      <div className="space-y-4">
        {/* Task Overview */}
        <section className="flex flex-col lg:flex-row gap-4">
          {/* Left (ID + Summary) */}
          <div className="w-full lg:w-3/4 rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#00607F] text-white font-semibold text-[17px] px-6 py-4">
              Task ID - <span className="font-bold">PV-100</span>
            </div>
            <div className="bg-[#F7FAF9] px-6 py-5 flex-1">
              <p className="font-semibold mb-1 text-[15px]">Summary</p>
              <h2 className="font-bold text-[18px] lg:text-[20px] leading-tight">
                Watch Interesting miss charge.
              </h2>
            </div>
          </div>

          {/* Right (Status + Priority) */}
          <div className="w-full lg:w-1/4 rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#A9E79E] flex justify-between items-center px-6 py-4 font-semibold text-[15px] text-[#0B2E56]">
              <span>Status</span>
              <span className="flex items-center gap-2 font-bold">
                DONE <FaThumbsUp className="text-[#2F7D32]" />
              </span>
            </div>
            <div className="bg-[#F7FAF9] px-6 py-5 flex items-center justify-between flex-1">
              <p className="font-semibold">Priority</p>
              <p className="font-extrabold text-[20px] text-[#D31B2B] flex items-center gap-2">
                HIGH <FaExclamationCircle />
              </p>
            </div>
          </div>
        </section>

        {/* Assignee & Flags */}
        <section className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-[#F7FAF9] rounded-lg px-6 py-4 flex justify-between">
            <p className="font-semibold text-[14px]">Assignee</p>
            <p className="font-semibold text-[#0B2E56] text-[15px]">Cheryl28</p>
          </div>
          <div className="flex-1 bg-[#D3E3FB] rounded-lg flex justify-between items-center px-4 py-4">
            <p className="font-semibold text-[14px] flex items-center gap-1">
              Burnout Flag <FaFlag className="text-red-600 text-[14px]" />
            </p>
            <p className="font-bold text-[#006CA2] text-[16px]">TRUE</p>
          </div>
          <div className="flex-1 bg-[#F0D7E6] rounded-lg flex justify-between items-center px-4 py-4">
            <p className="font-semibold text-[14px] flex items-center gap-1">
              Executive Summary Flag <FaFlag className="text-red-600 text-[14px]" />
            </p>
            <p className="font-bold text-[#D31B2B] text-[16px]">FALSE</p>
          </div>
        </section>

        {/* Inactivity and Dates */}
        <section className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-[#F7FAF9] rounded-lg px-6 py-4">
            <div className="flex justify-between">
              <p className="font-semibold text-[14px]">Update Inactivity Days</p>
              <p className="font-bold text-[15px]">5</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-semibold text-[14px]">Days in Current Status</p>
              <p className="font-bold text-[15px]">9</p>
            </div>
          </div>
          {[
            ["Due Date", "2025-07-02"],
            ["Last Status Change Date", "2025-03-06"],
            ["Last AI Interaction Date", "2025-09-06"],
          ].map(([label, value]) => (
            <div key={label} className="flex-1 bg-[#F7FAF9] rounded-lg px-6 py-4 text-center">
              <p className="font-semibold text-[14px] mb-1">{label}</p>
              <time dateTime={value} className="font-bold text-[15px]">
                {new Date(value).toLocaleDateString()}
              </time>
            </div>
          ))}
        </section>

        {/* AI Scores + Status Log + Team Info */}
        <section className="flex flex-col lg:flex-row gap-4">
          {/* AI Scores */}
          <div className="flex-1 bg-[#F7FAF9] rounded-lg flex justify-around items-center py-6">
            {[
              { label: "AI Priority Score", value: "0.44", stroke: "#4A6B8A", offset: 154.7 },
              { label: "AI Delay Prediction Score", value: "0.78", stroke: "#3B9B2F", offset: 61.02 },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="font-semibold text-[14px] mb-2">{item.label}</p>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" stroke="#CBD5E1" strokeWidth="12" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      stroke={item.stroke}
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="276.46"
                      strokeDashoffset={item.offset}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div
                    className="absolute inset-0 flex items-center justify-center font-semibold text-[22px] sm:text-[28px]"
                    style={{ color: item.stroke, fontVariantNumeric: "tabular-nums" }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Log */}
          <div className="flex-1 bg-[#F7FAF9] rounded-lg p-4 flex flex-col">
            <p className="font-semibold text-[14px] mb-2">Status Transition Log</p>
            {recentTransition && (
              <div className="bg-gray-600 text-white rounded-md px-4 py-2 font-semibold text-center mb-3 text-[14px] select-none">
                {recentTransition}
              </div>
            )}
            <div className="overflow-y-auto max-h-[140px] pr-2 scrollbar-thin text-[14px]">
              {statusLogs.map((log, idx) => (
                <p key={idx} className="mb-2 font-semibold">
                  {log}
                </p>
              ))}
            </div>
          </div>

          {/* Team Info */}
          <div className="flex-1 bg-[#F7FAF9] rounded-lg p-6 space-y-3 text-[14px]">
            {[
              ["Team", "QA"],
              ["Original Estimated Hours", "14"],
              ["Time Spent Hours", "35"],
              ["Remaining Estimated Hours", "0"],
              ["Worklog Enteries", "5"],
            ].map(([label, value], idx) => (
              <p key={idx} className="text-gray-600 font-semibold">
                {label}
                <span className="float-right text-black ml-3 font-bold text-[15px]">{value}</span>
              </p>
            ))}
          </div>
        </section>

        {/* AI Summary */}
        <section className="bg-[#F7FAF9] rounded-lg p-6">
          <p className="font-bold text-[14px] mb-2">AI Summary</p>
          <p className="text-[16px] leading-relaxed">
            Yes to politics race civil prove game watch into.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProjectTask;
