import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { AuthProvider } from './contexts/Auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <GlobalStyle />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);