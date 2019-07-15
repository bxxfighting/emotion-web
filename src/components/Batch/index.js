import React from 'react';
import { Button, Table, Popconfirm } from 'antd';
import CreateModal from '../../containers/Batch/CreateModal';
import UpdateModal from '../../containers/Batch/UpdateModal';
import './index.css';

const component = ({ dataList, isFetch,
    getBatchList,
    setBatchListFetch,
    setBatchCreateModalVisible,
    deleteBatch,
    setBatchUpdateModalVisible,
    setBatchUpdateModalId,
    setBatchUpdateModalName,
    setBatchUpdateModalSign,
    setBatchUpdateModalRemark,
 }) => {
  if (isFetch === true) {
    setBatchListFetch(false);
    getBatchList();
  }
  let dataSource = [];
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        name: dataList[i].name,
        sign: dataList[i].sign,
        remark: dataList[i].remark,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: '批次名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '标识符',
      dataIndex: 'sign',
      key: 'sign',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
          return (
            <div>
              <Button
                style={{marginRight:2}}
                onClick={()=>{
                  setBatchUpdateModalId(record.id);
                  setBatchUpdateModalName(record.name);
                  setBatchUpdateModalSign(record.sign);
                  setBatchUpdateModalRemark(record.remark)
                  setBatchUpdateModalVisible(true);
                }}
              >编辑</Button>
              <Popconfirm
                title="确定删除？"
                onConfirm={()=>{
                  deleteBatch(record.id);
                }}
              >
                <Button>删除</Button>
              </Popconfirm>
            </div>
          )
        }
    },
  ]
  return (
    <div>
      <Button
        id="createBatchBtn"
        onClick={()=>{
          setBatchCreateModalVisible(true);
        }}
      >创建批次</Button>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
      <CreateModal />
      <UpdateModal />
    </div>
  )
}

export default component;