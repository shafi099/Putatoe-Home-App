import { Routes, Route } from "react-router-dom"
import HomeApp from './components/HomeApp'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <HomeApp /> } />
      {/* <Route path="Cart" element={ <Cart cartbox={cartbox} carthandler={carthandler} /> } /> */}
      {/* <Route path="Wishlist" element={ <Wishlist wishbox={wishbox} wishhandler={wishhandler} /> } /> */}
    </Routes>
  </div>
  );
}

export default App;
