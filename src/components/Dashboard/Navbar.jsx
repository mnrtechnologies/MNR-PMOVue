import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../slices/authSlice';
import { setUser } from '../../slices/profileSlice';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);

    const handleLogout = () => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white p-4 flex justify-between items-center shadow-sm z-10">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
                 <div className="relative hidden md:block">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Search className="w-5 h-5"/></div>
                    <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-64 transition" />
                </div>
                <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"><Bell /></button>
                {token ? (
                    <div className="relative">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center space-x-2 cursor-pointer p-1 rounded-lg hover:bg-gray-100">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold"><User className="w-5 h-5"/></div>
                            <span className="hidden sm:inline font-medium text-gray-700">{user?.name || 'User'}</span>
                            <ChevronDown />
                        </button>
                        {isMenuOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <div className="px-4 py-3 border-b">
                                        <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
                                        <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                                    </div>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a href="#" onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Log out</a>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">Login</button>
                )}
            </div>
        </header>
    );
};

export default Header;
