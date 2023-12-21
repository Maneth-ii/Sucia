import Nav from "./components/Nav"
import Login from "./pages/Login"
import Main from "./pages/Main"
import Register from "./pages/Register.Jsx"
import {Routes , Route , BrowserRouter} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App