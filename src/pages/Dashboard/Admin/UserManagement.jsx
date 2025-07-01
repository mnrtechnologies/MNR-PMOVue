import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Florence Shaw",
    email: "florenceshaw@gmail.com",
    initials: "F",
    access: ["Admin", "Data Export", "Data Import"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
  {
    id: 2,
    name: "Ammele lawrence",
    email: "florenceshaw@gmail.com",
    initials: "A",
    access: ["Admin", "Data Export", "Data Import"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
  {
    id: 3,
    name: "Florence Shaw",
    email: "florenceshaw@gmail.com",
    initials: "J",
    access: ["Admin", "Data Export", "Data Import"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
  {
    id: 4,
    name: "Florence Shaw",
    email: "florenceshaw@gmail.com",
    initials: "P",
    access: ["Admin", "Data Export", "Data Import"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
  {
    id: 5,
    name: "Florence Shaw",
    email: "florenceshaw@gmail.com",
    initials: "U",
    access: ["Data Export"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
  {
    id: 6,
    name: "Florence Shaw",
    email: "florenceshaw@gmail.com",
    initials: "J",
    access: ["Data Import"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
  {
    id: 7,
    name: "Florence Shaw",
    email: "florenceshaw@gmail.com",
    initials: "J",
    access: ["Admin", "Data Export"],
    lastActive: "May 4, 2024",
    dateAdded: "May 4, 2024",
  },
];

const accessStyles = {
  Admin: "bg-green-100 text-green-600",
  "Data Export": "bg-blue-100 text-blue-600",
  "Data Import": "bg-purple-100 text-purple-600",
};

export default function UserManagement() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold text-blue-900">User Management</h2>
      <p className="text-md text-slate-500 mb-6">
        Manage your team members and their account permissions here.
      </p>

      <div className="flex items-center justify-between mb-3 ">
        <div className="font-semibold">
          {" "}
          All Users <span className="text-slate-500">44</span>
        </div>
        <div className="flex gap-3">
          <div className="relative w-75">
            <input
              type="text"
              placeholder="Search Here……"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm shadow-md"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          <button
            onClick={() => navigate("/dashboard/settings/user-management/add-user")}
            className="bg-[#00254D] text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      <div className="border rounded-md overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">User Name</th>
              <th className="p-3">Access</th>
              <th className="p-3">Last Active ↓</th>
              <th className="p-3">Date Added</th>
              <th className="p-3"> </th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) =>
                u.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <tr key={user.id} className="border-t text-md">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-medium text-sm">
                      {user.initials}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="p-3 text-sm">
                    {user.access.map((role) => (
                      <span
                        key={role}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${accessStyles[role]}`}
                      >
                        {role}
                      </span>
                    ))}
                  </td>
                  <td className="p-3 text-sm">{user.lastActive}</td>
                  <td className="p-3 text-sm">{user.dateAdded}</td>
                  <td className="p-3 flex gap-2">
                    <Pencil className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer" />
                    <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button className="w-8 h-8 rounded-full border bg-white text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4" />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-full border text-sm flex items-center justify-center ${
              page === 1
                ? "bg-slate-900 text-white"
                : "text-gray-700 bg-white hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-8 h-8 rounded-full border bg-white text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
