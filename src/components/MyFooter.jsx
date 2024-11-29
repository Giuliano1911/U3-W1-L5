import { Container, Row, Col } from 'react-bootstrap'

function MyFooter() {
  return (
    <Container className=" text-white opacity-75">
      <Row className=" justify-content-center">
        <Col className=" col-sm-12 col-lg-8">
          <Row className="justify-content-center">
            <Col className=" d-flex gap-3">
              <a href="index.html" className="text-white">
                <i className="fab fa-facebook-square fs-4"></i>
              </a>
              <a href="index.html" className="text-white">
                <i className="fab fa-instagram-square fs-4"></i>
              </a>
              <a href="index.html" className="text-white">
                <i className="fab fa-twitter-square fs-4"></i>
              </a>
              <a href="index.html" className="text-white">
                <i className="fab fa-youtube-square fs-4"></i>
              </a>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-4 justify-content-center py-3">
            <Col className="col-lg-3">
              <ul className="d-flex flex-column list-unstyled mb-0">
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Audio and Subtitles
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Media Center
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-lg-3">
              <ul className="d-flex flex-column list-unstyled mb-0">
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Audio Description
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Legal Notices
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-lg-3">
              <ul className="d-flex flex-column list-unstyled mb-0">
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-lg-3">
              <ul className="d-flex flex-column list-unstyled mb-0">
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    className="link-underline-opacity-0 text-white link-underline-danger opacity-75 link-underline-opacity-100-hover small-text"
                    href="index.html"
                  >
                    Corporate Information
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="pb-3">
            <Col className="">
              <a
                className="btn btn-dark border border-1 border-white rounded-0 small-text"
                href="index.html"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service Code
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="small-text opacity-75">
                ©1997-{new Date().getFullYear()} Netflix,Inc.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
