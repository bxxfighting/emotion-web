import React from 'react';
import { Modal, Input, Select } from 'antd';

const { Option } = Select;

const component = ({updateModal, mods,
    setVisibleModal, 
    updateRole,
    setRoleUpdateModalName,
    setRoleUpdateModalSign,
    setRoleUpdateModalModIds,
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
    let selectedValue = [];
    for (let i in updateModal.modIds) {
        selectedValue.push(String(updateModal.modIds[i]));
    }
    return (
        <Modal
            title="编辑角色"
            visible={ updateModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                updateRole();
            }}
        >
            <span>角色名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="角色名称"
                value={updateModal.name}
                onChange={(e)=>setRoleUpdateModalName(e.target.value)}
            />
            <span>角色标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="角色标识"
                value={updateModal.sign}
                onChange={(e)=>setRoleUpdateModalSign(e.target.value)}
            />
            <span>关联模块:</span>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="选择关联模块"
                value={selectedValue}
                onChange={(value)=>{
                    let modIds = []
                    for (let i in value) {
                        modIds.push(parseInt(value[i]))
                    }
                    setRoleUpdateModalModIds(modIds);
                }}
            >
                {modOptions}
            </Select>
        </Modal>
    )
}

export default component