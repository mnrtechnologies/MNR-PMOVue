import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const FilterTab = ({ id, label, count, color, selectedFilter, onChange }) => (
  <div
    className={`flex items-center gap-2 bg-white border border-gray-300 rounded-lg py-2 px-4 cursor-pointer select-none ${
      selectedFilter === id ? "ring-2 ring-blue-500" : ""
    }`}
    onClick={() => onChange(id)}
  >
    <input
      type="radio"
      id={id}
      name="status"
      className="cursor-pointer"
      checked={selectedFilter === id}
      readOnly
    />
    <label
      htmlFor={id}
      className={`${color} text-sm font-semibold cursor-pointer`}
    >
      {label}
    </label>
    <span className="ml-1 text-gray-700 font-semibold text-sm">{count}</span>
  </div>
);

const JiraCard = ({
  startDate,
  endDate,
  phase,
  phaseColor,
  title,
  userInitial,
  userName,
  userCode,
  percent,
  role,
  status,
  statusColor,
  progress,
  issue,
  assigneeInitial,
  assigneeName,
  borderColor,
}) => (
  <div className="bg-[#F9FAFB]  rounded-xl shadow-sm p-5 border border-transparent hover:border-gray-200">
    <div className="flex justify-between items-center mb-3">
      <div className="text-xs text-gray-400 font-semibold">
        <span>{startDate}</span>
        <span className="mx-2">to</span>
        <span>{endDate}</span>
      </div>
      <div
        className={`bg-${phaseColor}-200 text-${phaseColor}-600 text-xs font-bold rounded-lg px-3 py-1`}
      >
        {phase}
      </div>
    </div>
    <div className="border-b border-gray-300 pb-2 mb-3">
      <p className="font-bold text-gray-900 text-sm">{title}</p>
    </div>
    <div className="flex items-center gap-3 mb-3">
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full bg-${phaseColor}-200 text-${phaseColor}-700 font-semibold`}
      >
        {userInitial}
      </div>
      <p className="text-sm font-semibold text-gray-900">
        {userName}{" "}
        <span className="font-normal text-gray-600">/ {userCode}</span>
      </p>
      <p className="ml-auto text-red-600 font-bold text-sm">{percent}%</p>
    </div>
    <p className="text-xs text-gray-500 mb-2">{role}</p>
    <div className="flex items-center justify-between mb-2">
      <p className={`text-${statusColor}-500 font-bold text-sm`}>{status}</p>
      <p className="text-xs text-gray-600">{progress}%</p>
    </div>
    <progress
      className="progress-bar w-full h-1 rounded-full"
      value={progress}
      max="100"
    ></progress>
    <div className="flex justify-between text-xs text-gray-600 mt-2 mb-4">
      <span>
        <span className="inline-block w-3 h-3 rounded-full bg-red-600 mr-1"></span>
        Issues
      </span>
      <span>{issue}</span>
    </div>
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 border-${borderColor}-600 text-${borderColor}-600 font-semibold`}
      >
        {assigneeInitial}
      </div>
      <p className="font-semibold text-gray-900">{assigneeName}</p>
      <FaEye
        className="ml-auto text-blue-900 cursor-pointer"
        title="Detail View"
      />
      <span className="font-semibold text-blue-900 text-xs">Detail View</span>
    </div>
  </div>
);

const GoogleCard = ({ id, priority }) => {
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
      <p className="text-gray-600 text-xs mb-2">
        Lorem ipsum dolor sit amet consectetur...
      </p>
      <div className="text-[10px] text-gray-500 font-semibold mb-1">
        Ai Delay Score{" "}
        <span className="ml-1 font-bold text-[11px]">
          {(Math.random() * 0.6 + 0.4).toFixed(2)}
        </span>
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

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("inprogress");
  const [selectedView, setSelectedView] = useState("jira");

  const jiraData = Array(12)
    .fill(null)
    .map((_, i) => ({
      title: `Project ${i + 1}`,
      status: i % 3 === 0 ? "Complete" : i % 2 === 0 ? "Delay" : "On Track",
      statusColor:
        i % 3 === 0 ? "lime-500" : i % 2 === 0 ? "yellow-400" : "blue-800",
      phase: ["Alpha", "Beta", "Gamma"][i % 3],
      phaseColor: ["red", "pink", "sky"][i % 3],
      borderColor: ["red", "pink", "sky"][i % 3],
      ...common(),
    }));

  const googleData = [
    ...Array(8).fill({ status: "todo" }),
    ...Array(12).fill({ status: "inprogress" }),
    ...Array(4).fill({ status: "complete" }),
  ].map((item, i) => ({
    id: 300 + i,
    priority: ["High", "Medium", "Low"][i % 3],
    ...item,
  }));

  const filters = [
    { id: "todo", label: "To Do", color: "text-gray-700" },
    { id: "inprogress", label: "In Progress", color: "text-orange-500" },
    { id: "complete", label: "Complete", color: "text-green-500" },
  ];

  const getFilteredCards = () => {
    if (selectedView === "jira") {
      const map = {
        todo: ["Delay"],
        inprogress: ["On Track"],
        complete: ["Complete"],
      };
      return jiraData.filter((item) =>
        map[selectedFilter].includes(item.status)
      );
    } else {
      return googleData.filter((item) => item.status === selectedFilter);
    }
  };

  const getCounts = () => {
    if (selectedView === "jira") {
      const map = {
        todo: ["Delay"],
        inprogress: ["On Track"],
        complete: ["Complete"],
      };
      return {
        todo: jiraData.filter((d) => map.todo.includes(d.status)).length,
        inprogress: jiraData.filter((d) => map.inprogress.includes(d.status))
          .length,
        complete: jiraData.filter((d) => map.complete.includes(d.status))
          .length,
      };
    } else {
      return {
        todo: googleData.filter((d) => d.status === "todo").length,
        inprogress: googleData.filter((d) => d.status === "inprogress").length,
        complete: googleData.filter((d) => d.status === "complete").length,
      };
    }
  };

  const activeCounts = getCounts();
  const filteredCards = getFilteredCards();

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700">
          <option>Projects</option>
          <option>Insights</option>
        </select>

        {filters.map((f) => (
          <FilterTab
            key={f.id}
            {...f}
            count={activeCounts[f.id]}
            selectedFilter={selectedFilter}
            onChange={setSelectedFilter}
          />
        ))}

        <div className="ml-auto">
          <div className="relative inline-block">
            <select
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
              className="appearance-none bg-white border border-blue-300 text-[#002E5D] font-semibold text-sm rounded-full px-6 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 cursor-pointer transition-all"
            >
              <option value="jira">🌐 Google View</option>
              <option value="google">🚀 Jira View </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-sm">
              ▼
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          selectedView === "jira" ? "lg:grid-cols-3" : "lg:grid-cols-4"
        } gap-6`}
      >
        {filteredCards.map((card, index) =>
          selectedView === "jira" ? (
            <JiraCard key={index} {...card} />
          ) : (
            <GoogleCard key={card.id} {...card} />
          )
        )}
      </div>
    </div>
  );
};

function common() {
  return {
    startDate: "6/27/2024",
    endDate: "6/28/2025",
    userInitial: "J",
    userName: "Lisa Ray",
    userCode: "C-665",
    percent: "70.98",
    role: "QA Engineer",
    progress: Math.floor(Math.random() * 100),
    issue: "Budget cut",
    assigneeInitial: "J",
    assigneeName: "John Smith",
  };
}

export default Dashboard;
