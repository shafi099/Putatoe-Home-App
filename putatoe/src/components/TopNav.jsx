import React from 'react'
import { CiShoppingCart,CiBellOn,CiLocationOn,CiMicrophoneOn,} from "react-icons/ci";
import {  useNavigate } from 'react-router-dom';

const TopNav = (props) => {
    const Navigate = useNavigate();
  return (
    <div className='Topnav'>
    <span className='locationPortion'>
        <span className='location'>
            <span><CiLocationOn size='19px' color='white' /></span>
            <span>Hyderbad,Telangana</span>
        </span>
        <span className='NotificationCart'>
            <CiBellOn size='30px' color='white' onClick={()=>Navigate('/Notifications')}/>0
            {/* <Link to='/Cart' className="no-underline"> */}
            <CiShoppingCart size='30px' color='white' onClick={()=>Navigate('/Cart')}/>{props.length}
            {/* </Link> */}
        </span>
    </span>
    <span className='locationPortion'>
        <input type='text' placeholder='Search your Products...' />
        <CiMicrophoneOn size='30px' color='white' />
    </span>
</div>
  )
}

export default TopNav