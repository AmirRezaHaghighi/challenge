import { loadData } from "../utils/localStorage"

const useIsAuthenticated = () => {
  let token = loadData("token")
  return token ? true : false
}

export default useIsAuthenticated
