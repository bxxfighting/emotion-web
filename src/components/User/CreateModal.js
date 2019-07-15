import React from 'react';
import { Modal, Input, Select } from 'antd';

const { Option } = Select;

const component = ({createModal, roles,
    setVisibleModal, 
    createUser,
    setUserCreateModalUsername,
    setUserCreateModalPassword,
    setUserCreateModalName,
    setUserCreateModalPhone,
    setUserCreateModalEmail,
    setUserCreateModalRoleIds,
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
    return (
        <Modal
            title="创建用户"
            visible={ createModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                createUser();
            }}
        >
            <span>用户名(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="用户名"
                value={createModal.username}
                onChange={(e)=>setUserCreateModalUsername(e.target.value)}
            />
            <span>密码(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="密码"
                value={createModal.password}
                onChange={(e)=>setUserCreateModalPassword(e.target.value)}
            />
            <span>真实姓名:</span>
            <Input
                placeholder="真实姓名"
                value={createModal.name}
                onChange={(e)=>setUserCreateModalName(e.target.value)}
            />
            <span>手机号:</span>
            <Input
                placeholder="手机号"
                value={createModal.phone}
                onChange={(e)=>setUserCreateModalPhone(e.target.value)}
            />
            <span>邮箱:</span>
            <Input
                placeholder="邮箱"
                value={createModal.email}
                onChange={(e)=>setUserCreateModalEmail(e.target.value)}
            />
            <span>关联角色:</span>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="选择关联角色"
                defaultValue={[]}
                onChange={(value)=>{
                    let ids = []
                    for (let i in value) {
                        ids.push(parseInt(value[i]))
                    }
                    setUserCreateModalRoleIds(ids);
                }}
            >
                {roleOptions}
            </Select>
        </Modal>
    )
}

export default component