import React from 'react'
import logo from '../pics/logo.png'
import {  useNavigate } from 'react-router-dom';
import {  CiChat1, CiBoxList, CiHome,CiUser} from "react-icons/ci";

const BottomBar = () => {
    const Navigate = useNavigate();
  return (
    <div className='bottomBar'>
            <span onClick={()=>Navigate('/')}><CiHome size='27px' color='#498d95' />Home</span>
            <span onClick={()=>Navigate('/Profile')}><CiUser size='27px' color='#498d95' />Profile</span>
            <span><img src={logo} alt='logo' className='logo' /></span>
            <span onClick={()=>Navigate('/FollowList')}><CiBoxList size='27px' color='#498d95' />Follows</span>
            <span onClick={()=>Navigate('/Chat')}>< CiChat1 size='27px' color='#498d95' />Chat</span>
        </div>
  )
}

export default BottomBar