import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    FaHome,
    FaBrain,
    FaCog,
    FaKey,
    FaUserCog,
} from "react-icons/fa";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Sidebar = () => {
    const { pathname } = useLocation();
    const isOnSettingsRoute = pathname.startsWith("/dashboard/settings");

    // State for the settings dropdown
    const [isSettingsOpen, setIsSettingsOpen] = useState(isOnSettingsRoute);
    // State to control the sidebar visibility on mobile
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Effect to open the settings dropdown if on a settings route
    useEffect(() => {
        if (isOnSettingsRoute) {
            setIsSettingsOpen(true);
        }
    }, [pathname, isOnSettingsRoute]);

    // Effect to close the mobile sidebar when the route changes
    useEffect(() => {
        setIsMobileNavOpen(false);
    }, [pathname]);


    const mainLinks = [
        {
            to: "/dashboard",
            label: "Dashboard",
            icon: <FaHome className="w-5 h-5" />,
            exact: true,
        },
        {
            to: "/dashboard/insights",
            label: "AI Insights",
            icon: <FaBrain className="w-5 h-5" />,
        },
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
        <>
            {/* --- Mobile Menu Button --- */}
            <button
                // THIS IS THE MODIFIED LINE:
                className= {`lg:hidden fixed top-18 left-4 z-50 p-2 [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.6))] ${isMobileNavOpen ? 'hidden' : 'block'}`}
                onClick={() => setIsMobileNavOpen(true)}
                aria-label="Open navigation"
            >
                <Menu size={28} /> {/* Slightly increased size for better touch interaction */}
            </button>

            {/* --- Sidebar --- */}
            <div
                className={`h-full w-56 bg-[#00254D] text-white flex-col gap-4 px-4 py-8 rounded-r-3xl text-base 
                           fixed lg:static lg:translate-x-0 z-40
                           transition-transform duration-300 ease-in-out
                           ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close button for mobile view */}
                <button
                    className="lg:hidden absolute top-1 right-4 p-2"
                    onClick={() => setIsMobileNavOpen(false)}
                    aria-label="Close navigation"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col gap-4 mt-10 lg:mt-0">
                    {/* Main Navigation */}
                    {mainLinks.map(({ to, label, icon, exact }) => (
                        <NavLink
                            key={label}
                            to={to}
                            end={exact}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 transition rounded-full ${isActive
                                    ? "border border-white"
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
                                        `flex items-center gap-3 px-3 py-2 transition ${isActive
                                            ? "rounded-full border border-white"
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
            </div>

            {/* --- Overlay for Mobile --- */}
            {isMobileNavOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMobileNavOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;