import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

function Header() {
  return (
    <div className='Header' style={{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 30,
    }}>
      <Link to='/' style={{
        fontSize: 30,
        textDecoration: 'none',
      }}>Full Stack-ing Development</Link>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 140,
        marginTop: 10,
      }}>
        <Link to='about'>
          <p style={{
            fontSize: 20,
          }}>About us</p>
        </Link>
        <Link to='howtocontribute'>
          <p style={{
            fontSize: 20,
            marginLeft: 80,
          }}>How to contribute</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;