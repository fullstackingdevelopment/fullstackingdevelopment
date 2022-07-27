import waves from './images/waves.svg';
import github from './images/github.png';

function Footer() {
  return (
    <div className='Footer' style={{
      height: '40%',
      width: '100%',
      backgroundColor: '#04030F',
      position: 'absolute',
      bottom: 0,
    }}>
      <img src={waves} style={{
        position: 'absolute',
        bottom: 278,
        left: 0,
        transform: 'rotate(180deg)'
      }}/>
      <div style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        marginTop: 100,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          left: 0,
        }}>
          <img src={github} style={{
            height: 50,
            marginTop: 20,
            marginLeft: 20,
          }}/>
          <p style={{
            color: '#F6F4F3',
            fontSize: 35,
            marginLeft: 10,
          }}>Facere</p>
        </div>
        <p style={{
          color: '#F6F4F3',
          position: 'absolute',
          left: 30,
        }}>A free and open-source collaborative to-do list application. Create projects, goals and tasks for teams and for yourself aswell.</p>
      </div>
    </div>
  );
}

export default Footer;