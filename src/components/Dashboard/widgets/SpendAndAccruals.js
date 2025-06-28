import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { spendAndAccrualsData } from '../../../data/mockdata';
import {Card} from '../../ui/card';

const SpendAndAccruals = () => (
    <Card title="Spend and Accruals">
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendAndAccrualsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip wrapperClassName="rounded-lg shadow-lg" contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }} />
                    <Legend verticalAlign="top" align="right" height={36} iconSize={10} />
                    <Bar dataKey="Spend" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Accruals" fill="#818cf8" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </Card>
);

export default SpendAndAccruals;