import { Container, Row, Col, Button } from 'react-bootstrap'
import avatar from './assets/avatar.png'

function Settings() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-md-10 col-lg-8">
          <h1>Account</h1>
          <hr />
          <Row className="row-cols-1">
            <Col className=" col-md-5 d-flex flex-column">
              <h5 className="opacity-75 text-uppercase">
                Mebmership & billing
              </h5>
              <Button
                type="button"
                className="btn w-75 border border-0 small-text p-2 rounded-0 shadow-sm mb-4"
              >
                Cancel Membership
              </Button>
            </Col>
            <Col className="col-md-7">
              <Row className="justify-content-between small-text">
                <Col>
                  <p className="m-0">student@strive.school</p>
                  <p className="opacity-75 m-0">Password:******</p>
                  <p className="opacity-75 m-0">Phone:1111111111</p>
                </Col>
                <Col>
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Change account email
                    </a>
                  </p>
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Change password
                    </a>
                  </p>
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Change phone number
                    </a>
                  </p>
                </Col>
                <hr className="mt-2" />
                <Col className="d-flex flex-wrap">
                  <p className="me-2 fw-bold fst-italic">
                    <i className="fab fa-paypal me-1 fst-italic"></i>PayPal
                  </p>
                  <p>admin@strive.school</p>
                </Col>
                <Col className="flex-grow-1">
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Update payment info
                    </a>
                  </p>
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Billing details
                    </a>
                  </p>
                </Col>
                <hr className="mt-2" />
                <Col className="flex-grow-1">
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Redeem gift card or promo code
                    </a>
                  </p>
                  <p className="m-0 text-end">
                    <a
                      href="index.html"
                      className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Where to buy gift cards
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <hr className="mt-2" />
            <Row className="row-cols-1">
              <Col className="col-md-5 d-flex flex-column">
                <h5 className="opacity-75 text-uppercase mb-4">Plan details</h5>
              </Col>
              <Col className="col-md-7">
                <Row className="justify-content-between small-text">
                  <Col className="d-flex">
                    <p className="m-0 fw-bold pe-1">Premium</p>
                    <p className="border border-2 font-monospace px-1">
                      ULTRA <span className="fw-bold">HD</span>
                    </p>
                  </Col>
                  <Col>
                    <p className="m-0 text-end">
                      <a
                        href="index.html"
                        className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                      >
                        Change plan
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row className="row-cols-1">
              <Col className="col-md-5 d-flex flex-column">
                <h5 className="opacity-75 text-uppercase mb-2">settings</h5>
              </Col>
              <Col className="col-md-7 small-text">
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Parental constrols
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Test partecipation
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Manage download devices
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Activate a device
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Recent: device streaming activity
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Sign out of all devices
                  </a>
                </p>
              </Col>
              <hr className="mt-2" />
              <Row className="row-cols-1">
                <Col className="col-md-5 d-flex flex-column">
                  <h5 className="opacity-75 text-uppercase mb-2">my profile</h5>
                </Col>
                <Col className="col-md-7 small-text d-flex">
                  <Col className="d-flex">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="me-1"
                      style={{ width: '25px', height: '25px' }}
                    />
                    <p className="fw-bold align-self-center">Strive Student</p>
                  </Col>
                  <div className="col small-text">
                    <p className="m-0 text-end">
                      <a
                        href="index.html"
                        className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                      >
                        Manage profiles
                      </a>
                    </p>
                    <p className="m-0 text-end">
                      <a
                        href="index.html"
                        className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                      >
                        Add profile email
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
          </Row>
          <hr />
          <Row className="row-cols-1 mb-5">
            <Col className="d-none col-md-5 d-md-flex flex-column">
              <h5 className="opacity-0">settings</h5>
            </Col>
            <Col className="ps-0 col-md-7 small-text d-flex">
              <Col>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Language
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Playback settings
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Subtitle appereance
                  </a>
                </p>
              </Col>
              <Col className="small-text">
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Viewing activity
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="index.html"
                    className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  >
                    Ratings
                  </a>
                </p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Settings
