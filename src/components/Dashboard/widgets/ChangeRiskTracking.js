import React from 'react';
import {Card} from '../../ui/card';
import  {changeRiskTrackingData} from '../../../data/mockdata';

const ChangeRiskTracking = () => (
    <Card title="Change & Risk Tracking">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {['Type', 'Status', '#', 'Impact'].map(h => <th key={h} scope="col" className="px-4 py-2">{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {changeRiskTrackingData.map((row, i) => (
                        <tr key={i} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.type}</td>
                            <td className="px-4 py-2">{row.status}</td>
                            <td className="px-4 py-2">{row.count}</td>
                            <td className="px-4 py-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    row.impact === 'High' ? 'bg-red-100 text-red-800' :
                                    row.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                    row.impact === 'Low' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>{row.impact}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);

export default ChangeRiskTracking;