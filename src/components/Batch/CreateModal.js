import React from 'react';
import { Modal, Input } from 'antd';

const component = ({createModal,
    setVisibleModal, 
    createBatch,
    setBatchCreateModalName,
    setBatchCreateModalSign,
    setBatchCreateModalRemark,
}) => {
    return (
        <Modal
            title="创建批次"
            visible={ createModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                createBatch();
            }}
        >
            <span>批次名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="批次名称"
                value={createModal.name}
                onChange={(e)=>setBatchCreateModalName(e.target.value)}
            />
            <span>批次标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="批次标识"
                value={createModal.sign}
                onChange={(e)=>setBatchCreateModalSign(e.target.value)}
            />
            <span>备注:</span>
            <Input
                placeholder="备注"
                value={createModal.remark}
                onChange={(e)=>setBatchCreateModalRemark(e.target.value)}
            />
        </Modal>
    )
}

export default component