import React from 'react';
import { Modal, Input } from 'antd';

const component = ({updateModal,
    setVisibleModal, 
    updateBatch,
    setBatchUpdateModalName,
    setBatchUpdateModalSign,
    setBatchUpdateModalRemark,
}) => {
    return (
        <Modal
            title="编辑批次"
            visible={ updateModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                updateBatch();
            }}
        >
            <span>批次名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="批次名称"
                value={updateModal.name}
                onChange={(e)=>setBatchUpdateModalName(e.target.value)}
            />
            <span>批次标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="批次标识"
                value={updateModal.sign}
                onChange={(e)=>setBatchUpdateModalSign(e.target.value)}
            />
            <span>备注:</span>
            <Input
                placeholder="备注"
                value={updateModal.remark}
                onChange={(e)=>setBatchUpdateModalRemark(e.target.value)}
            />
        </Modal>
    )
}

export default component