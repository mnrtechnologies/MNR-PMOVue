import React from "react";
import { FaEye } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const STATUS_COLORS = {
  "In Progress": "#6DBE4A",
  Done: "#4B55D2",
};

const JiraSummary = () => {
  const tasks = [
    {
      id: "PV-100",
      status: "In Progress",
      priority: "High",
      assignee: "Cheryl28",
      dueDate: "2024-11-03",
      lastInteraction: "2024-11-03",
    },
    {
      id: "PV-101",
      status: "Done",
      priority: "Medium",
      assignee: "Heryl28",
      dueDate: "2024-11-03",
      lastInteraction: "2024-11-03",
    },
    {
      id: "PV-102",
      status: "In Progress",
      priority: "Low",
      assignee: "Cheryl28",
      dueDate: "2024-11-03",
      lastInteraction: "2024-11-03",
    },
    {
      id: "PV-103",
      status: "Done",
      priority: "High",
      assignee: "Cheryl28",
      dueDate: "2024-11-03",
      lastInteraction: "2024-11-03",
    },
    {
      id: "PV-104",
      status: "In Progress",
      priority: "High",
      assignee: "Cheryl28",
      dueDate: "2024-11-03",
      lastInteraction: "2024-11-03",
    },
    {
      id: "PV-105",
      status: "Done",
      priority: "High",
      assignee: "Cheryl28",
      dueDate: "2024-11-03",
      lastInteraction: "2024-11-03",
    },
  ];

  const statusData = [
    {
      name: "In Progress",
      value: tasks.filter((t) => t.status === "In Progress").length,
    },
    { name: "Done", value: tasks.filter((t) => t.status === "Done").length },
  ];

  const hoursAnalysisData = [
    { name: "Original Estimated Hours", hours: 100 },
    { name: "Time Spent Hours", hours: 60 },
    { name: "Remaining Estimated Hours", hours: 80 },
  ];

  const renderCustomTick = ({ x, y, payload }) => {
    const words = payload.value.split(" ");
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={10} // ⬅️ Moves the text *down* to create margin from bars
          textAnchor="middle"
          fill="#0B2545"
          fontSize={14}
        >
          {words.map((word, index) => (
            <tspan x={0} dy={index === 0 ? 0 : 14} key={index}>
              {word}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-[#6DBE4A]/30 text-[#3E6B2E]";
      case "Done":
        return "bg-[#93C5FD]/70 text-[#2563EB]";
      default:
        return "";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-[#FCA5A5]/70 text-[#B91C1C]";
      case "Medium":
        return "bg-[#FEF3C7]/70 text-[#B45309]";
      case "Low":
        return "bg-[#86EFAC]/70 text-[#15803D]";
      default:
        return "";
    }
  };
  return (
    <main className="text-[#0B2545] min-h-screen p-6  max-w-7xl mx-auto">
      <h3 className="font-bold text-xl mb-4">Project A</h3>

      {/* Top Two Cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-8">
        {/* Pie Chart - Current Status */}
        <section className="bg-[#F0F3F2] rounded-xl p-6 flex-1 shadow-md min-w-[280px]">
          <h4 className="font-semibold mb-4 text-xl">Current Status</h4>

          <div className="flex justify-between gap-4 h-[260px]">
            {/* In Progress Pie */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "In Progress", value: statusData[0].value },
                        {
                          name: "Remaining",
                          value: tasks.length - statusData[0].value,
                        },
                      ]}
                      dataKey="value"
                      innerRadius="40%"
                      outerRadius="60%"
                      paddingAngle={3}
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                    >
                      <Cell fill="#6DBE4A" />
                      <Cell fill="#E6E6E6" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="font-semibold text-lg mt-2">
                In Progress -{" "}
                <span className="text-2xl font-extrabold">
                  {Math.round((statusData[0].value / tasks.length) * 100)}%
                </span>
              </p>
            </div>

            {/* Done Pie */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Done", value: statusData[1].value },
                        {
                          name: "Remaining",
                          value: tasks.length - statusData[1].value,
                        },
                      ]}
                      dataKey="value"
                      innerRadius="40%"
                      outerRadius="60%"
                      paddingAngle={3}
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                    >
                      <Cell fill="#4B55D2" />
                      <Cell fill="#E6E6E6" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="font-semibold text-lg mt-2">
                Done -{" "}
                <span className="text-2xl font-extrabold">
                  {Math.round((statusData[1].value / tasks.length) * 100)}%
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Bar Chart*/}
        <section className="bg-[#F0F3F2] rounded-xl p-6 flex-1 shadow-md min-w-[280px]">
          <h4 className="font-semibold mb-4 text-xl">Hours Spend Analysis</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={hoursAnalysisData} margin={{ bottom: 30 }}>
              <defs>
                <linearGradient id="gradDarkBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
                <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
                <linearGradient id="gradDarkYellow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="name"
                tick={renderCustomTick}
                interval={0}
                height={50}
              />
              <YAxis />
              <Tooltip />

              <Bar dataKey="hours" radius={[5, 5, 0, 0]}>
                <Cell fill="url(#gradDarkBlue)" />
                <Cell fill="url(#gradBlue)" />
                <Cell fill="url(#gradDarkYellow)" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>

      {/* Table remains unchanged */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-[#E6E9E8]">
        <table className="w-full text-left text-lg border-collapse min-w-[900px]">
          <thead className="bg-[#F0F3F2] text-[#0B2545] font-bold text-base sticky top-0 z-10">
            <tr>
              {[
                "Task ID",
                "Status",
                "Priority",
                "Assignee",
                "Due Date",
                "Last Interaction",
                "AI Summary",
                "Action",
              ].map((col) => (
                <th
                  key={col}
                  className="py-4 px-6 border border-[#E6E9E8] whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#0B2545] font-medium text-[15px]">
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                className={`h-[72px] ${
                  index % 2 === 0 ? "bg-[#F9FBFA]" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 border border-[#E6E9E8] text-gray-500">
                  {task.id}
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8]">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold text-sm inline-block ${getStatusStyle(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8]">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold text-sm inline-block ${getPriorityStyle(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8] text-gray-600">
                  {task.assignee}
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8]">
                  {task.dueDate}
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8]">
                  {task.lastInteraction}
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8] text-center">
                  <FaEye className="mx-auto text-[#4B55D2] hover:scale-110 transition-transform duration-200 cursor-pointer" />
                </td>
                <td className="py-4 px-6 border border-[#E6E9E8] text-[#0B2545] font-semibold">
                  Detail View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default JiraSummary;
