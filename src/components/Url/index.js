import React from 'react';
import { Button, Table, Popconfirm } from 'antd';
import CreateModal from '../../containers/Url/CreateModal';
import UpdateModal from '../../containers/Url/UpdateModal';
import './index.css';

const component = ({ dataList, isFetch,
    getUrlList,
    setUrlListFetch,
    getModList,
    setUrlCreateModalVisible,
    deleteUrl,
    setUrlUpdateModalVisible,
    setUrlUpdateModalId,
    setUrlUpdateModalName,
    setUrlUpdateModalUrl,
 }) => {
  if (isFetch === true) {
    setUrlListFetch(false);
    getModList();
    getUrlList();
  }
  let dataSource = [];
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        name: dataList[i].name,
        url: dataList[i].url,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: 'URL名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
          let modIds = []
          for (let i in record.mods) {
            modIds.push(record.mods[i].id)
          }
          return (
            <div>
              <Button
                style={{marginRight:2}}
                onClick={()=>{
                  setUrlUpdateModalId(record.id);
                  setUrlUpdateModalName(record.name);
                  setUrlUpdateModalUrl(record.url);
                  setUrlUpdateModalVisible(true);
                }}
              >编辑</Button>
              <Popconfirm
                title="确定删除？"
                onConfirm={()=>{
                  deleteUrl(record.id);
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
        id="createUrlBtn"
        onClick={()=>{
          setUrlCreateModalVisible(true);
        }}
      >创建URL</Button>
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