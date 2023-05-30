import React from 'react'

const ContactComp = (props) => {
    return (
        <div className='contactPortion'>
            <span className='Letter'>{props.letter}</span>
            <span className='ContactName'>{props.name}</span>
        </div>
    )
}

export default ContactComp