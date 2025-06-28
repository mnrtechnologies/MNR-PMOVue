import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import Sidebar from "../../components/Dashboard/Sidebar"
import ProgramSummary from '../../components/Dashboard/widgets/ProgramSummary';
import AIMLPredictionScore from '../../components/Dashboard/widgets/AIMLPredictionScore';

const Dashboard = () => {

    return (
        <main className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="col-span-1 xl:col-span-2 space-y-6">
                    <ProgramSummary />
                    {/* Add more widgets like SpendAndAccruals here */}
                </div>
                
                {/* Column 2 */}
                <div className="col-span-1 space-y-6">
                    <AIMLPredictionScore />
                    {/* Add more widgets like IssueRiskCount and Tasks here */}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
