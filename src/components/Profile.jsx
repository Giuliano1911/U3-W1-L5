import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import avatar from './assets/avatar.png'

function Profile() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-12 col-md-10 col-lg-8">
          <Row>
            <Col>
              <h1 className="big-text">Edit Profile</h1>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-between">
            <Col className="col-8 col-md-4">
              <div className="position-relative mb-5">
                <img src={avatar} alt="Avatar" className="img-fluid" />
                <a className="text-white" href="index.html">
                  <span className="position-absolute bottom-0 start-0 p-1 px-2 mb-2 ms-2 small-text bg-dark border border-2 border-white rounded-circle">
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </a>
              </div>
            </Col>
            <Col className="col-12 col-md-8">
              <p className="bg-secondary p-1 ps-2">Strive Student</p>
              <p className="h4 mt-5 opacity-75">Language:</p>
              <Dropdown className="align-content-center my-3">
                <Dropdown.Toggle
                  className="btn btn-dark px-3 border border-1 border-white dropdown-toggle rounded-0"
                  role="button"
                >
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu bg-black">
                  <Dropdown.Item>
                    <a className="dropdown-item text-white" href="index.html">
                      English
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a className="dropdown-item text-white" href="index.html">
                      Italian
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a className="dropdown-item text-white" href="index.html">
                      French
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr />
              <p className="h4 mt-4 opacity-75">Maturity Settings:</p>
              <button className="text-uppercase text-white opacity-75 p-1 mt-1 bg-scuro border border-0">
                All Maturity Ratings
              </button>
              <p className="text-white-50 mt-2">
                Show titles of
                <span className="text-white">all maturity ratings</span> for
                this profile
              </p>
              <a
                className="btn btn-dark border border-1 border-white rounded-0 opacity-50 text-uppercase small-text"
                href="index.html"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                E d i t
              </a>
              <hr />
              <p className="h4 mt-4 opacity-75">Autoplay controls</p>
              <div className="form-check mb-2">
                <input
                  className="form-check-input bg-dark rounded-0 h5"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label opacity-75"
                  htmlFor="flexCheckDefault"
                >
                  Autoplay next episode in a series on all devices
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input bg-dark rounded-0 h5"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label opacity-75"
                  htmlFor="flexCheckChecked"
                >
                  Autoplay previews while browsing on all devices
                </label>
              </div>
            </Col>
            <hr className="mt-3" />
            <Row className="flex-column flex-md-row mb-3">
              <Col className="col-6 col-md-3 d-flex mb-3">
                <a
                  className="btn bg-white flex-grow-1 fw-bold border border-1 border-white rounded-0 text-uppercase"
                  href="index.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Save
                </a>
              </Col>
              <Col className="col-6 col-md-3 d-flex mb-3">
                <a
                  className="btn btn-dark text-white flex-grow-1 opacity-50 fw-bold border border-1 border-white rounded-0 text-uppercase"
                  href="index.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cancel
                </a>
              </Col>
              <Col className="col-10 col-md-6 d-flex mb-3">
                <a
                  className="btn btn-danger text-white flex-grow-1 opacity-50 fw-bold border border-1 border-white rounded-0 text-uppercase"
                  href="index.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Delete Profile
                </a>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
