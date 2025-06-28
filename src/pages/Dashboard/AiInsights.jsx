import React from "react";

const FilterTab = ({ id, label, count, color, checked }) => (
  <div
    className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg py-2 px-4 cursor-pointer select-none"
  >
    <input
      type="radio"
      id={id}
      name="status"
      className="cursor-pointer"
      defaultChecked={checked}
    />
    <label htmlFor={id} className={`${color} text-sm font-semibold cursor-pointer select-none`}>
      {label}
    </label>
    <span className="ml-1 text-gray-700 font-semibold text-sm">{count}</span>
  </div>
);

const ProjectCard = ({ id, priority }) => {
  const priorityStyles = {
    High: "bg-red-200 text-red-600",
    Medium: "bg-yellow-300 text-yellow-700",
    Low: "bg-green-300 text-green-700",
  };

  return (
    <div
      className="bg-[#F9FAFB] rounded-lg p-4 shadow-sm max-w-[280px]"
      role="article"
      aria-label={`Project card with ${priority} priority`}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold select-none">
          <span aria-hidden="true" className="text-red-500">🦠</span>
          <span>PV-{id}</span>
        </div>
        <div className={`${priorityStyles[priority]} text-xs font-semibold rounded-md px-2 py-0.5 select-none`}>
          {priority}
        </div>
      </div>
      <h3 className="text-[#002E5D] font-bold text-sm mb-1 cursor-default select-text">Project Name</h3>
      <p className="text-gray-600 text-xs mb-2 cursor-default select-text">
        Lorem ipsum dolor sit amet consectetur...
      </p>
      <div className="text-[10px] text-gray-500 font-semibold mb-1 select-none">
        Ai Delay Score
        <span className="ml-1 font-bold text-[11px]">{(Math.random() * 0.6 + 0.4).toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-2 mb-2" aria-hidden="true">
        <div className="h-2 rounded-full bg-yellow-300 w-16"></div>
        <div className="h-2 rounded-full bg-gray-300 w-16"></div>
      </div>
      <a href="#" className="text-[#004C8C] text-xs font-semibold select-none hover:underline focus:underline">Detail view</a>
    </div>
  );
};

const ProjectDashboard = () => {
  const filters = [
    { id: "todo", label: "To Do", count: 4, color: "text-gray-700" },
    { id: "inprogress", label: "In Progress", count: 4, color: "text-orange-500", checked: true },
    { id: "complete", label: "Complete", count: 4, color: "text-green-500" },
  ];

  const cards = [...Array(12)].map((_, i) => {
    const priority = i % 3 === 0 ? "High" : i % 3 === 1 ? "Medium" : "Low";
    return { id: 100 + i, priority };
  });

  return (
    <div className="bg-white font-sans text-gray-700">
      <div className="max-w-[1200px] mx-auto p-6">
        {/* Top Filters and Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div>
            <select
              aria-label="Projects filter"
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Projects</option>
            </select>
          </div>
          {filters.map((props) => (
            <FilterTab key={props.id} {...props} />
          ))}
          <div className="ml-auto flex rounded-full bg-gray-200 overflow-hidden text-sm font-semibold select-none">
            <button
              className="bg-[#002E5D] text-white px-6 py-2 rounded-l-full focus:outline-none"
              aria-pressed="true"
            >
              Jira
            </button>
            <button
              className="text-[#002E5D] px-6 py-2 rounded-r-full focus:outline-none"
              aria-pressed="false"
            >
              Google
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {cards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>

        {/* Pagination */}
        <nav
          className="flex justify-end items-center gap-2 text-sm font-semibold select-none"
          aria-label="Pagination"
        >
          <button
            className="text-[#002E5D] hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Previous page"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`${
                num === 1 ? "bg-[#002E5D] text-white" : "text-[#002E5D] hover:bg-gray-200"
              } rounded-full w-8 h-8 flex items-center justify-center focus:outline-none`}
              aria-label={`Page ${num}`}
              aria-current={num === 1 ? "page" : undefined}
            >
              {num}
            </button>
          ))}
          <button
            className="text-[#002E5D] hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Next page"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProjectDashboard;
