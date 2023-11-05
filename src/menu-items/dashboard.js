// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'User',
      title: 'User',
      type: 'item',
      url: '/dashboard/User',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'Trainer',
      title: 'Trainer',
      type: 'item',
      url: '/dashboard/Trainer',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'Excercise master',
      title: 'Excercise master',
      type: 'item',
      url: '/dashboard/Excercisemaster',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
