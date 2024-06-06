import loadableComponent from 'utils/loadable-component'
import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Suspense } from "react";
import MainLayout from 'components/layouts/MainLayout'
import Register from 'views/pages/register'
import ForgotPassword from 'views/pages/forgot-password/forgot-password'
import { Rings } from 'react-loader-spinner';
import ResetPassword from 'views/pages/forgot-password/reset-password';
import Schedule from 'views/pages/schedule';
import Overview from 'views/pages/overview';
import Setting from 'views/pages/settingPage/setting';
import HelpPage from 'views/pages/help';
import LandingPage from 'views/pages/landingPage';

const Manage = loadableComponent(() => import('views/pages/manage'))
const Login = loadableComponent(() => import('views/pages/login'))

const PersonalInfo = loadableComponent(() => import('views/pages/personal-info'))

function AllRoutes() {
  return (
    <>
      <Suspense
        fallback={
          <div className='loading-container'>
            <Rings
              heigth="100"
              width="100"
              color='#1877f2'
              ariaLabel='loading'
            />
            <div>Loading data...</div>
          </div>
        }
      >
        <Routes>

          <Route path="/help" element={<MainLayout component={HelpPage} />} />
          <Route path="/setting" element={<MainLayout component={Setting} />} />
          <Route path="/overview" element={<MainLayout component={Overview} />} />
          <Route path="/schedule" element={<MainLayout component={Schedule} />} />
          <Route path="/manage-task" element={<MainLayout component={Manage} />} />
          <Route path="/personal-info" element={<MainLayout component={PersonalInfo} />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" >Cook</Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default AllRoutes
