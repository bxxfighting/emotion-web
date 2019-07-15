import React from 'react';
import { Layout, Button } from 'antd';
import PasswordModal from '../../containers/TitleBar/PasswordModal';

const {
  Header
} = Layout;

const component = ({isLogin,
  logout,
  setPasswordModalVisible,
}) => {
  let btnText = '登录';
  if (isLogin === 'true') {
    btnText = '退出'
  }
  let changePasswdBtn = [];
  if (isLogin === 'true') {
    changePasswdBtn.push(
        <Button
          key='changePassword'
          style={{position: 'fixed', right: 100, height: 32, marginTop: 16, backgroundColor: '#011528', color: 'white'}}
          onClick={()=>{
            setPasswordModalVisible(true);
          }}
        >修改密码</Button>
    )
  }
  return (
    <Header style={{ height: 64, position: 'fixed', zIndex: 1, width: '100%', color:'white'}}>
        管理后台
        {changePasswdBtn}
        <Button
          key='logout'
          style={{position: 'fixed', right: 20, height: 32, marginTop: 16, backgroundColor: '#011528', color: 'white'}}
          onClick={()=>{
              if (isLogin === 'true') {
                  logout();
              } else {
              }
          }}
        >{btnText}</Button>
        <PasswordModal />
    </Header>
  )
}

export default component;