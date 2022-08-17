import { Link } from 'react-router-dom';
import github from './images/github2.png';
import './styling/header.css';

function Header({ linkOne='/', linkTwo='about', linkThree='contribute' }) {
  return (
    <div className='Header'>
      <Link className='link' id='fsdLink' to={linkOne}>
        Full Stack-ing Development</Link>
      <div id='linkContainer'>
        <Link className='link' to={linkTwo}>
          <p>About us</p>
        </Link>
        <Link className='link' to={linkThree}>
          <p style={{
            marginLeft: 80,
          }}>How to contribute</p>
        </Link>
        <a href='https://github.com/fullstackingdevelopment' target='_blank' style={{
          position: 'absolute',
          right: 100,
        }}>
          <img src={github} style={{
            height: 60,
          }}/>
        </a>
      </div>
    </div>
  );
}

export default Header;