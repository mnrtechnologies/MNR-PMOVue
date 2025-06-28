import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import  {budgetHealthData} from "../../../data/mockdata";
import {Card} from '../../ui/card';

const BudgetHealth = () => {
    return (
        <Card title="Budget Health">
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={budgetHealthData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }}/>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem' }}
                        labelStyle={{ fontWeight: 'bold' }}
                    />
                    <Bar dataKey="value" name="Health">
                        {budgetHealthData.map((entry, index) => {
                            const color = entry.value > 80 ? '#22c55e' : entry.value > 50 ? '#f97316' : '#ef4444';
                            return <Cell key={`cell-${index}`} fill={color} />;
                        })}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default BudgetHealth;
