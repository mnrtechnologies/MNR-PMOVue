import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaBrain,
  FaTasks,
  FaCog,
  FaKey,
  FaUserCog,
} from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isOnSettingsRoute = pathname.startsWith("/dashboard/settings");
  const [isSettingsOpen, setIsSettingsOpen] = useState(isOnSettingsRoute);

  useEffect(() => {
    if (isOnSettingsRoute) setIsSettingsOpen(true);
  }, [pathname]);

  const mainLinks = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <FaHome className="w-5 h-5" />, // Increased size
      exact: true,
    },
    {
      to: "/dashboard/insights",
      label: "AI Insights",
      icon: <FaBrain className="w-5 h-5" />,
    },
    // {
    //   to: "/dashboard/projects",
    //   label: "Projects",
    //   icon: <FaTasks className="w-5 h-5" />,
    // },
  ];

  const settingsLinks = [
    {
      to: "/dashboard/settings/profile",
      label: "Profile Management",
      icon: <FaUserCog className="w-5 h-5" />,
    },
    {
      to: "/dashboard/settings/password",
      label: "Password & Authentication",
      icon: <FaKey className="w-5 h-5" />,
    },
  ];

  return (
    <div className="h-screen w-64 bg-[#00254D] text-white flex flex-col gap-4 px-4 py-8 rounded-r-3xl text-base"> {/* changed from text-sm to text-base */}
      {/* Main Navigation */}
      {mainLinks.map(({ to, label, icon, exact }) => (
        <NavLink
          key={label}
          to={to}
          end={exact}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 transition rounded-full ${
              isActive
                ? "border border-white "
                : "text-white hover:bg-[#003366]"
            }`
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}

      {/* Settings Toggle */}
      <button
        onClick={() => setIsSettingsOpen((prev) => !prev)}
        className="flex items-center gap-3 px-4 py-2 font-semibold text-white focus:outline-none"
      >
        <FaCog className="w-5 h-5" />
        <span>Settings</span>
        {isSettingsOpen ? (
          <ChevronUp size={18} className="ml-auto" />
        ) : (
          <ChevronDown size={18} className="ml-auto" />
        )}
      </button>

      {/* Settings Submenu */}
      {isSettingsOpen && (
        <div className="ml-8 flex flex-col gap-2">
          {settingsLinks.map(({ to, label, icon }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 transition ${
                  isActive
                    ? "rounded-full border border-white "
                    : "text-white hover:bg-[#003366]"
                }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
