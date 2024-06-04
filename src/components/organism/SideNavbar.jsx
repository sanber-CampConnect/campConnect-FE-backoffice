import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import _ from "lodash";
import { routeList } from "../../routes/RouteList";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideNavbar() {
  const [listMenu, setListMenu] = useState([]);
  const [menuActive, setMenuActive] = useState([]);
  const [menuOpen, setMenuOpen] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const dataListMenu = _.filter(routeList, (obj) => {
      return obj.path !== "*" && obj.path !== "/auth";
    });
    dataListMenu.forEach((item, index) => {
      item.index = index;
    });
    setListMenu(dataListMenu);
  }, []);

  useEffect(() => {
    const currentLocation = location.pathname;
    setMenuActive([currentLocation]);
    listMenu.forEach((item) => {
      item.children.forEach((i) => {
        if (i.key === currentLocation) {
          setMenuOpen([item.index.toString()]);
        }
      });
    });
  }, [listMenu]);

  const handleNavigate = (base, child, key) => {
    setMenuActive([key]);
    if (child) {
      if (base === "/") {
        navigate(`/${child}`);
      } else {
        navigate(`${base}/${child}`);
      }
    } else {
      navigate(base);
    }
  };

  const handleOpenTab = (key) => {
    let menuData = [];
    menuOpen.forEach((item) => {
      menuData.push(item);
    });
    if (menuData.includes(key.toString())) {
      menuData = menuData.filter(function (item) {
        return item !== key.toString();
      });
      setMenuOpen(menuData);
    } else {
      menuData.push(key.toString());
      setMenuOpen(menuData);
    }
  };

  return (
    <>
      <Sider width={280} className="overflow-y-auto">
        <Menu
          mode="inline"
          selectedKeys={menuActive}
          openKeys={menuOpen}
          style={{ height: "100%", borderRight: 0 }}
        >
          {listMenu.map((item) => {
            return (
              <SubMenu
                onTitleClick={() => handleOpenTab(item.index)}
                key={item.index}
                icon={item.icon}
                title={item.title}
              >
                {item.children.map((child, childIndex) => (
                  <Menu.Item
                    key={`${item.index}-${childIndex}`} // Gunakan kombinasi dari index dan childIndex untuk membuat key yang unik
                    onClick={() =>
                      handleNavigate(item.path, child.path, child.key)
                    }
                  >
                    {child.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
    </>
  );
}
