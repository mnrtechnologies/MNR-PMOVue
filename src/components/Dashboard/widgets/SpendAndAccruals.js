import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { spendAndAccrualsData } from '../../../data/mockdata';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

// Helper function to format large numbers into a compact form (e.g., 12000 -> $12k)
const formatValue = (value) => {
    if (value >= 1000) {
        return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
};

const SpendAndAccruals = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium">Spend and Accruals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={spendAndAccrualsData}
                            margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#888888" />
                            
                            {/* The Y-axis is now visible again to show the pricing */}
                            <YAxis 
                                tickFormatter={formatValue} 
                                tick={{ fontSize: 12 }} 
                                stroke="#888888" 
                            />
                            
                            <Tooltip
                                wrapperClassName="rounded-lg shadow-lg"
                                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
                                formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)}
                            />
                            
                            <Bar dataKey="Spend" stackId="a" fill="#00254D" radius={[4, 4, 0, 0]} barSize={20} />
                            <Bar dataKey="Accruals" stackId="a" fill="#52a9ff" radius={[4, 4, 0, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default SpendAndAccruals;