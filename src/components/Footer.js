import waves from './images/waves.svg';
import github from './images/github.png';
import './styling/footer.css';

function Footer() {
  return (
    <div className='Footer'>
      <div id='projectsContainer'>
        <div className='projectHeader'>
          <img className='projectGithub' src={github} />
          <p className='projectName'>Facere</p>
        </div>
        <p className='projectDescription'>
          A free and open-source collaborative to-do list application. 
          Create projects, goals and tasks for teams and for yourself aswell.</p>
      </div>
    </div>
  );
}

export default Footer;