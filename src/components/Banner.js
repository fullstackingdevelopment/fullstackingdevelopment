import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/FSDLogo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["_GMDev", "AntionioEric", "TeamMember3"];
  const period = 1000;

  const [windowSizeX, setwindowSizeX] = useState(window.innerWidth);

  let showExtras;
  let typingAnimation;;
  let bannerOffset;
  let tagline;
  let devDescription;

  if (windowSizeX[0] < 700) {
    showExtras = false;
    typingAnimation = 'wrap-mobile';
    bannerOffset = 'banner-mobile';
    tagline = 'tagline-mobile';
    devDescription = 'p-mobile';
  }
  else {
    showExtras = true;
    typingAnimation = 'wrap';
    bannerOffset = 'banner';
    tagline = 'tagline';
    devDescription = 'p';
  }

  useEffect(() => {

    function updateSize() {
      setwindowSizeX([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    console.log(windowSizeX[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSizeX])

  useEffect(() => {
    window.scrollTo(0, 0)
    setwindowSizeX([window.innerWidth, window.innerHeight]);
   
  }, [])

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className={bannerOffset} id="home">
      <Container>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={7}>

            <div >
              <span
                className={tagline}>
                Full Stack-ing Development.com
              </span>

              <h1>
               
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "_GMDev", "AntionioEric", "TeamMember3" ]'>
                  <span
                    className={typingAnimation}
                  >
                    {`Our team @${text}`}
                  </span>
                </span>
              </h1>

              <p className={devDescription}>
                We are a team yay! 
              </p>

              <button 
                onClick={() => console.log('connect')}>
                  Let’s Connect <ArrowRightCircle size={25} />
              </button>

            </div>
          </Col>

          <Col xs={12} md={6} xl={5}>

            <div >
              <img 
                src={headerImg} 
                alt="Header Img" 
              />
            </div>

          </Col>

        </Row>
      </Container>
    </section>
  )
}
