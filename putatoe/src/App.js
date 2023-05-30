import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import HomeApp from './components/HomeApp'
import CartPage from './components/CartPage'
import Notifications from './components/Notifications'
import Profile from './components/Profile'
import FollowList from './components/FollowList'
import Chat from './components/Chat'

function App() {
  const [cart, setCart]=useState([])
  const CartPass = (item) => {
    setCart([...cart, item]);
  };
  

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <HomeApp CartPass={CartPass} length={cart.length}/> } />
      <Route path="Cart" element={ <CartPage cart={cart}/> } />
      <Route path="Notifications" element={ <Notifications length={cart.length}/> } />
      <Route path="FollowList" element={ <FollowList length={cart.length}/> } />
      <Route path="Chat" element={ <Chat length={cart.length}/> } />
      <Route path="Profile" element={ <Profile length={cart.length}/> } />
      {/* <Route path="Wishlist" element={ <Wishlist wishbox={wishbox} wishhandler={wishhandler} /> } /> */}
    </Routes>
  </div>
  );
}

export default App;
