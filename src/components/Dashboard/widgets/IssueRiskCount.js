import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

// --- Helper Component for Circular Progress Charts ---
// No changes needed in this helper component
const CircularProgress = ({ value, label, progressColor, bgColor, strokeDasharray }) => (
    <div className="flex flex-col items-center text-center">
        {/* Slightly reduced size for better fitting on small screens */}
        <div className="relative w-20 h-20"> 
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    className={bgColor}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                />
                <path
                    className={progressColor}
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeDasharray={strokeDasharray}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">{value}</span>
            </div>
        </div>
        <p className="text-xs text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
);

// --- Helper Component for Dependency Bars ---
// No changes needed in this helper component
const DependencyBar = ({ label, percentage }) => (
    <div className="mb-2">
        <p className="text-xs font-medium text-gray-700 mb-1">{label}</p>
        <div className="w-full bg-yellow-100 rounded-full h-2">
            <div
                className="bg-[#00254D] h-2 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);


// --- Main Component ---
const IssueRiskCount = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium">Issue / Risk Count</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Main grid to separate the two sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    
                    {/* Left Section: Circular Charts */}
                    {/* THIS IS THE UPDATED RESPONSIVE CONTAINER */}
                    <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
                        <CircularProgress
                            value={54}
                            label="<b>54</b> Issues"
                            progressColor="text-[#00254D]"
                            bgColor="text-gray-200"
                            strokeDasharray="80, 100"
                        />
                        <CircularProgress
                            value={5}
                            label="<b>5</b> Risk Per Project"
                            progressColor="text-red-500"
                            bgColor="text-yellow-100"
                            strokeDasharray="60, 100"
                        />
                    </div>

                    {/* Right Section: Dependencies */}
                    <div>
                        <h4 className="font-semibold text-sm mb-2">Dependencies</h4>
                        <DependencyBar label="Timing" percentage={70} />
                        <DependencyBar label="Data" percentage={50} />
                        <DependencyBar label="Other" percentage={65} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default IssueRiskCount;