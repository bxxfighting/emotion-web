import React from 'react';
import { Input, Button } from 'antd';
import './index.css';

const component = ({username, password,
    setLoginUsername,
    setLoginPassword,
    login,
}) => {
  return (
    <div className="login">
        <Input
            placeholder="用户名"
            value={username}
            onChange={(e)=>setLoginUsername(e.target.value)}
        />
        <Input.Password
            placeholder="密码"
            value={password}
            onChange={(e)=>setLoginPassword(e.target.value)}
        />
        <Button 
          className="login-btn"
          onClick={()=>{
            login();
          }}
        >登录</Button>
    </div>
  )
}

export default component;