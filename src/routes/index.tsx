import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import User from '../pages/User'
import UsersList from '../pages/UsersList'
import IsAuthenticated from './IsAuthenticated'
import PrivateRoutes from './PrivateRoutes'

const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IsAuthenticated />}>
          <Route path='/' element={<Login />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='users' element={<UsersList />} />
          <Route path='user/:id' element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default SiteRouter
