import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  editUser,
  deleteUser,
} from "../../../services/oprations/authAPI";
import {
  UserPlus,
  Search,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const accessStyles = {
  Admin: "bg-green-100 text-green-600",
  "Data Export": "bg-blue-100 text-blue-600",
  "Data Import": "bg-purple-100 text-purple-600",
};

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const fetchedUsers = await dispatch(getAllUsers());
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    const name = prompt("Update name", user.name);
    const email = prompt("Update email", user.email);
    const role = prompt("Update role", user.role); // keep as string

    if (name && email && role) {
      dispatch(editUser(user._id, { name, email, role }, fetchUsers));
    }
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId, fetchUsers));
    }
  };

  return (
    <div className="px-4 sm:px-6 pt-4 pb-6">
      <h2 className="text-lg sm:text-xl font-bold text-blue-900">
        User Management
      </h2>
      <p className="text-sm sm:text-md text-slate-500 mb-6">
        Manage your team members and their account permissions here.
      </p>

      {/* Search and Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-3 sm:gap-0">
        <div className="font-semibold text-sm sm:text-base">
          All Users <span className="text-slate-500">{users.length}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search Here…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm shadow-sm"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          <button
            onClick={() =>
              navigate("/dashboard/settings/user-management/add-user")
            }
            className="bg-[#00254D] text-white px-4 py-2 rounded-md text-sm flex flex-row sm:flex-row items-center justify-center gap-3 sm:gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* --- ✅ Mobile Card View --- */}
      <div className="block md:hidden space-y-4 mt-4">
        {users
          .filter((u) => {
            const query = search.toLowerCase();
            return (
              u.name.toLowerCase().includes(query) ||
              u.role?.toLowerCase().includes(query) ||
              u.email.toLowerCase().includes(query)
            );
          })
          .map((user) => (
            <div
              key={user._id}
              className="border rounded-lg p-4 shadow-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-semibold text-sm">
                    {user.name[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="text-base font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Pencil
                    className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer"
                    onClick={() => handleEditUser(user)}
                  />
                  <Trash2
                    className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => handleDeleteUser(user._id)}
                  />
                </div>
              </div>
              <div className="text-sm">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    accessStyles[user.role] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {user.role}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                <p>
                  Last Active: {new Date(user.lastActive).toLocaleDateString()}
                </p>
                <p>
                  Date Added: {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* --- ✅ Desktop Table View --- */}
      <div className="hidden md:block border rounded-md overflow-x-auto">
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
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) => {
                const query = search.toLowerCase();
                return (
                  u.name.toLowerCase().includes(query) ||
                  u.role?.toLowerCase().includes(query) ||
                  u.email.toLowerCase().includes(query)
                );
              })
              .map((user) => (
                <tr key={user._id} className="border-t text-md">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-medium text-sm">
                      {user.name[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="p-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        accessStyles[user.role] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-3 text-sm">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-sm">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 flex gap-2">
                    <Pencil
                      className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer"
                      onClick={() => handleEditUser(user)}
                    />
                    <Trash2
                      className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => handleDeleteUser(user._id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center sm:justify-end mt-4 space-x-2">
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
