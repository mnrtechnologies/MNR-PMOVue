import React from 'react';
import {Card} from '../../ui/card';
import { programSummaryData }  from '../../../data/mockdata';

const ProgramSummary = () => (
    <Card title="Program & Portfolio Summary">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {['Program', 'PSM', 'Health', 'CAPEX', 'OPEX', 'Budget', 'Forecast', 'Variance', 'Status'].map(h =>
                            <th key={h} scope="col" className="px-4 py-2">{h}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {programSummaryData.map((row, i) => (
                        <tr key={i} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.program}</td>
                            <td className="px-4 py-2">{row.psm}</td>
                            <td className="px-4 py-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    row.health === 'On Track' ? 'bg-green-100 text-green-800' :
                                    row.health === 'Minor-Risk' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                }`}>{row.health}</span>
                            </td>
                            <td className="px-4 py-2">${row.capex}M</td>
                            <td className="px-4 py-2">${row.opex}M</td>
                            <td className="px-4 py-2 font-bold">${row.budget}M</td>
                            <td className="px-4 py-2">${row.forecast}M</td>
                            <td className={`px-4 py-2 ${row.variance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                ${row.variance}M
                            </td>
                            <td className="px-4 py-2">{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
</Card>
);

export default ProgramSummary;