import React from 'react'
import bricks from '../pics/bricks.jpg'
import cementpic1 from '../pics/cementpic.jpg'
import wire from '../pics/wire.jpg'
import cementpic2 from '../pics/cementpic2.jpg'
import landpic1 from '../pics/landpic1.jpeg'
import ItemCard from './ItemCard'
import TopNav from './TopNav'
import BottomBar from './BottomBar'
import landpic2 from '../pics/landpic2.jpg'
const images=[bricks, cementpic1, cementpic2, wire, landpic1,landpic2]

const CartPage = (props) => {
    function emptyFunction() {
        // Does Nothing
      }
    const CartDisplay = () => {
        let components=[]
        if(props.cart.length!==0){
        for(let i=0;i<props.cart.length;i++){
            // for(let j=0;j<cart.length;j++){
                components.push(
                    <ItemCard pic={images[props.cart[i][6]]} name={props.cart[i][0]} desc={props.cart[i][1]} price={props.cart[i][2]} option1={props.cart[i][3]} options2={props.cart[i][4]} off={props.cart[i][5]} CartPass={emptyFunction}/>
                )
            // }
        }
        return components;}
        else{
            return <span>Empty Cart</span>
        }
    }

  return (<>
    <TopNav length={props.cart.length}/>
    <div className='CartDisplayPortion'>
    {CartDisplay()}
    </div>
    <BottomBar/>
    </> );
}

export default CartPage