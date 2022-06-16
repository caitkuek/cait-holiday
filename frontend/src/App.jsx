import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Detail from "./pages/Detail";
import Login from "./pages/Login"
import Main from "./pages/Main"
import { atom } from "jotai";
import "./App.css"

export const userAtom = atom({})

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="holidays" element={<Main />} />
          <Route path="holidays/:id" element={<Detail />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;