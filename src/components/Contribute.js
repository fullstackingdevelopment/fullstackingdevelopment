import Header from './Header';
import './styling/contribute.css';

function Contribute() {
  return (
    <div className='Contribute'>
      <div className='header'>
        <Header linkTwo='/about' linkThree='/contribute'/>
      </div>
      <p style={{
        marginTop: 30,
      }}>
        Thank you for your interest. The FSD team demands that all contributors read the
        <a href='https://www.contributor-covenant.org/version/2/1/code_of_conduct/' 
        target='_blank'> contributor covenant </a>
        before taking part in any activities regarding our projects to ensure that everything goes smooth.
      </p>
      <p style={{
        marginTop: 20,
      }}>
        Help us do more. Create issues, pull requests and review code.
      </p>
      <p style={{
        fontSize: 40,
        marginTop: 60,
      }}>
        Your support means a lot.
      </p>
    </div>
  )
}

export default Contribute;