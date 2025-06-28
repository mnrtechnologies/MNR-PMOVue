import React from 'react';
import {Card} from '../../ui/card';
import { vendorContractData } from '../../../data/mockdata';

const VendorContractOverview = () => (
    <Card title="Vendor Contract Overview">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {['Vendor', 'PO#', 'Start Date', 'End Date', 'Ceiling Value', 'Cost Type', 'Status'].map(h => 
                            <th key={h} scope="col" className="px-4 py-2">{h}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {vendorContractData.map((row, i) => (
                         <tr key={i} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.vendor}</td>
                            <td className="px-4 py-2">{row.po}</td>
                            <td className="px-4 py-2">{row.startDate}</td>
                            <td className="px-4 py-2">{row.endDate}</td>
                            <td className="px-4 py-2">{row.ceilingValue}</td>
                            <td className="px-4 py-2">{row.costType}</td>
                            <td className="px-4 py-2">
                               <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>{row.status}</span>
                            </td>
                         </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);

export default VendorContractOverview;