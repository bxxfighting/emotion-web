import React from 'react';
import { Modal, Input, Select } from 'antd';

const { Option } = Select;

const component = ({updateModal, roles,
    setVisibleModal, 
    updateUser,
    setUserUpdateModalPassword,
    setUserUpdateModalName,
    setUserUpdateModalPhone,
    setUserUpdateModalEmail,
    setUserUpdateModalRoleIds,
}) => {
    let roleOptions = [];
    for (let i in roles) {
        roleOptions.push(
            <Option
                key={roles[i].id}
            >
                {roles[i].name}
            </Option>
        )
    }
    let selectedRoles = [];
    for (let i in updateModal.roleIds) {
        selectedRoles.push(String(updateModal.roleIds[i]));
    }
    return (
        <Modal
            title="编辑用户"
            visible={ updateModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                updateUser();
            }}
        >
            <span>真实姓名: </span>
            <Input
                placeholder="真实姓名"
                value={updateModal.name}
                onChange={(e)=>setUserUpdateModalName(e.target.value)}
            />
            <span>密码: </span>
            <Input
                placeholder="密码，如果不修改请勿填写"
                value={updateModal.password}
                onChange={(e)=>setUserUpdateModalPassword(e.target.value)}
            />
            <span>手机号: </span>
            <Input
                placeholder="手机号"
                value={updateModal.phone}
                onChange={(e)=>setUserUpdateModalPhone(e.target.value)}
            />
            <span>邮箱: </span>
            <Input
                placeholder="邮箱"
                value={updateModal.email}
                onChange={(e)=>setUserUpdateModalEmail(e.target.value)}
            />
            <span>关联角色: </span>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="选择关联角色"
                value={selectedRoles}
                onChange={(value)=>{
                    let roleIds = []
                    for (let i in value) {
                        roleIds.push(parseInt(value[i]))
                    }
                    setUserUpdateModalRoleIds(roleIds);
                }}
            >
                {roleOptions}
            </Select>
        </Modal>
    )
}

export default component