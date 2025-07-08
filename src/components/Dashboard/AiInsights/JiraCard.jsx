import React from "react";


const JiraCard = ({ id, priority }) => {
  const priorityStyles = {
    High: "bg-red-200 text-red-600",
    Medium: "bg-yellow-300 text-yellow-700",
    Low: "bg-green-300 text-green-700",
  };

  return (
    <div className="bg-[#F9FAFB] rounded-lg p-4 shadow-sm max-w-[280px]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold">
          <span className="text-red-500">🦠</span>
          <span>PV-{id}</span>
        </div>
        <div
          className={`${priorityStyles[priority]} text-xs font-semibold rounded-md px-2 py-0.5`}
        >
          {priority}
        </div>
      </div>
      <h3 className="text-[#002E5D] font-bold text-sm mb-1">Project Name</h3>
      <p className="text-gray-600 text-xs mb-2">Lorem ipsum dolor sit amet consectetur...</p>
      <div className="text-[10px] text-gray-500 font-semibold mb-1">
        Ai Delay Score{" "}
        <span className="ml-1 font-bold text-[11px]">{(Math.random() * 0.6 + 0.4).toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-2 rounded-full bg-yellow-300 w-16"></div>
        <div className="h-2 rounded-full bg-gray-300 w-16"></div>
      </div>
      <a
        href="insights/jira-details"
        className="text-[#004C8C] text-xs font-semibold hover:underline"
      >
        Detail view
      </a>
    </div>
  );
};

export default JiraCard;

