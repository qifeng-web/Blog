/*
 * @Author: gaofan05
 * @Date: 2024-03-19 15:59:02
 * @LastEditors: gaofan05
 * @Description: 主工程
 */
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import { routesConfig } from './router';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        {renderRoutes(routesConfig)}
      </Content>
    </Layout>
  );
}

export default App;
