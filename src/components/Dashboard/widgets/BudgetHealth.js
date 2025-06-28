import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { budgetHealthData } from '../../../data/mockdata';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const BudgetHealth = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium">Budget Health</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={budgetHealthData} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        
                        {/* Y-axis is hidden for a cleaner look */}
                        <YAxis tick={false} axisLine={false} />
                        
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem' }}
                            labelStyle={{ fontWeight: 'bold' }}
                        />
                        
                        {/* Two Bar components are stacked, using your specified dark blue color */}
                        <Bar dataKey="darkBlue" stackId="a" fill="#00254D" /> 
                        <Bar dataKey="lightBlue" stackId="a" fill="#52a9ff" />

                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default BudgetHealth;