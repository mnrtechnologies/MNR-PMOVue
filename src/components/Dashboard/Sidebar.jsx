import React from 'react';
import { Home, Briefcase, FileText, CheckSquare, BarChart2, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'Dashboard' },
        { icon: Briefcase, label: 'Program' },
        { icon: FileText, label: 'Projects' },
        { icon: CheckSquare, label: 'Tasks' },
        { icon: BarChart2, label: 'Reports' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <aside className="bg-gray-900 text-white w-64 min-h-screen p-4 flex-col hidden lg:flex">
            <div className="text-2xl font-bold mb-10 text-white">PortfolioVue</div>
            <nav className="flex-grow">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className={`mb-2 rounded-lg transition-colors ${index === 0 ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>
                            <a href="#" className="flex items-center p-3">
                                <item.icon className="w-6 h-6 mr-3" />
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                 <a href="#" className="flex items-center p-3 hover:bg-gray-800 rounded-lg">
                    <HelpCircle className="w-6 h-6 mr-3" />
                    <span>Help & Support</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;