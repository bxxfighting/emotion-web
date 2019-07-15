import React from 'react';
import { Modal, Input } from 'antd';

const component = ({modal, setVisibleModal, 
    changePassword,
    setOldPassword,
    setNewPassword,
}) => {
    return (
        <Modal
            title="修改密码"
            visible={ modal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                changePassword();
            }}
        >
            <span>原密码:</span>
            <Input
                placeholder="原密码"
                value={modal.oldPassword}
                onChange={(e)=>setOldPassword(e.target.value)}
            />
            <span>新密码:</span>
            <Input
                placeholder="新密码"
                value={modal.newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}
            />
        </Modal>
    )
}

export default component