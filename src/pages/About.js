import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center align-items-center my-4 flex-column">
          <h2 className="fw-bold">Profile</h2>
          <p className="fw-light">Fullstack Developer</p>
        </div>

        <Row>
          <Col>
            <h5 className="fw-bold mb-3 text-center">About Me</h5>
            <p className="lh-lg">
              I am a fullstack developer who likes technology and programming,
              especially in the field of website development. I have experience
              in programming since getting to know coding after graduating from
              high school, I studied independently and then sharpened it again
              at dumbways.id bootcamp
            </p>
          </Col>
          <Col className="text-center">
            <Figure>
              <Figure.Image
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/9b775fb1c1015e6eb9088881/vbb.jpg"
                alt="profile"
                width={200}
              />
              <Figure.Caption>
                Image From{" "}
                <a
                  href="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/9b775fb1c1015e6eb9088881/vbb.jpg"
                  target="_blank"
                >
                  Link
                </a>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <h5 className="fw-bold mb-3 text-center">Details</h5>

            <p className="fw-bold">Name :</p>
            <p>Ahmad Mughni</p>
            <p className="fw-bold">Age :</p>
            <p>20 Years</p>
            <p className="fw-bold">Location :</p>
            <p>Jl.margaluyu no.27, Kota Cimahi Jawa Barat 40525</p>
          </Col>
        </Row>
      </Container>

      <div className="my-5 more-details py-3">
        <Container>
          <h4 className="fw-bold mt-3 mb-5 text-center">More Details</h4>

          <Row>
            <Col md={7}>
              <h5 className="fw-bold">Education</h5>

              <ul>
                <li>
                  <p className="fw-bold mt-4">Bootcamp Dumbways.id</p>
                  <p>
                    <span className="fw-bold">FULLSTACK | </span>Jan 2022 - Mar
                    2022
                  </p>
                  <ul>
                    <li>Learning Web Development using React</li>
                    <li>Learning Mobile Development usding React Native</li>
                    <li>Learning Backend using Node.js and Express.js</li>
                    <li>Build 2 Website app and 1 Mobile app</li>
                  </ul>
                </li>
                <li>
                  <p className="fw-bold mt-4">SMA Negeri 1 Pacet</p>
                  <p>
                    <span className="fw-bold">IPA | </span>
                    Jan 2022 - Mar 2022
                  </p>
                  <ul>
                    <li>
                      graduated with an IPA major, while in school following
                      several extracurriculars such as multimedia and basketball
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col md={5}>
              <h5 className="fw-bold">Experience</h5>

              <ul>
                <li>
                  <p className="fw-bold mt-4">Fijay Komunika </p>
                  <p>Apr 2019 - Jan 2022</p>
                  <ul>
                    <li>Serves about 100 customers every day</li>
                    <li>Educate about networks and providers to customers</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
