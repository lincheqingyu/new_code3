import React from 'react'
import Header from '../../../style/Header'
import Lettersider from '../Lettersider'
import { Layout } from 'antd'
import './Examine.css'
import Miniheader from '../Miniheader'

const { Sider, Content } = Layout
const Examine = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <div>
            <Miniheader />
          </div>

          <div className='letter-content'>
            <img src={require('../../../assets/images/zanwuxiaoxi.png')} alt='暂无消息' />
          </div>
        </Content>


      </Layout>
    </div>
  )
}

export default Examine
