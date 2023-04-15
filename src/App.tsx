import React from 'react';
import SiteRouter from './routes';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SiteRouter />
      </QueryClientProvider>
    </div>
  );
}

export default App;
