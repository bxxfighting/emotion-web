import React from 'react';
import { Button, Table, Popconfirm, Popover } from 'antd';
import CreateModal from '../../containers/Role/CreateModal';
import UpdateModal from '../../containers/Role/UpdateModal';
import './index.css';

const component = ({ dataList, isFetch,
    getRoleList,
    setRoleListFetch,
    getModList,
    setRoleCreateModalVisible,
    deleteRole,
    setRoleUpdateModalVisible,
    setRoleUpdateModalId,
    setRoleUpdateModalName,
    setRoleUpdateModalSign,
    setRoleUpdateModalModIds,
 }) => {
  if (isFetch === true) {
    setRoleListFetch(false);
    getModList();
    getRoleList();
  }
  let dataSource = [];
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        name: dataList[i].name,
        sign: dataList[i].sign,
        mods: dataList[i].mods,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '标识符',
      dataIndex: 'sign',
      key: 'sign',
    },
    {
      title: '关联模块',
      dataIndex: 'mods',
      key: 'mods',
        render: (text, record) => {
          let modsContent = [];
          for (let i in record.mods) {
            modsContent.push(
              <p
                key={record.mods[i].id}
              >{record.mods[i].name}</p>
            )
          }
          return (
            <div>
              <Popover
                content={modsContent}
                title="关联模块"
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
          let modIds = []
          for (let i in record.mods) {
            modIds.push(record.mods[i].id)
          }
          return (
            <div>
              <Button
                style={{marginRight:2}}
                onClick={()=>{
                  setRoleUpdateModalId(record.id);
                  setRoleUpdateModalName(record.name);
                  setRoleUpdateModalSign(record.sign);
                  setRoleUpdateModalModIds(modIds)
                  setRoleUpdateModalVisible(true);
                }}
              >编辑</Button>
              <Popconfirm
                title="确定删除？"
                onConfirm={()=>{
                  deleteRole(record.id);
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
        id="createRoleBtn"
        onClick={()=>{
          setRoleCreateModalVisible(true);
        }}
      >创建角色</Button>
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