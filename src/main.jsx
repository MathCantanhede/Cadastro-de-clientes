import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Clients from './pages/Clients.jsx'
import Clientsdetails from './pages/Clientsdetails.jsx'
import Cadastroclients from './pages/Cadastroclients.jsx'
import Sobre from './pages/Sobre.jsx'
import Sair from './pages/Sair.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>
},
{
  path: '/Clientsdetails',
  element: <Clientsdetails/>
},
{
  path:'/Sobre',
  element: <Sobre/>
},
{
  path: "/Cadastro",
  element: <Cadastroclients/>
},
{
  path: '/Sair',
  element: <Sair/>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
