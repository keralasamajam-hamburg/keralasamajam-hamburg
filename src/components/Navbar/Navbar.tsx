import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ksh from '../../assets/images/ksh.png';
import { NAV_ROUTES } from '../../data/routes';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const currentLocation = useLocation();

  const showDrawer = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };
  const { SubMenu } = Menu;

  const menuLinks = NAV_ROUTES.map((element) => {
    return element.submenuTitle === undefined ? (
      <Menu.Item key={element.links[0].route} icon={element.links[0].icon}>
        {element.links[0].path}
      </Menu.Item>
    ) : (
        <SubMenu icon={element.submenuIcon} title={element.submenuTitle} key={element.submenuTitle}>
          {element.links.map((navbarItem) => {
            return (
              <Menu.Item key={navbarItem.route} icon={navbarItem.icon}>
                {navbarItem.path}
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
  });

  return (
    <div className={'navbar'}>
      <Menu
        mode="horizontal"
        overflowedIndicator={<MenuOutlined onClick={showDrawer} />}
        selectedKeys={[currentLocation.pathname]}>
        {menuLinks}
      </Menu>

      <Drawer
        title={<img src={ksh} style={{ width: '90px' }} alt="" />}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
        width={'280px'}
        style={{ textAlign: 'center', backdropFilter: 'blur(5px)' }}
        headerStyle={{ boxShadow: '0px 0px 20px 0px #e2e2e2' }}>
        <Menu mode="inline" onClick={onClose} selectedKeys={[currentLocation.pathname]}>
          {menuLinks}
        </Menu>
      </Drawer>
    </div>
  );
};
export default Navbar;
