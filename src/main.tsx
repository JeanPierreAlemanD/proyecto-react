import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx'
import './index.css'
import { ShoppingCartProvider } from '@context/index.tsx'

createRoot(document.getElementById('root')!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter >
  </ShoppingCartProvider>
)
