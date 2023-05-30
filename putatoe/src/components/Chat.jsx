import React from 'react'
import TopNav from './TopNav'
import BottomBar from './BottomBar'
const Chat = (props) => {
    return (<>
        <TopNav length={props.length}/>
        <div className='CartDisplayPortion'>
            <span>Chat Page</span>
        </div>
        <BottomBar />
    </>
    )
}

export default Chat