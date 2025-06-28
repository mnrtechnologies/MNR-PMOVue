import React from 'react';
import {Card} from '../../ui/card';

const IssueRiskCount = () => (
    <Card title="Issue/Risk Count">
        <div className="flex flex-col sm:flex-row items-center justify-around h-full text-center space-y-4 sm:space-y-0">
            <div>
                <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-gray-200"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-blue-500"
                            stroke="currentColor" strokeWidth="3" strokeDasharray="54, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-800">54</span>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Total Issues</p>
            </div>
            <div>
                <p className="text-4xl font-bold text-gray-800">5</p>
                <p className="text-sm text-gray-500 mt-1">Issues Per Project</p>
            </div>
        </div>
    </Card>
);

export default IssueRiskCount;
