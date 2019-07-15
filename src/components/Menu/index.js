import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const menu = ({dataList, isFetch, selectedKey,
    getUserModList,
    setMenuListFetch,
    setMenuSelectedKey,
}) => {
  if (isFetch === true) {
    setMenuListFetch(false);
    getUserModList();
  }
  let Menus = [];
  let systemItems = [];
  let item = null;
  for (let i in dataList) {
      let to = '/' + dataList[i].sign;
      if (dataList[i].sign === 'user' ||
          dataList[i].sign === 'role' ||
          dataList[i].sign === 'auth' ||
          dataList[i].sign === 'url' ||
          dataList[i].sign === 'mod'){
          item = (
              <Menu.Item
                  key={dataList[i].sign}
              >
                  <Link
                      to={to}
                  >
                  {dataList[i].name}
                  </Link>
              </Menu.Item>
          )
          systemItems.push(item)
      } else {
        item = (
            <Menu.Item
                key={dataList[i].sign}
            >
                <Link
                    to={to}
                >
                {dataList[i].name}
                </Link>
            </Menu.Item>
        )
        Menus.push(item)
      }
  }
  if (systemItems.length !== 0) {
      item = (
      <SubMenu
          title="系统设置"
          key="system"
      >
          {systemItems}
      </SubMenu>
      )
      Menus.push(item)
  }
  return (
    <div>
        <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onSelect={({item, key})=>{
                setMenuSelectedKey(key);
            }}
        >
        {Menus}
        </Menu>
    </div>
  )
}

export default menu;