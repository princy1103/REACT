import { Homepage,Navbar, Cartpage, Loginpage, Productpage, Profilepage, Wislistpage , Errorpage  } from "./Index"
import { BrowserRouter as Router, Routes, Route } from "react-router"

const Layout = () => {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/product" element={<Productpage/>}></Route>
            <Route path="/cart" element={<Cartpage/>}></Route>
            <Route path="/wishlist" element={<Wislistpage/>}></Route>
            <Route path="/login" element={<Loginpage/>}></Route>
            <Route path="/profile" element={<Profilepage/>}></Route>
            <Route path="*" element={<Errorpage/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default Layout