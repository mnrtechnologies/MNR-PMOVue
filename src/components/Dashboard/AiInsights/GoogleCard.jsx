import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoogleCard = ({
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
  <div className="bg-[#F9FAFB] rounded-xl shadow-sm p-5 border border-transparent hover:border-gray-200">
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
    />
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
      <Link to="/dashboard/insights/google-details" title="Detail View">
        <FaEye className="ml-auto text-blue-900 cursor-pointer" />
      </Link>
      <span className="font-semibold text-blue-900 text-xs">Detail View</span>
    </div>
  </div>
);

export default GoogleCard;
