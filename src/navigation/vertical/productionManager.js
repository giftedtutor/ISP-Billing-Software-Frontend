import { Mail, MessageSquare, CheckSquare, Check, Award, Box, Calendar, FileText, ArrowUpCircle, Archive, Circle, ShoppingCart, User, AlignLeft, ArrowDownCircle, DivideCircle} from 'react-feather'

export default [
  // {
  //   header: 'User Managment'
  // },
  // {
  //   id: 'suppliers',
  //   title: 'Supplier',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/user/list'
  //     },
  //     {
  //       id: 'Add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/user/add'
  //     }
  //     // {
  //     //   id: 'Edit',
  //     //   title: 'Edit',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/ISPBS/apps/user/edit'
  //     // }
  //   ]
  // },
  // {
  //   id: 'supplierLedger',
  //   title: 'Supplier Ledger',
  //   icon: <CheckSquare size={20} />,
  //   children: [
  //     // {
  //     //   id: 'list',
  //     //   title: 'List',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/ISPBS/apps/supplierLedger/list'
  //     // },
  //     {
  //       id: 'add',
  //       title: 'Get',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/supplierLedger/add'
  //     }
  //   ]
  // },
  // {
  //   id: 'clients',
  //   title: 'Clients',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/client/list'
  //     },
  //     {
  //       id: 'Add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/client/add'
  //     }
      
  //     // {
  //     //   id: 'Edit',
  //     //   title: 'Edit',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/ISPBS/apps/client/edit'
  //     // }
  //   ]
  // },
  // {
  //   id: 'clientLedger',
  //   title: 'Client Ledger',
  //   icon: <CheckSquare size={20} />,
  //   children: [
  //     // {
  //     //   id: 'list',
  //     //   title: 'List',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/ISPBS/apps/clientLedger/list'
  //     // },
  //     {
  //       id: 'add',
  //       title: 'Get',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/clientLedger/add'
  //     }
  //   ]
  // },
  // {
  //   id: 'employees',
  //   title: 'Employee',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/employee/list'
  //     },
  //     {
  //       id: 'Add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/employee/add'
  //     }
  //     // {
  //     //   id: 'Edit',
  //     //   title: 'Edit',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/ISPBS/apps/employee/edit'
  //     // }
  //   ]
  // },


  // {
  //   header: 'Inventory Managment'
  // },

  // {
  //   id: 'stocks',
  //   title: 'Item', //inventory old name
  //   icon: <Box size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/stock/list'
  //     },
  //     {
  //       id: 'add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/stock/add'
  //     }
  
  //   ]
  // },
  
  // {
  //   id: 'orders',
  //   title: 'Purchase Order',
  //   icon: <MessageSquare size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/order/list'
  //     },
  //     {
  //       id: 'add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/order/add'
  //     }
  //   ]
  // },
  {
    header: 'Production Managment'
  },
  {
    id: 'Porders',
    title: 'Production Order',
    icon: <Box size={20} />,
    children: [
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/productionOrderUPVC/add'
      },
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/productionOrderUPVC/list'
      }
     
    ]
  },
  {
    header: 'Invoice Section'
  },
  {
    id: 'DC',
    title: 'Delivery Challan',
    icon: <AlignLeft size={20} />,
    children: [ 
      {
        id: 'DC',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/DC/add'
      },
      {
        id: 'DCList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/DC/list'
      }
      
    ]
  },
  {
    id: 'invoice2',
    title: 'Invoices',
    icon: <AlignLeft size={20} />,
    children: [
     
      // {
      //   id: 'add',
      //   title: 'Add',
      //   icon: <Circle size={12} />,
      //   navLink: '/ISPBS/apps/invoicess/add'
      // },
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/invoice/listing'
      }
    ]
  },
  {
    id: 'SalarySlip2',
    title: 'Salary Slip',
    icon: <AlignLeft size={20} />,
    children: [
     
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/addSalarySlip/add'
      },
      {
        id: 'list',
        title: 'Get',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/genrateSalarySlip/add'
      }
    ]
  },
  {
    id: 'OTSalarySlip2',
    title: 'Over Time Salary Slip',
    icon: <AlignLeft size={20} />,
    children: [
     
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/addOverTimeSalarySlip/add'
      },
      {
        id: 'list',
        title: 'Get',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/advanceAndReimSalary/add'
      }
    ]
  },
  {
    id: 'OTSalarySlipList',
    title: 'Salary Slips List',
    icon: <AlignLeft size={20} />,
    children: [
     
      // {
      //   id: 'add',
      //   title: 'Add',
      //   icon: <Circle size={12} />,
      //   navLink: '/ISPBS/apps/addOverTimeSalarySlip/add'
      // },
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/salarySlipList/add'
      }
    ]
  },
  // {
  //   id: 'GeneralInvoice',
  //   title: 'General Invoice',
  //   icon: <AlignLeft size={20} />,
  //   children: [
     
  //     {
  //       id: 'add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/generalInvoice/add'
  //     },
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/generalInvoice/list'
  //     }
  //   ]
  // },
  {
    id: 'Quotation',
    title: 'Quotations',
    icon: <AlignLeft size={20} />,
    children: [
     
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/quotation/add'
      },
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/quotation/list'
      }
    ]
  },
  {
    header: 'Allot Section'
  },
  {
    id: 'alot1',
    title: 'To Project',
    icon: <AlignLeft size={20} />,
    children: [ 
      {
        id: 'stockAlot',
        title: 'Alot',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/stock/alot'
      },
      {
        id: 'stockAlotList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/stock/listAlot'
      }
      
    ]
  },
  {
    id: 'allot3',
    title: 'Vehicle To Project',
    icon: <AlignLeft size={20} />,
    children: [
      {
        id: 'ProejdfAllot',
        title: 'Allot Vehicles',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/stock/alotToVecileToProject'
      },
      {
        id: 'proejctAlotlist',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/alotToProjectListing/list'
      },
      {
        id: 'proejctAlotlistRecord',
        title: 'Alloted Vehicles Record',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/getAlotedVehiclesRecord/add'
      }
    ]
  },
  {
    id: 'allot6',
    title: 'Machine To Project',
    icon: <AlignLeft size={20} />,
    children: [
      {
        id: 'ProejdfAllot',
        title: 'Allot Machines',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/stock/alotMachineToProject'
      },
      {
        id: 'proejctAlotlist',
        title: 'list',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/alotMachineToProjectListing/list'
      },
      {
        id: 'MachinestAlotlistRecord',
        title: 'Allotted Machines Record',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/getAlotedMachinesRecord/add'
      }
    ]
  },
  // form made for calculations 
  {
    header: 'Upvc Calculations'
  },
  {
    id: 'UpvcOperations',
    title: 'Upvc Operations',
    icon:<DivideCircle size={20}/>,
    children: [      
       {
        id: 'Quotation',
        title: 'Input Section',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/upvcCalculaions/qutation'
        
      },
     
      {
        id: 'ViewProject',
        title: 'View Quotations',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/upvcCalculaions/ViewQutation'
      },
      // {
      //   id: 'Input',
      //   title: 'Input',
      //   icon: <Circle size={12} />,
      //   navLink: '/ISPBS/apps/upvcCalculaions/Input'
      // }
      {
        id: 'Coasting',
        title: 'Costing',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/upvcCalculaions/coasting'
      },
      {
        id: 'QuotationI',
        title: 'Quotation I',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/upvcCalculaions/qutationI'
      },
      {
        id: 'QuotationII',
        title: 'Quotation II',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/upvcCalculaions/qutationII'
      },
    
      {
        id: 'Boq',
        title: 'Boq',
        icon: <Circle size={12} />,
        navLink: '/ISPBS/apps/upvcCalculaions/boq'
      }
      // {
      //   id: 'QutationII',
      //   title: 'QutationII',
      //   icon: <Circle size={12} />,
      //   navLink: '/ISPBS/apps/upvcCalculaions/qutationII'
      // },
    ]
  }
  
  // {
  //   header: 'Vehicle Managment'
  // },
  // {
  //   id: 'vehicles',
  //   title: 'Vehicle',
  //   icon: <User size={20} />,
  //   children: [      
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/vehicle/list'
  //     },
  //     {
  //       id: 'Add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/vehicle/add'
  //     }
  //     // {
  //     //   id: 'Edit',
  //     //   title: 'Edit',
  //     //   icon: <Circle size={12} />,
  //     //   navLink: '/ISPBS/apps/vehicle/edit'
  //     // }
  //   ]
  // },
  // {
  //   id: 'machines',
  //   title: 'Machine',
  //   icon: <User size={20} />,
  //   children: [      
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/machine/list'
  //     },
  //     {
  //       id: 'Add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/machine/add'
  //     }
      // {
      //   id: 'Edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/ISPBS/apps/vehicle/edit'
      // }
  //   ]
  // },
  // {
  //   id: 'vehicleMaintenance',
  //   title: 'Vehicle Maintenance',
  //   icon: <ArrowUpCircle size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/vehicleMaintenance/list'
  //     },
  //     {
  //       id: 'add',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/ISPBS/apps/vehicleMaintenance/add'
  //     } 
  //   ]
  // },
//   {
//     header: 'Project Managment'
//   },
//   {
//     id: 'project',
//     title: 'Project',
//     icon: <User size={20} />,
//     children: [
//       {
//         id: 'list',
//         title: 'List',
//         icon: <Circle size={12} />,
//         navLink: '/ISPBS/apps/project/listing'
//       }
      
//       // {
//       //   id: 'Edit',
//       //   title: 'Edit',
//       //   icon: <Circle size={12} />,
//       //   navLink: '/ISPBS/apps/employee/edit'
//       // }
//     ]
//   },
 
 
//   {
//     header: 'Report Managment'
//   },
//   {
//     id: 'supplierPayable',
//     title: 'Supplier Payable Report',
//     icon: <CheckSquare size={20} />,
//     children: [
//       {
//         id: 'list',
//         title: 'List',
//         icon: <Circle size={12} />,
//         navLink: '/ISPBS/apps/supplierPayable/list'
//       }
     
//     ]
//   },
//   {
//     id: 'headOfficeInventory',
//     title: 'Head Office Inventory',
//     icon: <CheckSquare size={20} />,
//     children: [
//       {
//         id: 'list',
//         title: 'List',
//         icon: <Circle size={12} />,
//         navLink: '/ISPBS/apps/headOfficeInventory/list'
//       }
//       // {
//       //   id: 'add',
//       //   title: 'Add',
//       //   icon: <Circle size={12} />,
//       //   navLink: '/ISPBS/apps/headOfficeInventory/add'
//       // }
//     ]
//   },
//   {
//     id: 'expenseAccountt',
//     title: 'Expense Account', //old name product
//     icon: <CheckSquare size={20} />,
//     children: [

//   {
//     id: 'createAccount',
//     title: 'Create Expenses Account',
//     icon: <Circle size={20} />,
//     children: [
//       // {
//       //   id: 'list',
//       //   title: 'List',
//       //   icon: <Circle size={12} />,
//       //   navLink: '/ISPBS/apps/createExpenseAccount/list'
//       // },
//       {
//         id: 'add',
//         title: 'Add',
//         icon: <Circle size={12} />,
//         navLink: '/ISPBS/apps/createExpenseAccount/add'
//       }
//     ]
//   },
//   {
//     id: 'addAccount',
//     title: 'Add Expense',
//     icon: <Circle size={20} />,
//     children: [
     
//       {
//         id: 'add',
//         title: 'Add',
//         icon: <Circle size={12} />,
//         navLink: '/ISPBS/apps/addExpense/add'
//       },
//       {
//         id: 'list',
//         title: 'List',
//         icon: <Circle size={12} />,
//         navLink: '/ISPBS/apps/addExpense/list'
//       }
//     ]
//   }
// ]
    
// },
// {
//   id: 'dailyIncomeReport',
//   title: 'Daily Income Report',
//   icon: <CheckSquare size={20} />,
//   children: [
//     {
//       id: 'add',
//       title: 'Get',
//       icon: <Circle size={12} />,
//       navLink: '/ISPBS/apps/dailyIncomeReport/add'
//     }
//   ]
// }

]
