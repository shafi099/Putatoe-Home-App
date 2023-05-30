import React from 'react';
import '../App.css';
import {
    FaMapMarkerAlt, FaBell, FaCartPlus, FaMicrophone,

    FaMobileAlt, FaTv, FaMoneyBillAlt, FaBullhorn, FaRegNewspaper, FaBlog, FaPeopleArrows, FaWpforms, FaGripfire, FaRegLightbulb, FaHandHoldingWater, FaArrowCircleRight

} from "react-icons/fa";
import ReachargeCardPic from '../pics/RechargeCard.jpg'
import coverblock from '../pics/coverblock.png'

const HomeApp = () => {
    return (<>
        <div className='Topnav'>
            <span className='locationPortion'>
                <span className='location'>
                    <span><FaMapMarkerAlt size='19px' color='white' /></span>
                    <span>Hyderbad,Telangana</span>
                </span>
                <span className='NotificationCart'>
                    <FaBell size='25px' color='white' />
                    <FaCartPlus size='25px' color='white' />
                </span>
            </span>
            <span className='locationPortion'>
                <input type='text' placeholder='Search your Products...' />
                <FaMicrophone size='25px' color='white' />
            </span>
        </div>


        <div className='rechargeCard'>
            <img src={ReachargeCardPic} alt='ReachargeCardPic' />
        </div>

        <div className='selectOptions'>
            <span className='optionsRow1'>
                <span>
                    <span><FaMobileAlt size='30px' color='#498d95' /></span>
                    <span>Recharge</span>
                </span>
                <span>
                    <span><FaRegNewspaper size='30px' color='#498d95' /></span>
                    <span>News</span>
                </span>
                <span>
                    <span><FaGripfire size='30px' color='#498d95' /></span>
                    <span>Gas Booking</span>
                </span>
            </span>
            <span className='optionsRow2'>
                <span>
                    <span>
                        <span><FaTv size='30px' color='#498d95' /></span>
                        <span>DTH Recharge</span>
                    </span>
                    <span><FaBlog size='30px' color='#498d95' /></span>
                    <span>Blog</span>
                </span>
                <span>
                    <span><FaPeopleArrows size='30px' color='#498d95' /></span>
                    <span>Jobs</span>
                </span>
            </span>
            <span className='optionsRow3'>
                <span>
                    <span><FaMoneyBillAlt size='30px' color='#498d95' /></span>
                    <span>Loans</span>
                </span>
                <span>
                    <span><FaRegLightbulb size='30px' color='#498d95' /></span>
                    <span>Electricity Bill</span>
                </span>
                <span>
                    <span><FaHandHoldingWater size='30px' color='#498d95' /></span>
                    <span>Water Bill</span>
                </span>
            </span>
            <span className='optionsRow4'>
                <span>
                    <span><FaBullhorn size='30px' color='#498d95' /></span>
                    <span>Promotions</span>
                </span>
                <span>
                    <span><FaWpforms size='30px' color='#498d95' /></span>
                    <span>Anonymous<br />Feedback</span>
                </span>

                <span>
                    <span><FaArrowCircleRight size='30px' color='#498d95' /></span>
                    <span>See More</span>
                </span>
            </span>
        </div>
        <div className='Heading'>
            <span>SHOP BY CATEGORY</span>
        </div>
        <div className='constructionBlock'>
            <span className='titleBlock'>Construction</span>
            <span className='coverblockportion'>
                <img src={coverblock} alt='coverBlock'/>
                <span className='name'>COVER BLOCK</span>
                <span >
                    <span className='offertext'>UP TO</span>
                    <span className='offertextRed'> 10% OFF</span>
                    </span>
            </span>
        </div>
    </>)
}

export default HomeApp