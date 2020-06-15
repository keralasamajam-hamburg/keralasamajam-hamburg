import React from 'react';
import {
  HomeOutlined,
  CoffeeOutlined,
  ApartmentOutlined,
  TeamOutlined,
  MessageOutlined,
  BulbOutlined,
  CameraOutlined,
  CompassOutlined,
  SoundOutlined
} from '@ant-design/icons';
import NavLink from '../components/NavLink/NavLink';

export const NAV_ROUTES = [
  {
    links: [{
      path: <NavLink heading={'Home'} urlPath={'/'} />,
      icon: <HomeOutlined />,
      route: '/',
    }]
  },
  {
    links: [{
      path: <NavLink heading={'About'} urlPath={'/about'} />,
      icon: <BulbOutlined />,
      route: '/about',
    }]
  },
  {
    links: [{
      path: <NavLink heading={'Gallery'} urlPath={'/gallery'} />,
      icon: <CameraOutlined />,
      route: '/gallery',
    }]
  },
  // {
  //   links: [{
  //     path: <NavLink heading={'Blogs'} urlPath={'/blogs'} />,
  //     icon: <SolutionOutlined />,
  //     route: '/blogs',
  //   }]
  // },
  {
    submenuTitle: 'Explore',
    submenuIcon: <CompassOutlined />,
    links: [
      {
        path: <NavLink heading={'News'} urlPath={'/news'} />,
        icon: <SoundOutlined />,
        route: '/news',
      },
      {
        path: <NavLink heading={'Rental Apartments'} urlPath={'/rental-apartments'} />,
        icon: <ApartmentOutlined />,
        route: '/rental-apartments',
      },
      {
        path: <NavLink heading={'Restaurants'} urlPath={'/restaurants'} />,
        icon: <CoffeeOutlined />,
        route: '/restaurants',
      },
    ]
  },
  {
    links: [{
      path: <NavLink heading={'Team'} urlPath={'/team'} />,
      icon: <TeamOutlined />,
      route: '/team',
    }]
  },
  {
    links: [{
      path: <NavLink heading={'Contact'} urlPath={'/contact'} />,
      icon: <MessageOutlined />,
      route: '/contact',
    }]
  }
  // {
  //   links: [{
  //     path: <NavLink heading={'Register'} urlPath={'/register'} />,
  //     icon: <MessageOutlined />,
  //     route: '/register',
  //   }]
  // }
];
