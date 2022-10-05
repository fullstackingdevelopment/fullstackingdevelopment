import { Col , Button} from "react-bootstrap";
import { useState, useEffect } from "react";

export const ContactCard = ({ Dev, Gittitle, Yttitle, GitimgUrl, YTimgUrl, GitwebLink, YtwebLink }) => {

  const [windowSizeX, setwindowSizeX] = useState(window.innerWidth);


  let logoHeight;
  let logoWidth;
  let showMobileBtn;

  if (windowSizeX[0] < 700) {
    logoHeight = '25%';
    logoWidth = '25%';
    showMobileBtn= true;
  }
  else {
    logoHeight = '15%';
    logoWidth = '15%';
    showMobileBtn= false;
  }

  useEffect(() => {

    function updateSize() {
      setwindowSizeX([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    console.log("from contact", windowSizeX[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSizeX])

  return (
    <>
      <h1 style={{ color: 'white' }}>{Dev}</h1>
      <div style={{ border: '1px solid white', padding: '5px', margin: '5px', flexFlow: 'row wrap', alignContent: 'center', alignItems: 'center', display: 'flex' }} >

        <div style={{ border: '1px solid white', padding: '5px', margin: '5px', flexGrow: '1', display: 'flex', backgroundColor: 'white', borderRadius: '5px' }} className="item">
          <img style={{ height: logoHeight, width: logoWidth }} src={GitimgUrl} />
          <br></br>
          { !showMobileBtn && <a style={{ color: 'black', marginLeft: '20px' }} href={GitwebLink} >{Gittitle}</a> } 
          { showMobileBtn && <Button style={{ color: 'white', marginLeft: '20px', backgroundColor:'black' }} >{Gittitle}</Button>  }
        </div>

        <br></br>

        <div style={{ border: '1px solid white', padding: '5px', margin: '5px', flexGrow: '1', display: 'flex', backgroundColor: 'white', borderRadius: '5px' }} className="item">
          <img style={{ height: logoHeight, width: logoWidth }} src={YTimgUrl} />
          <br></br>
        
          { !showMobileBtn && <a style={{ color: 'black', marginLeft: '20px' }} href={YtwebLink} >{Yttitle}</a> }
          { showMobileBtn && <Button style={{ color: 'white', marginLeft: '20px', backgroundColor:'black' }} >{Yttitle}</Button>  }
         
        </div>

      </div>
    </>

  )
}
