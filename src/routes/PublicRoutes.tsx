import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import useIsAuthenticated from "../hooks/useIsAuthenticated"

const PublicRoutes = () => {
  let isAuthenticated = useIsAuthenticated()
  return isAuthenticated ? <Navigate to="/users" /> : <Outlet />
}

export default PublicRoutes
