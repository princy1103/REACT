
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Form from './pages/form'
import Students from './pages/students'
function App() {
  return (
    <>
    <div>
      <nav>
        <Link to="/">Add Student</Link>
        <Link to="/students">View Students</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
    </>
  )
}

export default App
