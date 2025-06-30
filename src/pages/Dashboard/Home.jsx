import React from 'react';
import ProgramSummary from '../../components/Dashboard/widgets/ProgramSummary';
import AIMLPredictionScore from '../../components/Dashboard/widgets/AIMLPredictionScore';
import SchedulePerformance from '../../components/Dashboard/widgets/SchedulePerformance';
import BudgetHealth from '../../components/Dashboard/widgets/BudgetHealth';
import IssueRiskCount from '../../components/Dashboard/widgets/IssueRiskCount';

import ChangeRiskTracking from '../../components/Dashboard/widgets/ChangeRiskTracking';
import VendorContractOverview from '../../components/Dashboard/widgets/VendorContractOverview';
import SpendAndAccruals from '../../components/Dashboard/widgets/SpendAndAccruals';
import FilterWidget from '../../components/Dashboard/widgets/FilterWidget';
const Home = () => {
    return (
        <main className="max-w-6xl mx-auto  sm:px-6  lg:px-1  ">
             <FilterWidget />
          
            {/* Main grid with a 2/3 and 1/3 column split on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* --- Left Column (Wider) --- */}
                <div className="lg:col-span-2 space-y-6">
                    <ProgramSummary />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SchedulePerformance />
                        <BudgetHealth />
                    </div>
                    <VendorContractOverview />
                    <ChangeRiskTracking />
                </div>
                
                {/* --- Right Column (Narrower) --- */}
                <div className="col-span-1 space-y-6">
                    <AIMLPredictionScore />
                    <IssueRiskCount />
                     <SpendAndAccruals />
                </div>

            </div>
            {/* The separate bottom row has been removed */}
        </main>
    );
};

export default Home;