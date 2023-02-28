import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/ISPBS/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/ISPBS/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/ISPBS/apps/email'
    }
  },
  {
    path: '/ISPBS/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/ISPBS/apps/email'
    }
  },
  {
    path: '/ISPBS/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/ISPBS/apps/email'
    }
  },
  {
    path: '/ISPBS/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/ISPBS/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/ISPBS/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/ISPBS/apps/todo'
    }
  },
  {
    path: '/ISPBS/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/ISPBS/apps/todo'
    }
  },
  {
    path: '/ISPBS/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/ISPBS/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/ISPBS/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/ISPBS/apps/invoice/preview'
    }
  },
  {
    path: '/ISPBS/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/ISPBS/apps/invoice/preview/4987' />
  },
  {
    path: '/ISPBS/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/ISPBS/apps/invoice/edit'
    }
  },
  {
    path: '/ISPBS/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/ISPBS/apps/invoice/edit/4987' />
  },
  {
    path: '/ISPBS/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/ISPBS/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/ISPBS/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/ISPBS/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/ISPBS/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/ISPBS/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/ISPBS/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/ISPBS/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/ISPBS/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/ISPBS/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/ISPBS/apps/customers/list',
    component: lazy(() => import('../../views/apps/customers/list'))
  },
  {
    path: '/ISPBS/apps/package/list',
    component: lazy(() => import('../../views/apps/package/list'))
  },
  {
    path: '/ISPBS/apps/device/list',
    component: lazy(() => import('../../views/apps/device/list'))
  },
  {
    path: '/ISPBS/apps/expense/list',
    component: lazy(() => import('../../views/apps/expense/list'))
  },
  {
    path: '/ISPBS/apps/purchase/list',
    component: lazy(() => import('../../views/apps/purchase/list'))
  },
  {
    path: '/ISPBS/apps/sale/list',
    component: lazy(() => import('../../views/apps/sale/list'))
  },
  {
    path: '/ISPBS/apps/getExpensesReprot/list',
    component: lazy(() => import('../../views/apps/getExpensesReprot/list'))
  },
  {
    path: '/ISPBS/apps/getMonthlyExpensesReport/list',
    component: lazy(() => import('../../views/apps/getMonthlyExpensesReport/list'))
  },
  {
    path: '/ISPBS/apps/user/edit',
    component: lazy(() => import('../../views/apps/user/edit'))
  },
  {
    path: '/ISPBS/apps/user/view',
    component: lazy(() => import('../../views/apps/user/view'))
  },
  {
    path: '/ISPBS/apps/user/viewDetail',
    component: lazy(() => import('../../views/apps/user/viewDetail'))
  },
  {
    path: '/ISPBS/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/ISPBS/apps/user/edit/1' />
  },
  {
    path: '/ISPBS/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/ISPBS/apps/user/edit'
    }
  },
  {
    path: '/ISPBS/apps/user/view',
    exact: true,
    component: () => <Redirect to='/ISPBS/apps/user/view/1' />
  },
  {
    path: '/ISPBS/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/ISPBS/apps/user/view'
    }
  },
  {
    path: '/ISPBS',
    component: lazy(() => import('../../views/apps/dashboard'))
  }
]

export default AppRoutes
