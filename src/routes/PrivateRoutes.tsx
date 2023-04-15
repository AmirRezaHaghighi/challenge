import { Outlet, Navigate } from "react-router-dom"
import { loadData } from "../utils/localStorage"

const PrivateRoutes = () => {
  let token = loadData("token")
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
