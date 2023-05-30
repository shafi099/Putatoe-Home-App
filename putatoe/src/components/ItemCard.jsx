import React , { useState }from 'react'
import {FaPlusSquare,FaMinusSquare} from "react-icons/fa";
import bricks from '../pics/bricks.jpg'
import cementpic1 from '../pics/cementpic.jpg'
import wire from '../pics/wire.jpg'
import cementpic2 from '../pics/cementpic2.jpg'
import landpic1 from '../pics/landpic1.jpeg'
import landpic2 from '../pics/landpic2.jpg'
// const images=[bricks, cementpic1, cementpic2, wire, landpic1]

const ItemCard = (props) => {
    const [add, setAdd]=useState(false)
    const CartHandle = () =>{
        setAdd(true)
        let index
        if(props.pic===bricks){ index=0 }
        else if(props.pic===cementpic1){ index=1 }
        else if(props.pic===cementpic2){ index=2 }
        else if(props.pic===wire){ index=3 }
        else if(props.pic===landpic1){ index=4 }
        else if(props.pic===landpic2){ index=5 }
        props.CartPass([props.name,props.desc,props.price,props.off,props.option1,props.options2,index])
    }

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
                    </span>
                    {add===false && (
                        <FaPlusSquare size='30px' color='#498d95' onClick={CartHandle}/>
                    )}
                    {add===true && (
                        <FaMinusSquare size='30px' color='#498d95' />
                    )}
                    </span>
            <span className='ItemCardSelect'>
                <label for='select'>Qty: </label>
                <select name="select" id="select" className='itemcardOptions'>
                <option value={props.option1}>{props.option1}</option>
                <option value={props.options2}>{props.options2}</option>
                </select>
            </span>
            </span>
        </div>
  )
}

export default ItemCard