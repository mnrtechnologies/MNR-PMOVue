import React from 'react';
import ProgramSummary from '../../components/Dashboard/widgets/ProgramSummary';
import AIMLPredictionScore from '../../components/Dashboard/widgets/AIMLPredictionScore';
import SchedulePerformance from '../../components/Dashboard/widgets/SchedulePerformance';
import BudgetHealth from '../../components/Dashboard/widgets/BudgetHealth';
import IssueRiskCount from '../../components/Dashboard/widgets/IssueRiskCount';
import Tasks from '../../components/Dashboard/widgets/Tasks';
import ChangeRiskTracking from '../../components/Dashboard/widgets/ChangeRiskTracking';
import VendorContractOverview from '../../components/Dashboard/widgets/VendorContractOverview';
import SpendAndAccruals from '../../components/Dashboard/widgets/SpendAndAccruals';

const Home = () => {
    return (
        <main className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left Column (takes up 2/3 of the space on large screens) */}
                <div className="col-span-1 xl:col-span-2 space-y-6">
                    <ProgramSummary />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <SchedulePerformance />
                         <BudgetHealth />
                    </div>
                    <VendorContractOverview />
                </div>
                
                {/* Right Column (takes up 1/3 of the space on large screens) */}
                <div className="col-span-1 space-y-6">
                    <AIMLPredictionScore />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
                        <IssueRiskCount />
                        <Tasks />
                    </div>
                    <ChangeRiskTracking />
                </div>
            </div>

            {/* Bottom Row (full width) */}
            <div className="mt-6">
                 <SpendAndAccruals />
            </div>
        </main>
    );
};

export default Home;