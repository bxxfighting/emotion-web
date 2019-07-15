import React from 'react';
import { Button, Table, Popconfirm, Popover } from 'antd';
import CreateModal from '../../containers/Mod/CreateModal';
import UpdateModal from '../../containers/Mod/UpdateModal';
import './index.css';

const component = ({ dataList, isFetch,
    getModList,
    getUrlList,
    setModListFetch,
    setModCreateModalVisible,
    deleteMod,
    setModUpdateModalVisible,
    setModUpdateModalID,
    setModUpdateModalName,
    setModUpdateModalSign,
    setModUpdateModalRank,
    setModUpdateModalUrlIds,
 }) => {
  if (isFetch === true) {
    setModListFetch(false);
    getUrlList();
    getModList();
  }
  let dataSource = []
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        name: dataList[i].name,
        sign: dataList[i].sign,
        rank: dataList[i].rank,
        urls: dataList[i].urls,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: '模块名称',
      dataIndex: 'name',
      width: '30%',
      key: 'name'
    },
    {
      title: '标识符',
      dataIndex: 'sign',
      key: 'sign'
    },
    {
      title: '排序值',
      dataIndex: 'rank',
      key: 'rank'
    },
    {
      title: '关联URL',
      dataIndex: 'urls',
      key: 'urls',
        render: (text, record) => {
          let urlsContent = [];
          for (let i in record.urls) {
            urlsContent.push(
              <p
                key={record.urls[i].id}
              >{record.urls[i].name}</p>
            )
          }
          return (
            <div>
              <Popover
                content={urlsContent}
                title="关联URL"
              >
                <Button>查看</Button>
              </Popover>
            </div>
          )
        }
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
          let urlIds = []
          for (let i in record.urls) {
            urlIds.push(record.urls[i].id)
          }
          return (
            <div>
              <Button
                style={{marginRight:2}}
                onClick={()=>{
                  setModUpdateModalID(record.id);
                  setModUpdateModalName(record.name);
                  setModUpdateModalSign(record.sign);
                  setModUpdateModalRank(record.rank);
                  setModUpdateModalUrlIds(urlIds)
                  setModUpdateModalVisible(true);
                }}
              >
                编辑
              </Button>
              <Popconfirm
                title="确定删除？"
                onConfirm={()=>{
                  deleteMod(record.id);
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
        id="createModBtn"
        onClick={()=>{
          setModCreateModalVisible(true);
        }}
      >创建模块</Button>
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