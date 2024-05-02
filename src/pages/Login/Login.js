/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-08 00:04:51
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-02-08 00:42:46
 * @FilePath: \my-first-reactd:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-02\new_code2\new_code3\src\pages\Login\Login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import './Login.scss'
import Logo from "../../components/Logo/Logo"
import { Link } from 'react-router-dom'

const Login = () => {
  const [form] = Form.useForm()
  // 表单成功提交
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className='container'>
      <div className='picture'>
        <img className='login-picture' src={require('../../assets/images/login.png')} alt="design" />
      </div>
      <div className='login'>
        <Logo />
        <div className='content'>
          <Form
            form={form}
            name="normal_login"
            className="username-password"
            validateTrigger='onBlur'//失焦验证
            initialValues={{
              remember: true,
              username: '',
              password: ''
            }}
            onFinish={onFinish}
          >
            <Form.Item>
              <h1>Login to Share Community</h1>
            </Form.Item>
            <Form.Item
              name="username"//和后端接口名保持一致
              rules={[
                {
                  required: true,
                  message: '请输入您的用户名！',
                },
                {
                  pattern: /^1[3-9]\d{9}$/,//匹配中国大陆地区的手机号
                  message: '请输入正确的手机号！'
                }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入您的密码！',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Form>
          <Form className='remember-forgot-container'>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>保存密码</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              忘记密码？
            </a>
          </Form>
          <Form className='button'>
            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className='link'>
          <Form.Item>
            <Link to="/Register">
            还未拥有账号？点击注册
            </Link>
          </Form.Item>
        </div>
      </div>
    </div>
  )
}

export default Login
