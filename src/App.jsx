import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ScrollManager from './components/ScrollManager.jsx'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
