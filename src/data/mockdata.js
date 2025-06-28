export const programSummaryData = [
  {
    program: 'Alpha',
    portfolio: 'Growth',
    project: 'Dntc A',
    statuses: [
      { status: 'On Track', milestoneStatus: 'Completed' }
    ]
  },
  {
    program: 'Gamma',
    portfolio: 'Enterprise',
    project: 'BAC&B',
    statuses: [
      { status: 'At Risk', milestoneStatus: 'Delayed' },
      { status: 'Delayed', milestoneStatus: 'Delayed' }
    ]
  },
  {
    program: 'Apollo',
    portfolio: 'Innovation',
    project: 'Project Phoenix',
    statuses: [
        { status: 'On Track', milestoneStatus: 'In Progress' }
    ]
  },
  {
    program: 'Mercury',
    portfolio: 'Enterprise',
    project: 'Data Warehouse Upgrade',
    statuses: [
        { status: 'At Risk', milestoneStatus: 'Delayed' },
        { status: 'Delayed', milestoneStatus: 'Delayed' },
        { status: 'Delayed', milestoneStatus: 'Delayed' }
    ]
  },
  {
    program: 'Beta',
    portfolio: 'Growth',
    project: 'Mobile App V2',
    statuses: [
        { status: 'Completed', milestoneStatus: 'Completed' }
    ]
  }
];

export const schedulePerformanceData = [
  { name: 'Jan', darkBlue: 60, lightBlue: 30 },
  { name: 'Feb', darkBlue: 75, lightBlue: 20 },
  { name: 'Mar', darkBlue: 40, lightBlue: 45 },
  { name: 'Apr', darkBlue: 80, lightBlue: 15 },
  { name: 'May', darkBlue: 55, lightBlue: 35 },
  { name: 'Jun', darkBlue: 70, lightBlue: 25 },
  { name: 'Jul', darkBlue: 62, lightBlue: 28 },
];


export const budgetHealthData = [
  { name: 'Jan', darkBlue: 50, lightBlue: 40 },
  { name: 'Feb', darkBlue: 65, lightBlue: 25 },
  { name: 'Mar', darkBlue: 30, lightBlue: 55 },
  { name: 'Apr', darkBlue: 70, lightBlue: 20 },
  { name: 'May', darkBlue: 45, lightBlue: 40 },
  { name: 'Jun', darkBlue: 80, lightBlue: 10 },
  { name: 'Jul', darkBlue: 58, lightBlue: 32 },
];


export const spendAndAccrualsData = [
  { name: 'Jan', Spend: 4000, Accruals: 2400 },
  { name: 'Feb', Spend: 3000, Accruals: 1398 },
  { name: 'Mar', Spend: 2000, Accruals: 9800 },
  { name: 'Apr', Spend: 2780, Accruals: 3908 },
  { name: 'May', Spend: 1890, Accruals: 4800 },
  { name: 'Jun', Spend: 2390, Accruals: 3800 }
];



export const vendorContractData = [
  { 
    vendor: 'Innovate LLC', 
    contractId: 'PO-12345', 
    startDate: '01/15/2024', 
    endDate: '01/14/2025', 
    ceilingValue: 250000, 
    costType: 'Fixed Bid', 
    variance: -5000,
    status: 'Active',
    invoiceStatus: 'Paid',
    projectManager: 'Alice Grant' 
  },
  { 
    vendor: 'Synergy Inc.', 
    contractId: 'PO-67890', 
    startDate: '03/15/2024', 
    endDate: '03/14/2025', 
    ceilingValue: 500000, 
    costType: 'T&M', 
    variance: 12500,
    status: 'Active',
    invoiceStatus: 'Pending',
    projectManager: 'Ben Vance' 
  },
  { 
    vendor: 'Solutions Corp', 
    contractId: 'PO-24680', 
    startDate: '02/01/2024', 
    endDate: '01/31/2025', 
    ceilingValue: 175000, 
    costType: 'Fixed Bid',
    variance: 0, 
    status: 'On-Hold',
    invoiceStatus: 'Pending',
    projectManager: 'Carla Hayes' 
  },
  { 
    vendor: 'Quantum Dynamics', 
    contractId: 'PO-99876', 
    startDate: '05/20/2023', 
    endDate: '05/19/2024', 
    ceilingValue: 1000000, 
    costType: 'T&M', 
    variance: -50000,
    status: 'Expired',
    invoiceStatus: 'Paid',
    projectManager: 'Ben Vance' 
  },
  { 
    vendor: 'Apex Solutions', 
    contractId: 'PO-55432', 
    startDate: '06/01/2024', 
    endDate: '05/31/2025', 
    ceilingValue: 300000, 
    costType: 'Retainer',
    variance: 0,
    status: 'Active',
    invoiceStatus: 'Overdue',
    projectManager: 'Alice Grant' 
  },
  { 
    vendor: 'Digital Frontier', 
    contractId: 'PO-11223', 
    startDate: '01/01/2023', 
    endDate: '12/31/2023', 
    ceilingValue: 450000, 
    costType: 'Fixed Bid', 
    variance: 2500,
    status: 'Completed',
    invoiceStatus: 'Paid',
    projectManager: 'Diana Cain' 
  }
];

export const changeRiskTrackingData = [
  {
    id: 'CR-001',
    type: 'Issue',
    title: 'Budget cuts Identified',
    category: 'Financial Forecasting',
    severity: 'High',
    status: 'Open',
    date: '2025-06-15',
  },
  {
    id: 'CR-002',
    type: 'Risk',
    title: 'Vendor Delay',
    category: 'Program and Portfolio Status Reporting',
    severity: 'Medium',
    status: 'In Progress',
    date: '2025-06-18',
  },
  {
    id: 'CR-003',
    type: 'Risk',
    title: 'Resource Constraint',
    category: 'Risk Heatmap',
    severity: 'High',
    status: 'Open',
    date: '2025-06-20',
  },
  {
    id: 'CR-004',
    type: 'Issue',
    title: 'Overtime Required',
    category: 'Benefit Realization Tracker',
    severity: 'Low',
    status: 'Mitigated',
    date: '2025-06-22',
  },
  {
    id: 'CR-005',
    type: 'Change Request',
    title: 'Scope Expansion for API Module',
    category: 'Project Alpha',
    severity: 'Medium',
    status: 'Approved',
    date: '2025-06-25',
  },
   {
    id: 'CR-006',
    type: 'Risk',
    title: 'Data Migration Failure',
    category: 'Project Phoenix',
    severity: 'High',
    status: 'Open',
    date: '2025-06-28',
  },
];

export const aiPredictionData = [
  {
    project: 'Project A',
    predictedDelay: 8,
    confidence: 'High',
    risk: 'Resource Allocation'
  },
  {
    project: 'Project B',
    predictedDelay: 35,
    confidence: 'Medium',
    risk: 'Vendor Delivery'
  },
  {
    project: 'Project C',
    predictedDelay: 60,
    confidence: 'High',
    risk: 'Budget Limitation'
  }
];