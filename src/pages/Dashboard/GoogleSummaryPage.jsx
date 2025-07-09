import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
import { FaEye } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DoughnutChart from "../../components/Dashboard/uiComponents/DoughnutChart";
import TaskTable from "../../components/Dashboard/uiComponents/TaskTable";
import { Card, CardContent } from "../../components/ui/card";
import {
  fetchProjectBySlug,
  selectJiraProject,
  selectJiraStatus,
  selectJiraError,
} from "../../slices/JiraSlice";

const GoogleSummaryPage = () => {
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

  const { projectSlug } = useParams();
  const dispatch = useDispatch();

  const projectData = useSelector(selectJiraProject);
  const status = useSelector(selectJiraStatus);
  const error = useSelector(selectJiraError);

  useEffect(() => {
    if (projectSlug) {
      dispatch(fetchProjectBySlug(projectSlug));
    }
  }, [projectSlug, dispatch]);

  if (status === "loading" || status === "idle") {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading project data...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
        <Link
          to="/dashboard"
          className="text-blue-600 hover:underline mt-4 inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!projectData) {
    return <div className="p-6 text-center">No project data available.</div>;
  }

  const spendData = [
    { name: "Planned Cost", value: 42, color: "#10b981" },
    { name: "Forecasted Cost", value: 30, color: "#3b82f6" },
    { name: "Actual Cost", value: 20, color: "#facc15" },
    { name: "Forecast Deviation", value: 10, color: "#ef4444" },
  ];

  return (
    <div className="text-[#0B2545] min-h-screen p-6  max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {projectData.name || "Project Summary"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bar Chart */}
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md w-full">
          <h4 className="text-lg font-semibold mb-4">Current Status</h4>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectData.monthlyFinancials}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="planned" stackId="a" fill="#60a5fa" />
                <Bar dataKey="forecast" stackId="a" fill="#3b82f6" />
                <Bar dataKey="actual" stackId="a" fill="#1e40af" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Doughnut Chart + Spend List */}
        <div className="bg-[#F9FBFA] p-4 rounded-xl shadow-lg border border-[#E6E9E8] w-full">
          <h4 className="text-lg font-semibold mb-4">Spend Analysis</h4>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-[300px] h-[200px]">
              <DoughnutChart
                data={spendData.map(({ name, value }) => ({ name, value }))}
              />
            </div>
            <ul className="text-sm space-y-2">
              {spendData.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Task Table */}
      {/* Table remains unchanged */}
      <div className="overflow-x-auto shadow-lg rounded-xl border mt-6 border-[#E6E9E8]">
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
    </div>
  );
};

export default GoogleSummaryPage;
