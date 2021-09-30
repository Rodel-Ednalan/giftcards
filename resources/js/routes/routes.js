import { lazy } from 'react';


export default [
  {
    path: 'user',
    component: lazy(() => import('../page/User')),
    exact: true,
  },
  {
    path: 'sent',
    component: lazy(() => import('../page/Sent')),
    exact: true,
  },
  {
    path: 'received',
    component: lazy(() => import('../page/Received')),
    exact: true,
  },
  {
    path: 'create',
    component: lazy(() => import('../page/Create')),
    exact: true,
  },
]
