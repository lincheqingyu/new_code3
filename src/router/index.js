//路由配置
import { createBrowserRouter } from "react-router-dom"
import React from "react"
import 'antd'

import Login from "../pages/Login/Login"
import Layout from "../pages/Layout/Layout"
import Register from "../pages/Register/Register"
import First from "../pages/First/First"
import Forum from "../pages/Forum/Forum"
import FA from "../pages/Forum/FA/FA"
import TP from "../pages/Forum/TP/TP"
import Deal from "../pages/Deal/Deal"
import DealRecommend from "../pages/Deal/DealRecommend/DealRecommend"
import DealRequest from "../pages/Deal/DealRequest/DealRequest"
import Letter from "../pages/Letter/Letter"
import Publish from "../pages/Publish/Publish"
import Personal from "../pages/Personal/Personal"
import Discussion from "../pages/Letter/Discussion"
import Privateletter from "../pages/Letter/Privateletter"
import Notice from "../pages/Letter/Officialchildren/Notice"
import Examine from "../pages/Letter/Officialchildren/Examine"
import Jiaoyi from "../pages/Personal/Jiaoyi"
import Shiming from "../pages/Personal/Shiming"
import Zhanghao from "../pages/Personal/Zhanghao"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/layout',
    element: <Layout />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/first',
    element: <First />
  },
  {
    path: '/letter',
    element: <Letter />,
    children:[
      {
        path: '/letter/notice',
        element: <Notice />
      },
      {
        path: '/letter/examine',
        element: <Examine />
      },
      {
        path: '/letter/discussion',
        element: <Discussion />
      },
      {
        path: '/letter/privateletter',
        element: <Privateletter />
      },
    ]
  },
  {
    path: '/personal',
    element: <Personal />,
    children:[
      {
        path: '/personal/jiaoyi',
        element: <Jiaoyi />
      },
      {
        path: '/personal/shiming',
        element: <Shiming />
      },
      {
        path: '/personal/zhanghao',
        element: <Zhanghao />
      },
    ]
  },
  {
    path: '/publish',
    element: <Publish />,
  },
  {
    path: '/Forum',
    element: <Forum />,
    children: [
      {
        path: "FA",
        element: <FA />,
      },
      {
        path: "TP",
        element: <TP />,
      },
    ]
  },
  {
    path: '/deal',
    element: <Deal />,
    children: [
      {
        path: "DealRecommend",
        element: <DealRecommend />
      },
      {
        path: "DealRequest",
        element: <DealRequest />
      }
    ]
  },
])

export default router