import React from 'react';
import { Modal, Input, Select } from 'antd';

const { Option } = Select;

const component = ({createModal, mods,
    setVisibleModal, 
    createRole,
    setRoleCreateModalName,
    setRoleCreateModalSign,
    setRoleCreateModalModIds,
}) => {
    let modOptions = [];
    for (let i in mods) {
        modOptions.push(
            <Option
                key={mods[i].id}
            >
                {mods[i].name}
            </Option>
        )
    }
    return (
        <Modal
            title="创建角色"
            visible={ createModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                createRole();
            }}
        >
            <span>角色名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="角色名称"
                value={createModal.name}
                onChange={(e)=>setRoleCreateModalName(e.target.value)}
            />
            <span>角色标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="角色标识"
                value={createModal.sign}
                onChange={(e)=>setRoleCreateModalSign(e.target.value)}
            />
            <span>选择关联模块:</span>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="选择关联模块"
                defaultValue={[]}
                onChange={(value)=>{
                    setRoleCreateModalModIds(value);
                }}
            >
                {modOptions}
            </Select>
        </Modal>
    )
}

export default component