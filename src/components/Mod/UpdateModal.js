import React from 'react';
import { Modal, Input, Select } from 'antd';

const { Option } = Select;

const component = ({updateModal, urls,
    setVisibleModal, 
    updateMod,
    setModUpdateModalName,
    setModUpdateModalSign,
    setModUpdateModalRank,
    setModUpdateModalUrlIds,
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
    let selectedValue = [];
    for (let i in updateModal.urlIds) {
        selectedValue.push(String(updateModal.urlIds[i]));
    }
    return (
        <Modal
            title="编辑模块"
            visible={ updateModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                updateMod();
            }}
        >
            <span>模块名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="模块名称"
                value={updateModal.name}
                onChange={(e)=>setModUpdateModalName(e.target.value)}
            />
            <span>模块标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="模块标识"
                value={updateModal.sign}
                onChange={(e)=>setModUpdateModalSign(e.target.value)}
            />
            <span>模块排序值(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="模块排序值"
                value={updateModal.rank}
                onChange={(e)=>setModUpdateModalRank(e.target.value)}
            />
            <span>关联URL:</span>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="选择关联URL"
                value={selectedValue}
                onChange={(value)=>{
                    let urlIds = []
                    for (let i in value) {
                        urlIds.push(parseInt(value[i]))
                    }
                    setModUpdateModalUrlIds(urlIds);
                }}
            >
                {urlOptions}
            </Select>
        </Modal>
    )
}

export default component