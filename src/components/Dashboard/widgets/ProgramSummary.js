import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'; // Assuming shadcn Card structure
import { programSummaryData } from '../../../data/mockdata';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

const ProgramSummary = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-lg">Program & Portfolio Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-0"> {/* Remove padding from card content to allow table to span full width */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {/* Header with reduced padding and smaller font */}
                            <TableHead className="px-3 py-2 text-xs">Program (Pi)</TableHead>
                            <TableHead className="px-3 py-2 text-xs">Portfolio</TableHead>
                            <TableHead className="px-3 py-2 text-xs">Project</TableHead>
                            <TableHead className="px-3 py-2 text-xs">Status</TableHead>
                            <TableHead className="px-3 py-2 text-xs">Milestone Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {programSummaryData.map((group, groupIndex) => (
                            <React.Fragment key={groupIndex}>
                                {group.statuses?.map((statusItem, statusIndex) => (
                                    <TableRow key={statusIndex} className="text-xs"> {/* Set base font-size for the row */}
                                        {statusIndex === 0 ? (
                                            <>
                                                <TableCell className="px-3 py-1.5 font-medium">{group.program}</TableCell>
                                                <TableCell className="px-3 py-1.5">{group.portfolio}</TableCell>
                                                <TableCell className="px-3 py-1.5">{group.project}</TableCell>
                                            </>
                                        ) : (
                                            <TableCell colSpan={3} className="px-3 py-1.5"></TableCell>
                                        )}

                                        {/* Status column */}
                                        <TableCell className="px-3 py-1.5">
                                            <div className="flex items-center">
                                                <span className={`h-2 w-2 rounded-full mr-2 ${
                                                    statusItem.status === 'On Track' ? 'bg-green-500' :
                                                    statusItem.status === 'At Risk' ? 'bg-yellow-500' :
                                                    statusItem.status === 'Completed' ? 'bg-blue-500' : 'bg-red-500'
                                                }`}></span>
                                                {statusItem.status}
                                            </div>
                                        </TableCell>

                                        {/* Milestone Status column */}
                                        <TableCell className="px-3 py-1.5">
                                            <span className="underline">
                                                {statusItem.milestoneStatus}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
);

export default ProgramSummary;