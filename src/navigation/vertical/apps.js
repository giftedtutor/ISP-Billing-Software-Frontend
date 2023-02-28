import { Mail, DollarSign, Users, FileMinus, Settings, MessageSquare, CheckSquare, Check, Award, Box, Calendar, FileText, ArrowUpCircle, Archive, Circle, ShoppingCart, User, AlignLeft, ArrowDownCircle, DivideCircle, Package, Flag, Grid, Truck, List, BarChart2, UserPlus, Copy } from 'react-feather'

export default [
  {
    id: 'dashBoard',
    title: 'Dashboard',
    icon: <Grid size={12} />,
    navLink: '/ISPBS/apps/dashboard/view'
  },

  {
    id: 'customer',
    title: 'Customer',
    icon: <Users size={20} />,
    navLink: '/ISPBS/apps/customers/list'

  },
  
  {
    id: 'package',
    title: 'Package',
    icon: <Package size={20} />,
    navLink: '/ISPBS/apps/package/list'

  },
   
  {
    id: 'device',
    title: 'Device',
    icon: <Box size={20} />,
    navLink: '/ISPBS/apps/device/list'

  },
  {
    id: 'purchase',
    title: 'Purchase',
    icon: <FileText size={20} />,
    navLink: '/ISPBS/apps/purchase/list'

  },
  {
    id: 'sale',
    title: 'Sale',
    icon: <BarChart2 size={20} />,
    navLink: '/ISPBS/apps/sale/list'

  },
  {
    id: 'expense',
    title: 'Expense',
    icon: <DollarSign size={20} />,
    navLink: '/ISPBS/apps/expense/list'

  },
  {
    header: 'Reports Section'
  },
  {
    id: 'getExpensesReport',
    title: 'Expense Report',
    icon: <DollarSign size={20} />,
    navLink: '/ISPBS/apps/getExpensesReprot/list'
  },
  {
    id: 'getMonthlyExpensesReport',
    title: 'Monthly Expense Report',
    icon: <DollarSign size={20} />,
    navLink: '/ISPBS/apps/getMonthlyExpensesReport/list'
  }
]
