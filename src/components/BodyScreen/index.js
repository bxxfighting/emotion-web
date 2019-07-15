import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Login from '../../containers/Login';
import MainScreen from '../../containers/MainScreen';


class App extends Component {
  render() {
    return (
        <Layout
            style={{
                marginTop: 70,
            }}
        >
            <Switch>
                <Route
                    path="/login"
                    component={Login}
                />
                <Route
                    path="/"
                    component={MainScreen}
                />
            </Switch>
        </Layout>
    );
  }
}

export default App;
