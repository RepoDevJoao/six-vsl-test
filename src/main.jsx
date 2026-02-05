import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import VSLPage from './pages/VSLPage'
import CheckoutPage from './pages/CheckoutPage'
import ThankYouPage from './pages/ThankYouPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VSLPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)