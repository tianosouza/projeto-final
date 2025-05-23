import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import MainRoutes from './routes'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)