import React from 'react';
import {Card} from '../../ui/card';
import { tasksData } from '../../../data/mockdata';

const Tasks = () => (
    <Card title="Tasks">
        <div className="space-y-4">
            {tasksData.map(task => (
                <div key={task.name}>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{task.name}</span>
                        <span className="text-sm font-medium text-blue-700">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${task.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

export default Tasks;