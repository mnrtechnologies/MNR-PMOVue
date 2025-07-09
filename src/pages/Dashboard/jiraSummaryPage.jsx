import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
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

const JiraSummaryPage = () => {
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
    <div className="p-4 md:p-6 ml-12 min-h-screen">

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
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
          <h4 className="text-lg font-semibold mb-4">Spend Analysis</h4>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-[200px] h-[200px]">
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
      <Card className="mt-6">
        <CardContent className="pt-6">
          <TaskTable tasks={projectData.tasks} />
        </CardContent>
      </Card>
    </div>
  );
};

export default JiraSummaryPage;
