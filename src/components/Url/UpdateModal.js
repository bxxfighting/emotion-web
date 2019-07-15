import React from 'react';
import { Modal, Input } from 'antd';

const component = ({updateModal,
    setVisibleModal, 
    updateUrl,
    setUrlUpdateModalName,
    setUrlUpdateModalUrl,
}) => {
    return (
        <Modal
            title="编辑URL"
            visible={ updateModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                updateUrl();
            }}
        >
            <span>URL名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="URL名称"
                value={updateModal.name}
                onChange={(e)=>setUrlUpdateModalName(e.target.value)}
            />
            <span>URL标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="URL"
                value={updateModal.url}
                onChange={(e)=>setUrlUpdateModalUrl(e.target.value)}
            />
        </Modal>
    )
}

export default component