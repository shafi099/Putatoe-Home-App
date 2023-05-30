import React from 'react'
import {FaPlusSquare} from "react-icons/fa";

const ItemCard = (props) => {
  return (
    <div className='ItemCardsPortion'>
            <span>
                <img src={props.pic} alt='bricksimage' className='ItemCardImage'/>
            </span>
            <span className='ItemCardText'>
            <span className='itemcardname'>{props.name}</span>
            <span className='itemcarddesc'>{props.desc}</span>
            <span className='itemcardPrice'>₹{props.price}</span>
            <span className='itemcardPriceOff'>MRP ₹{props.off}</span>
            <span className='Instock'>
                <span>
                    In Stock
                    </span><FaPlusSquare size='30px' color='#498d95'/></span>
            <span className='ItemCardSelect'>
                <label for='select'>Qty: </label>
                <select name="select" id="select" className='itemcardOptions'>
                <option value="constant">{props.option1}</option>
                <option value="constant">{props.Option2}</option>
                </select>
            </span>
            </span>
        </div>
  )
}

export default ItemCard