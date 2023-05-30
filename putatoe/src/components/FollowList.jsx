import React from 'react'
import TopNav from './TopNav'
import BottomBar from './BottomBar'
const FollowList = (props) => {
    return (<>
        <TopNav length={props.length}/>
        <div className='CartDisplayPortion'>
            <span>Follow List</span>
        </div>
        <BottomBar />
    </>
    )
}

export default FollowList