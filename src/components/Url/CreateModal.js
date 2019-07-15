import React from 'react';
import { Modal, Input } from 'antd';

const component = ({createModal,
    setVisibleModal, 
    createUrl,
    setUrlCreateModalName,
    setUrlCreateModalUrl,
}) => {
    return (
        <Modal
            title="创建URL"
            visible={ createModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                createUrl();
            }}
        >
            <span>URL名称(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="URL名称"
                value={createModal.name}
                onChange={(e)=>setUrlCreateModalName(e.target.value)}
            />
            <span>URL标识(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="URL"
                value={createModal.url}
                onChange={(e)=>setUrlCreateModalUrl(e.target.value)}
            />
        </Modal>
    )
}

export default component