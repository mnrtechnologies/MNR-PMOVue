window.mockData = {
    programSummaryData: [
        { program: 'Titan', psm: 'A. Grant', health: 'On Track', capex: 15.2, opex: 8.5, budget: 23.7, forecast: 23.7, variance: 0, status: 'Active' },
        { program: 'Apollo', psm: 'B. Vance', health: 'On Track', capex: 12.0, opex: 6.0, budget: 18.0, forecast: 18.0, variance: 0, status: 'Active' },
        { program: 'Mercury', psm: 'C. Hayes', health: 'Minor-Risk', capex: 8.0, opex: 4.5, budget: 12.5, forecast: 13.0, variance: -0.5, status: 'Active' },
        { program: 'Gemini', psm: 'D. Cain', health: 'Major-Risk', capex: 20.0, opex: 10.0, budget: 30.0, forecast: 32.0, variance: -2.0, status: 'Pending' },
        { program: 'Skylab', psm: 'E. Shaw', health: 'On Track', capex: 5.0, opex: 2.5, budget: 7.5, forecast: 7.5, variance: 0, status: 'Completed' },
    ],
    schedulePerformanceData: [ { name: 'Project A', value: 80 }, { name: 'Project B', value: 60 }, { name: 'Project C', value: 95 }, { name: 'Project D', value: 40 } ],
    budgetHealthData: [ { name: 'Project A', value: 90 }, { name: 'Project B', value: 75 }, { name: 'Project C', value: 85 }, { name: 'Project D', value: 60 } ],
    spendAndAccrualsData: [ { name: 'Jan', Spend: 4000, Accruals: 2400 }, { name: 'Feb', Spend: 3000, Accruals: 1398 }, { name: 'Mar', Spend: 2000, Accruals: 9800 }, { name: 'Apr', Spend: 2780, Accruals: 3908 }, { name: 'May', Spend: 1890, Accruals: 4800 }, { name: 'Jun', Spend: 2390, Accruals: 3800 } ],
    vendorContractData: [ { vendor: 'Innovate LLC', po: 'PO-12345', startDate: '01/01/2024', endDate: '12/31/2024', ceilingValue: '$250,000', costType: 'Fixed Bid', status: 'Active' }, { vendor: 'Synergy Inc.', po: 'PO-67890', startDate: '03/15/2024', endDate: '03/14/2025', ceilingValue: '$500,000', costType: 'T&M', status: 'Active' }, { vendor: 'Solutions Corp', po: 'PO-24680', startDate: '02/01/2024', endDate: '01/31/2025', ceilingValue: '$175,000', costType: 'Fixed Bid', status: 'On-Hold' } ],
    changeRiskTrackingData: [ { type: 'Change Request', status: 'Approved', count: 5, impact: 'Low' }, { type: 'Change Request', status: 'Pending', count: 2, impact: 'Medium' }, { type: 'Risk', status: 'Open', count: 8, impact: 'High' }, { type: 'Risk', status: 'Mitigated', count: 12, impact: 'N/A' } ],
    tasksData: [ { name: 'Requirement Gathering', progress: 100 }, { name: 'Design & Prototyping', progress: 80 }, { name: 'Development & Testing', progress: 60 }, { name: 'Deployment', progress: 25 } ]
};