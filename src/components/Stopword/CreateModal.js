import React from 'react';
import { Modal, Input } from 'antd';

const component = ({createModal,
    setVisibleModal, 
    createStopword,
    setStopwordCreateModalWord,
}) => {
    return (
        <Modal
            title="添加停止词"
            visible={ createModal.visible }
            onCancel={() => setVisibleModal(false)}
            onOk={()=>{
                createStopword();
            }}
        >
            <span>停止词(<span style={{color: 'red'}}>*</span>):</span>
            <Input
                placeholder="停止ygnk"
                value={createModal.word}
                onChange={(e)=>setStopwordCreateModalWord(e.target.value)}
            />
        </Modal>
    )
}

export default component