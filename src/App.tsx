import React from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import SiteRouter from "./routes"

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SiteRouter />
      </QueryClientProvider>
    </div>
  )
}

export default App
