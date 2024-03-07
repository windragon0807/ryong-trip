import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HotelListPage from '@pages/HotelList'
import HotelPage from '@pages/Hotel'
import TestPage from '@pages/Test'
import useLoadKakao from '@hooks/useLoadKakao'

export default function App() {
  useLoadKakao()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}
