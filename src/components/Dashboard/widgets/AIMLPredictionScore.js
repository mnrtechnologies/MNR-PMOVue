import React, { useState } from 'react';
// Import useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/Button';
import { Slider } from '../../ui/slider';
import { aiPredictionData } from '../../../data/mockdata';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/drop-down';


// --- Reusable & Interactive Sub-component for each Project Card ---
const ProjectPredictionCard = ({ projectInfo, dataSource }) => {
    const [delay, setDelay] = useState(projectInfo.predictedDelay);
    const navigate = useNavigate();

    const handleShowSummary = () => {
        const projectSlug = projectInfo.project.toLowerCase().replace(/ /g, '-');

        if (dataSource === 'Jira') {
            navigate(`/dashboard/insights/jira-summary/${projectSlug}`);
        } else {
            navigate(`/dashboard/insights/google-summary/${projectSlug}`);
        }
    };

    return (
        <div className={`p-4 border rounded-xl shadow-sm bg-white hover:bg-blue-100/50 transition-colors duration-200`}>
            <h4 className="font-bold text-gray-800 mb-4">{projectInfo.project}</h4>

            <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                    <label className="text-gray-600 w-32 shrink-0">Predicted Delay%</label>
                    <Slider
                        value={[delay]}
                        onValueChange={(value) => setDelay(value[0])}
                        max={100}
                        step={1}
                    />
                    <span className="font-semibold text-gray-800 w-8 text-right">{delay}%</span>
                </div>
                <div className="flex justify-between items-center">
                    <label className="text-gray-600">Confidence:</label>
                    <span className="font-semibold text-gray-800">{projectInfo.confidence}</span>
                </div>
                <div className="flex justify-between items-center">
                    <label className="text-gray-600">Risk:</label>
                    <span className="font-semibold text-gray-800">{projectInfo.risk}</span>
                </div>
            </div>

            <div className="text-center mt-5">
                <Button 
                    onClick={handleShowSummary}
                    className="bg-[#00254D] text-white hover:bg-[#00254D]/90 h-9 px-6 rounded-full"
                >
                    Show Summary
                </Button>
            </div>
        </div>
    );
};



// --- Main Enhanced Component ---
const AIMLPredictionScore = () => {
    const [dataSource, setDataSource] = useState('Jira');

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>AI Delay Prediction Score</CardTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                {dataSource}
                                <ChevronDown className="h-4 w-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onSelect={() => setDataSource('Google Sheet')}>
                                Google Sheet
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setDataSource('Jira')}>
                                Jira
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {aiPredictionData.map((data, index) => (
<ProjectPredictionCard key={index} projectInfo={data} dataSource={dataSource} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default AIMLPredictionScore;