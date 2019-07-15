import React from 'react';
import { Button, Table, Popconfirm, Popover } from 'antd';
import CreateModal from '../../containers/User/CreateModal';
import UpdateModal from '../../containers/User/UpdateModal';
import './index.css';

const component = ({ dataList, isFetch,
    getUserList,
    setUserListFetch,
    getRoleList,
    setUserCreateModalVisible,
    deleteUser,
    setUserUpdateModalVisible,
    setUserUpdateModalId,
    setUserUpdateModalName,
    setUserUpdateModalPhone,
    setUserUpdateModalEmail,
    setUserUpdateModalRoleIds,
 }) => {
  if (isFetch === true) {
    setUserListFetch(false);
    getRoleList();
    getUserList();
  }
  let dataSource = [];
  for (let i in dataList) {
    dataSource.push(
      {
        id: dataList[i].id,
        username: dataList[i].username,
        name: dataList[i].name,
        phone: dataList[i].phone,
        email: dataList[i].email,
        roles: dataList[i].roles,
        key: dataList[i].id,
      }
    )
  }
  let columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '关联角色',
      dataIndex: 'roles',
      key: 'roles',
        render: (text, record) => {
          let rolesContent = [];
          for (let i in record.roles) {
            rolesContent.push(
              <p
                key={record.roles[i].id}
              >{record.roles[i].name}</p>
            )
          }
          return (
            <div>
              <Popover
                content={rolesContent}
                title="关联角色"
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
          let roleIds = []
          for (let i in record.roles) {
            roleIds.push(record.roles[i].id)
          }
          return (
            <div>
              <Button
                style={{marginRight:2}}
                onClick={()=>{
                  setUserUpdateModalId(record.id);
                  setUserUpdateModalName(record.name);
                  setUserUpdateModalPhone(record.phone);
                  setUserUpdateModalEmail(record.email);
                  setUserUpdateModalRoleIds(roleIds);
                  setUserUpdateModalVisible(true);
                }}
              >编辑</Button>
              <Popconfirm
                title="确定删除？"
                onConfirm={()=>{
                  deleteUser(record.id);
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
        id="createUserBtn"
        onClick={()=>{
          setUserCreateModalVisible(true);
        }}
      >创建用户</Button>
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