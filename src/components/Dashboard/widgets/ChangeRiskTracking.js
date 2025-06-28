import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { changeRiskTrackingData } from '../../../data/mockdata';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
// Import icons from lucide-react
import { TriangleAlert, ShieldAlert, GitPullRequestDraft } from 'lucide-react';

// Helper function to get styles for severity badges
const getSeverityStyles = (severity) => {
    switch (severity) {
        case 'High': return 'bg-red-100 text-red-800';
        case 'Medium': return 'bg-yellow-100 text-yellow-800';
        case 'Low': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

// Helper component to render the correct colorful icon for the item type
const TypeIcon = ({ type }) => {
    const iconProps = { className: "h-4 w-4" }; // Base classes for the icon
    switch (type) {
        case 'Risk': 
            return <TriangleAlert {...iconProps} className={`${iconProps.className} text-red-500`} />;
        case 'Issue': 
            return <ShieldAlert {...iconProps} className={`${iconProps.className} text-yellow-600`} />;
        case 'Change Request': 
            return <GitPullRequestDraft {...iconProps} className={`${iconProps.className} text-blue-500`} />;
        default: 
            return null;
    }
};

// Main Component
const ChangeRiskTracking = () => (
    <Card>
        <CardHeader>
            <CardTitle>Change & Risk Tracking</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {/* Compact headers */}
                            <TableHead className="px-2 py-2">Type</TableHead>
                            <TableHead className="px-2 py-2">Title</TableHead>
                            <TableHead className="px-2 py-2">Severity</TableHead>
                            <TableHead className="px-2 py-2">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {changeRiskTrackingData.map((item) => (
                            <TableRow key={item.id} className="text-xs">
                                {/* Cell with the colorful icon and text */}
                                <TableCell className="px-2 py-1.5 font-medium">
                                    <div className="flex items-center gap-2">
                                        <TypeIcon type={item.type} />
                                        <span>{item.type}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-2 py-1.5">{item.title}</TableCell>
                                <TableCell className="px-2 py-1.5">
                                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${getSeverityStyles(item.severity)}`}>
                                        {item.severity}
                                    </span>
                                </TableCell>
                                <TableCell className="px-2 py-1.5">{item.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
);

export default ChangeRiskTracking;