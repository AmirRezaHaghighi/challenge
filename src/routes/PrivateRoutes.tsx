import { Outlet, Navigate } from "react-router-dom"
import useIsAuthenticated from "../hooks/useIsAuthenticated"

const PrivateRoutes = () => {
  let isAuthenticated = useIsAuthenticated()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
