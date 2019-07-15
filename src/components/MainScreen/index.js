import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Menu from '../../containers/Menu';
import User from '../../containers/User';
import Role from '../../containers/Role';
import Url from '../../containers/Url';
import Mod from '../../containers/Mod';
import Comment from '../../containers/Comment';
import Stopword from '../../containers/Stopword';

const {
  Sider, Content
} = Layout;

const component = ({ 
  setUserListFetch,
  setRoleListFetch,
  setModListFetch,
  setUrlListFetch,
  setCommentListFetch,
  setStopwordListFetch,
}) => {
    return (
      <div>
        <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '90vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <Menu />
            </Sider>
            <Content
              style={{
                marginLeft: 200,
                minWidth: 1000,
                marginBottom: 20,
              }}
            >
              <Switch>
                <Route
                    path="/user"
                    render={()=>{
                      setUserListFetch(true);
                      return (
                        <User />
                      )
                    }}
                />
                <Route
                    path="/role"
                    render={()=>{
                      setRoleListFetch(true);
                      return (
                        <Role />
                      )
                    }}
                />
                <Route
                    path="/mod"
                    render={()=>{
                      setModListFetch(true);
                      return (
                        <Mod />
                      )
                    }}
                />
                <Route
                    path="/url"
                    render={()=>{
                      setUrlListFetch(true);
                      return (
                        <Url />
                      )
                    }}
                />
                <Route
                    path="/comment"
                    render={()=>{
                      setCommentListFetch(true);
                      return (
                        <Comment />
                      )
                    }}
                />
                <Route
                    path="/stopword"
                    render={()=>{
                      setStopwordListFetch(true);
                      return (
                        <Stopword />
                      )
                    }}
                />
              </Switch>
            </Content>
        </Layout>
      </div>
    );
}

export default component;