import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import TitleBar from './containers/TitleBar';
import BodyScreen from './components/BodyScreen';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Layout>
            <TitleBar />
          </Layout>
          <Layout>
            <BodyScreen />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;