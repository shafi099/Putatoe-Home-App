import React from 'react';
import TopNav from './TopNav';
import BottomBar from './BottomBar';
const Profile = (props) => {
  return (
    <>
   <TopNav length={props.length}/>
      <div className="contactportion">
        <a href="https://github.com/shafi099" target='_blank' rel="noopener noreferrer">GITHUB</a>
        <a href="mailto:shaikshafieluru@gmail.com" target='_blank' rel="noopener noreferrer">GMAIL</a>
        <a href="https://www.linkedin.com/in/shaik-shafi-eluru/" target='_blank' rel="noopener noreferrer">LINKEDIN</a>
      </div>
      <BottomBar/>
    </>
  );
}

export default Profile;
