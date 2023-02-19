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
    title: 'Customers',
    icon: <Users size={20} />,
    navLink: '/ISPBS/apps/customers/list'

  },
  
  {
    id: 'package',
    title: 'Packages',
    icon: <Package size={20} />,
    navLink: '/ISPBS/apps/package/list'

  }
]
