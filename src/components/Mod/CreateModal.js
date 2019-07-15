import React from 'react';
import { Modal, Input, Select } from 'antd';

const { Option } = Select;

const component = ({createModal, urls,
    setVisibleModal, 
    createMod,
    setModCreateModalName,
    setModCreateModalSign,
    setModCreateModalRank,
    setModCreateModalUrlIds,
}) => {
    let urlOptions = [];
    for (let i in urls) {
        urlOptions.push(
            <Option
                key={urls[i].id}
            >
                {urls[i].name}
            </Option>
        )
    }
    return (
        <Modal
            title="创建模块"
            visible={ createModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                createMod();
            }}
        >
            <span>模块名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="模块名称"
                value={createModal.name}
                onChange={(e)=>setModCreateModalName(e.target.value)}
            />
            <span>模块标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="模块标识"
                value={createModal.sign}
                onChange={(e)=>setModCreateModalSign(e.target.value)}
            />
            <span>模块排序值(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="模块排序值"
                value={createModal.rank}
                onChange={(e)=>setModCreateModalRank(e.target.value)}
            />
            <span>选择关联URL:</span>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="选择关联URL"
                defaultValue={[]}
                onChange={(value)=>{
                    setModCreateModalUrlIds(value);
                }}
            >
                {urlOptions}
            </Select>
        </Modal>
    )
}

export default component