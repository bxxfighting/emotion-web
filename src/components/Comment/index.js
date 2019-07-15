import React from 'react';
import { Pagination, Button, Table, Popconfirm, Popover, Select } from 'antd';
import Filter from '../../containers/Comment/Filter';

const { Option } = Select;

const component = ({ dataList, isFetch, pageNum, pageSize, total, labelList,
    getCommentList,
    updateComment,
    checkComment,
    setCommentListFetch,
    setCommentPageNum,
    setCommentPageSize,
 }) => {
  if (isFetch === true) {
    setCommentListFetch(false);
    getCommentList();
  }
  let labelOptions = [];
  for (let i in labelList) {
      if (labelList[i].id === 0) {
          continue
      }
      labelOptions.push(
          <Option
            key={labelList[i].id}
            value={labelList[i].id}
          >
              {labelList[i].name}
          </Option>
      )
  }
  let dataSource = [];
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        comment: dataList[i].comment,
        label: dataList[i].label,
        status: dataList[i].status,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: '评论',
      width: 600,
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: '情绪',
      dataIndex: 'label',
      key: 'label',
      render: (text, record) => {
          return (
            <Select
                style={{width: 100}}
                value={record.label}
                onChange={(value)=>{
                    updateComment(record.id, value)
                }}
            >
                {labelOptions}
            </Select>
          )
      }
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
          let disabled = record.status === 10?false:true;
          return (
            <Button
              disabled={disabled}
              onClick={()=>{
                checkComment(record.id);
              }}
            >
              确认校验
            </Button>
          )
        }
    },
  ]
  return (
    <div>
      <Filter />
      <Pagination
          style={{marginLeft: 10, marginTop: 10}}
          showQuickJumper
          current={pageNum}
          total={total}
          pageSize={pageSize}
          onChange={(page, pageSize)=>{
            setCommentPageNum(page);
            setCommentPageSize(pageSize);
            getCommentList();
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
            setCommentPageNum(page);
            setCommentPageSize(pageSize);
            getCommentList();
          }}
      />
    </div>
  )
}

export default component;