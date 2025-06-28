import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { schedulePerformanceData } from '../../../data/mockdata';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const SchedulePerformance = () => {
    return (
        <Card>
            <CardHeader>
                {/* The title is now in the header */}
                <CardTitle className="text-base font-medium">Schedule Performance</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={schedulePerformanceData} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        
                        {/* Y-axis is now hidden for a cleaner look */}
                        <YAxis tick={false} axisLine={false} />
                        
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem' }}
                            labelStyle={{ fontWeight: 'bold' }}
                        />
                        
                        {/* Two Bar components are stacked to create the light/dark blue effect */}
                        <Bar dataKey="darkBlue" stackId="a" fill="#1e3a8a" /> 
                        <Bar dataKey="lightBlue" stackId="a" fill="#60a5fa" />

                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default SchedulePerformance;