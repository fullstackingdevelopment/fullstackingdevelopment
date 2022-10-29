import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Social media logos.png";
import 'animate.css';
import { ContactCard } from "./ContactCard";
import Ghlogo from "../assets/img/ghlogo1.png";
import Ytlogo from "../assets/img/youtubelogo1.png"

export const Contact = () => {


  const socialMedia = [
    {
      Dev: "Antonio Erick",
      Gittitle: "@antonio-erick",
      Yttitle: "@Antonio",
      GitimgUrl: Ghlogo,
      YTimgUrl: Ytlogo,
      GitwebLink: "https://github.com/antonio-erick",
      YtwebLink: "https://www.youtube.com/channel/UCdgXbZpOcUWBYVLC7WQsajg",

    },
    {
      Dev: "Gio",
      Gittitle: "@codingcodewhilegoofin",
      Yttitle: "@_GMDev",
      GitimgUrl: Ghlogo,
      YTimgUrl: Ytlogo,
      GitwebLink: "https://github.com/codingcodewhilegoofin",
      YtwebLink: "https://www.youtube.com/channel/UCKzykl0XjPKWtr4U3cszSAw",

    },

  ];


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col style={{ paddingBottom: '25px'}} size={12} md={6}>

            <h1 style={{color: 'white'}}> Contact Us</h1>
            <img className={"animate__animated animate__zoomIn"} src={contactImg} alt="Contact Us" />


          </Col>

          <Col size={12} md={6}>

            {
              socialMedia.map((project, index) => {
                return (
                  <>

                    <ContactCard
                      key={index}
                      {...project}
                    />

                    <br></br>

                  </>
                )
              })
            }

          </Col>
        </Row>
      </Container>
    </section>
  )
}
