import React from 'react';
import { Pagination, Button, Table, Popconfirm, Popover, Select } from 'antd';
import Filter from '../../containers/Stopword/Filter';
import CreateModal from '../../containers/Stopword/CreateModal';
import './index.css';

const { Option } = Select;

const component = ({ dataList, isFetch, pageNum, pageSize, total, statusList,
    getStopwordList,
    updateStopword,
    deleteStopword,
    setStopwordListFetch,
    setStopwordPageNum,
    setStopwordPageSize,
    setStopwordCreateModalVisible,
 }) => {
  if (isFetch === true) {
    setStopwordListFetch(false);
    getStopwordList();
  }
  let statusOptions = [];
  for (let i in statusList) {
      if (statusList[i].id === 0) {
          continue
      }
      statusOptions.push(
          <Option
            key={statusList[i].id}
            value={statusList[i].id}
          >
              {statusList[i].name}
          </Option>
      )
  }
  let dataSource = [];
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        word: dataList[i].word,
        status: dataList[i].status,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: '停止词',
      width: 600,
      dataIndex: 'word',
      key: 'word',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => {
          return (
              <Select
                style={{width: 100}}
                value={record.status}
                onChange={(value)=>{
                    updateStopword(record.id, value)
                }}
              >
                  {statusOptions}
              </Select>
          )
        }
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return (
              <Popconfirm
                title="确定删除？"
                onConfirm={()=>{
                  deleteStopword(record.id);
                }}
              >
                <Button>删除</Button>
              </Popconfirm>
            )
        }
    }
  ]
  return (
    <div>
      <Button
        id="createStopwordBtn"
        onClick={()=>{
            setStopwordCreateModalVisible(true);
        }}
      >
          创建停止词
      </Button>
      <Filter />
      <Pagination
          style={{marginLeft: 10, marginTop: 10}}
          showQuickJumper
          current={pageNum}
          total={total}
          pageSize={pageSize}
          onChange={(page, pageSize)=>{
            setStopwordPageNum(page);
            setStopwordPageSize(pageSize);
            getStopwordList();
          }}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <Pagination
          style={{marginLeft: 10, marginTop: 10}}
          showQuickJumper
          current={pageNum}
          total={total}
          pageSize={pageSize}
          onChange={(page, pageSize)=>{
            setStopwordPageNum(page);
            setStopwordPageSize(pageSize);
            getStopwordList();
          }}
      />
      <CreateModal />
    </div>
  )
}

export default component;