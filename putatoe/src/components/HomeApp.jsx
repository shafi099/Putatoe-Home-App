import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import TopNav from './TopNav';
import '../App.css';
import { FaMobileAlt, FaTv, FaMoneyBillAlt, FaBullhorn, FaRegNewspaper, FaBlog,
     FaPeopleArrows, FaWpforms, FaGripfire, FaRegLightbulb, FaHandHoldingWater, FaArrowCircleRight
} from "react-icons/fa";
import { FcShipped, FcOnlineSupport } from "react-icons/fc";
import ReachargeCardPic from '../pics/RechargeCard.jpg'
import coverblock from '../pics/coverblock.png'
import bricks from '../pics/bricks.jpg'
import cementpic1 from '../pics/cementpic.jpg'
import wire from '../pics/wire.jpg'
import cementpic2 from '../pics/cementpic2.jpg'
import landpic1 from '../pics/landpic1.jpeg'
import ItemCard from './ItemCard';
import ContactComp from './ContactComp';
import BottomBar from './BottomBar';
import landpic2 from '../pics/landpic2.jpg'


const HomeApp = (props) => {
    


    return (<>
       <TopNav length={props.length}/>


        <div className='rechargeCard'>
            <img src={ReachargeCardPic} alt='ReachargeCardPic' />
        </div>

        <div className='selectOptions'>
            <span className='optionsRow1'>
                <span>
                    <span><FaMobileAlt size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Recharge</span>
                </span>
                <span>
                    <span><FaRegNewspaper size='30px' color='#498d95' /></span>
                    <span classname='NavText'>News</span>
                </span>
                <span>
                    <span><FaGripfire size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Gas Booking</span>
                </span>
            </span>
            <span className='optionsRow2'>
                <span>
                    <span>
                        <span><FaTv size='30px' color='#498d95' /></span>
                        <span classname='NavText'>DTH Recharge</span>
                    </span>
                    <span><FaBlog size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Blog</span>
                </span>
                <span>
                    <span><FaPeopleArrows size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Jobs</span>
                </span>
            </span>
            <span className='optionsRow3'>
                <span>
                    <span><FaMoneyBillAlt size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Loans</span>
                </span>
                <span>
                    <span><FaRegLightbulb size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Electricity Bill</span>
                </span>
                <span>
                    <span><FaHandHoldingWater size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Water Bill</span>
                </span>
            </span>
            <span className='optionsRow4'>
                <span>
                    <span><FaBullhorn size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Promotions</span>
                </span>
                <span>
                    <span><FaWpforms size='30px' color='#498d95' /></span>
                    <span classname='NavText'>Feedback</span>
                </span>

                <span>
                    <span><FaArrowCircleRight size='30px' color='#498d95' /></span>
                    <span classname='NavText'>See More</span>
                </span>
            </span>
        </div>
        <div className='Heading'>
            <span>SHOP BY CATEGORY</span>
        </div>
        <div className='constructionBlock'>
            <span className='titleBlock'>Construction</span>
            <span className='coverblockportion'>
                <img src={coverblock} alt='coverBlock' />
                <span className='name'>COVER BLOCK</span>
                <span >
                    <span className='offertext'>UP TO</span>
                    <span className='offertextRed'> 10% OFF</span>
                </span>
            </span>
        </div>

        <div className='HeaderPart'>
            <span>Popular Service Products</span>
        </div>
        <div className='normalHead'>
            <span className='titleBlock'>Construction</span>
        </div>
        <div className='DisplayOptions'>
            <ItemCard pic={bricks} name='Royal Bricks' desc='Brick' price='18000' option1='2000 Pieces' options2='1000 Pieces' off='20000' CartPass={props.CartPass}/>
            <ItemCard pic={landpic1} name='Dehri Bihar' desc='Morang' price='6272' option1='78 Square Feet' options2='52 Square Feet' off='7500'  CartPass={props.CartPass}/>
            <ItemCard pic={cementpic1} name='ACC  Gold' desc='Cement' price='485' option1='50 KG' options2='25 KG' off='550'  CartPass={props.CartPass}/>
            <ItemCard pic={cementpic2} name='UltraTech PPC' desc='cement' price='450' option1='50 KG' options2='25 KG' off='550'  CartPass={props.CartPass}/>
            <ItemCard pic={wire} name='Wire' desc='Cable' price='90' option1='Copper' options2='Copper' off='110'  CartPass={props.CartPass}/>
            <ItemCard pic={landpic2} name='Dehri Bihar' desc='Morang' price='7299' option1='90 Square Feet' options2='68 Square Feet' off='8265'  CartPass={props.CartPass}/>
        </div>
        <div className='HeaderPart'>
            <span>All Popular Service Providers</span>
        </div>
        <div className='normalHead'>
            <span className='titleBlock'>Construction</span>
        </div>
        <div className='DisplayOptions'>
            <ContactComp letter='G' name='Gangotri Building' />
            <ContactComp letter='P' name='Pulak Shops' />
            <ContactComp letter='S' name='Singh Building' />
            <ContactComp letter='S' name='Surpradha Interiors' />
            <ContactComp letter='A' name='Apna Interiors' />
            <ContactComp letter='V' name='Viveks & Associates' />
            <ContactComp letter='G' name='Gangotri Building' />
            <ContactComp letter='M' name='Mahavir Traders' />
            <ContactComp letter='R' name='Ravi Traders' />
        </div>
        <div className='HeaderPart'>
            <span>Service We Provide</span>
        </div>
        <div className='Service'>
            <div className='servicePortion'>
                <span> <FcShipped size='100px' /> </span>
                <span>Daily Needs</span>
            </div>
            <div className='servicePortion'>
                <span><FcOnlineSupport size='100px' /></span>
                <span>Consultancy</span>
            </div>
        </div>
        <BottomBar/>

    </>)
}

export default HomeApp