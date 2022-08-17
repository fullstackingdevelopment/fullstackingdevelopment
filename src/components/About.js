import Header from './Header';
import gio from './images/gio.png';
import antonio from './images/antonio.png';
import './styling/about.css';

function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='header'>
        <Header LinkTwo='/about' linkThree='/contribute'/>
      </div>
      <div className='article' style={{
        marginTop: 30,
      }}>
        <p style={{
          fontSize: 28,
        }}>
          The FSD team is working on multiple Full-Stack applications.
          We're programmers seeking to develop our own skills and build interesting applications while doing so.
          All of our projects are open-source. We're more than happy to have contributors creating pull requests and issues.
        </p>
      </div>
      <div>
        <p style={{
          fontSize: 22,
        }}>The FSD Team</p>
        <a href='https://github.com/codingcodewhilegoofin' target='_blank'>
          <img src={gio}/>
        </a>
        <a href='https://github.com/antonio-erick' target='_blank'>
          <img src={antonio} />
        </a>
      </div>
    </div>
  );
}

export default AboutUs