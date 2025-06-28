import React, { useState } from 'react';
import Card from '../../ui/card';

const PredictionSlider = ({ label, value, onValueChange }) => (
    <div className="w-full">
        <label className="text-sm text-gray-600">{label}</label>
        <div className="flex items-center space-x-2">
            <input type="range" min="0" max="100" value={value} onChange={(e) => onValueChange(parseInt(e.target.value, 10))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-medium text-gray-800 w-8 text-right">{value}%</span>
        </div>
    </div>
);

const AIMLPredictionScore = () => {
    const [projectValue, setProjectValue] = useState(75);
    const [budgetValue, setBudgetValue] = useState(60);

    return (
        <Card title="AI/ML Prediction Score">
            <div className="space-y-6">
                <PredictionSlider label="Project Likelihood to Succeed" value={projectValue} onValueChange={setProjectValue}/>
                <PredictionSlider label="Budget Likelihood to Succeed" value={budgetValue} onValueChange={setBudgetValue}/>
                <div className="text-center pt-2">
                    <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                        Show Summary
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default AIMLPredictionScore;
