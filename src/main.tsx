import { createRoot } from 'react-dom/client'
import './app/shared/style/index.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavMenu } from './app/navbar/Navbar.tsx';
import { MenuLogin } from './app/auth/Auth.tsx';
import { Portada } from './app/dashboard/Dashboard.tsx';
import { PrivateRoute } from './app/shared/PrivateRoute.tsx';
import { AuthProvider } from './app/shared/hooks/useAuth.tsx';



// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {

  return (
    <div className='min-h-screen w-full bg-slate-900'>
      <NavMenu />
      <Routes>
        <Route path="/login" element={<MenuLogin />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Portada />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)