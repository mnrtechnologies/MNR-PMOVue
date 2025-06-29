import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../slices/filtersSlice'; // Adjust the import path as needed

const FilterWidget = () => {
    // Get the dispatch function from Redux
    const dispatch = useDispatch();
    
    // Select the entire filters object from the Redux store state
    const filters = useSelector((state) => state.filters);

    // This single handler can manage all dropdown changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        // Dispatch the setFilter action with the filter's name and new value
        dispatch(setFilter({ filterName: name, value }));
    };

    // Placeholder options for demonstration
    const programOptions = ['Program Alpha', 'Program Beta', 'Portfolio Gamma'];
    const pmOptions = ['Alex Green', 'Samantha Blue', 'John White'];
    const vendorOptions = ['Vendor A', 'Vendor B', 'Vendor C'];
    const dashboardOptions = ['Financials', 'Resources', 'Timeline'];
    const severityOptions = ['Critical', 'High', 'Medium', 'Low'];

    return (
        <div className="flex flex-wrap items-center gap-4 mb-6 ">
            {/* The 'name' attribute of each select MUST match the key in your Redux state */}
            <select
                name="program"
                value={filters.program}
                onChange={handleFilterChange}
                className="p-2 border bg-gray-200 text-gray-800 rounded-md shadow-sm w-full md:w-auto focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>Program / Portfolio</option>
                {programOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>

            <select
                name="projectManager"
                value={filters.projectManager}
                onChange={handleFilterChange}
                className="p-2 border bg-gray-200 text-gray-800 rounded-md shadow-sm w-full md:w-auto focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>Project Manager</option>
                {pmOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>

            <select
                name="vendor"
                value={filters.vendor}
                onChange={handleFilterChange}
                className="p-2 border bg-gray-200 text-gray-800 rounded-md shadow-sm w-full md:w-auto focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>Vendor</option>
                {vendorOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>

            <select
                name="impactedDashboard"
                value={filters.impactedDashboard}
                onChange={handleFilterChange}
                className="p-2 border bg-gray-200 text-gray-800 rounded-md shadow-sm w-full md:w-auto focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>Imapacted Dashboard</option>
                {dashboardOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>

            <select
                name="riskSeverity"
                value={filters.riskSeverity}
                onChange={handleFilterChange}
                className="p-2 border bg-gray-200 text-gray-800 rounded-md shadow-sm w-full md:w-auto focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>Risk / Issue Severity</option>
                {severityOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default FilterWidget;