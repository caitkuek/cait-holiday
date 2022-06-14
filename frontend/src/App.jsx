import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Login from "../pages/Login"
import Main from "../pages/Main"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/holidays" element={<Main />} />
        <Route path="/holidays/:id" element={<Detail />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;