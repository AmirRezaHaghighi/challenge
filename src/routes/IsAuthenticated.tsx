import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { loadData } from "../utils/localStorage"

const IsAuthenticated = () => {
  let token = loadData("token")
  return token ? <Navigate to="/users" /> : <Outlet />
}

export default IsAuthenticated
