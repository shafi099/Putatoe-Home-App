import React from 'react'
import TopNav from './TopNav';
import BottomBar from './BottomBar';

const Notifications = (props) => {
    return (<>
    <TopNav length={props.length}/>
        <div  className='CartDisplayPortion'>
            <span>No Notifications
            </span>
        </div>
        <BottomBar/>
        </>
    )
}

export default Notifications