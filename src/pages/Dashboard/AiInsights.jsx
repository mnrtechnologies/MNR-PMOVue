import React, { useState, useEffect } from "react";
import FilterTab from "../../components/Dashboard/AiInsights/FilterTab";
import JiraCard from "../../components/Dashboard/AiInsights/JiraCard";
import GoogleCard from "../../components/Dashboard/AiInsights/GoogleCard";
import { common } from "../../utils/common";
import { useDispatch } from "react-redux";
import { getAllJiraIssues } from "../../services/oprations/jiraAPI";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [jiraData, setJiraData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("inprogress");
  const [selectedView, setSelectedView] = useState("jira");

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const issues = await dispatch(getAllJiraIssues());
        setJiraData(issues);
        console.log("jiraData:", issues);
      } catch (error) {
        console.error("Failed to fetch Jira issues:", error);
      }
    };

    fetchIssues();
  }, [dispatch]);

  if (!jiraData || Object.keys(jiraData).length === 0) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const googleData = Array(12)
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

  // const jiraData = [
  //   ...Array(8).fill({ status: "todo" }),
  //   ...Array(12).fill({ status: "inprogress" }),
  //   ...Array(4).fill({ status: "complete" }),
  // ].map((item, i) => ({
  //   id: 300 + i,
  //   priority: ["High", "Medium", "Low"][i % 3],
  //   ...item,
  // }));

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
      return googleData.filter((item) =>
        map[selectedFilter].includes(item.status)
      );
    } else {
      return jiraData.filter((item) => item.status === selectedFilter);
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
        todo: googleData.filter((d) => map.todo.includes(d.status)).length,
        inprogress: googleData.filter((d) => map.inprogress.includes(d.status))
          .length,
        complete: googleData.filter((d) => map.complete.includes(d.status))
          .length,
      };
    } else {
      return {
        todo: jiraData.filter((d) => d.status === "To Do").length,
        inprogress: jiraData.filter((d) => d.status === "In Progress").length,
        complete: jiraData.filter((d) => d.status === "Done").length,
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
        {/* {filteredCards.map((card, index) =>
          selectedView === "jira" ? (
            <GoogleCard key={index} {...card} />
          ) : (
            <JiraCard key={card.id} {...card} />
         
          )
        )} */}
        {selectedView === "google"
          ? jiraData.map(({ key: issueKey, ...rest }) => (
              <JiraCard key={rest._id} issueKey={issueKey} {...rest} />
            ))
          : filteredCards.map((card, index) => (
              <GoogleCard key={index} {...card} />
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
