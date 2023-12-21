
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import NoPage from './pages/404'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
