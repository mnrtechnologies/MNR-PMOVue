import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { vendorContractData } from '../../../data/mockdata';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

// Helper function to format currency
const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

// Helper function to get status badge styles
const getStatusStyles = (status) => {
    switch (status) {
        case 'Active': return 'bg-green-100 text-green-800';
        case 'On-Hold': return 'bg-yellow-100 text-yellow-800';
        case 'Completed': return 'bg-blue-100 text-blue-800';
        case 'Expired': return 'bg-gray-100 text-gray-800';
        case 'Paid': return 'bg-green-100 text-green-800';
        case 'Pending': return 'bg-yellow-100 text-yellow-800';
        case 'Overdue': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const VendorContractOverview = () => (
    <Card>
        <CardHeader>
            <CardTitle>Vendor Contract Overview</CardTitle>
        </CardHeader>
        <CardContent>
            {/* The overflow container is a fallback for very narrow screens */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {/* Headers are abbreviated and have reduced padding/font size */}
                            <TableHead className="px-2 py-2 text-xs">Vendor</TableHead>
                            <TableHead className="px-2 py-2 text-xs">ID</TableHead>
                            <TableHead className="px-2 py-2 text-xs">Start</TableHead>
                            <TableHead className="px-2 py-2 text-xs">End</TableHead>
                            <TableHead className="px-2 py-2 text-xs text-right">Value</TableHead>
                            <TableHead className="px-2 py-2 text-xs text-right">Variance</TableHead>
                            <TableHead className="px-2 py-2 text-xs">Status</TableHead>
                            <TableHead className="px-2 py-2 text-xs">Invoice</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vendorContractData.map((contract) => (
                            <TableRow key={contract.contractId}>
                                {/* Table cells have reduced padding and smaller font size */}
                                <TableCell className="px-2 py-1.5 text-xs font-medium">{contract.vendor}</TableCell>
                                <TableCell className="px-2 py-1.5 text-xs">{contract.contractId}</TableCell>
                                <TableCell className="px-2 py-1.5 text-xs">{contract.startDate}</TableCell>
                                <TableCell className="px-2 py-1.5 text-xs">{contract.endDate}</TableCell>
                                <TableCell className="px-2 py-1.5 text-xs text-right">{formatCurrency(contract.ceilingValue)}</TableCell>
                                <TableCell className={`px-2 py-1.5 text-xs text-right ${contract.variance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                    {formatCurrency(contract.variance)}
                                </TableCell>
                                <TableCell className="px-2 py-1.5 text-xs">
                                    {/* Badges are also more compact */}
                                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${getStatusStyles(contract.status)}`}>
                                        {contract.status}
                                    </span>
                                </TableCell>
                                <TableCell className="px-2 py-1.5 text-xs">
                                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${getStatusStyles(contract.invoiceStatus)}`}>
                                        {contract.invoiceStatus}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
);

export default VendorContractOverview;