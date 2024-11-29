import { Dropdown, Container, Row, Col } from 'react-bootstrap'

function Hero() {
  return (
    <Container className="pt-3 mb-4 text-white">
      <Row className="justify-content-between">
        <Col className="d-flex">
          <h1 className="text-nowrap">Movies</h1>
          <Dropdown className=" align-content-center ps-3">
            <Dropdown.Toggle
              className="btn btn-dark border border-1 border-white dropdown-toggle rounded-0"
              role="button"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Drama</Dropdown.Item>
              <Dropdown.Item>Adventure</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end pb-2">
          <button className="bg-dark border border-1 rounded-0 border-white px-4 opacity-75">
            <i className="fas fa-stream align-content-center text-white"></i>
          </button>
          <button className="bg-dark border border-1 rounded-0 border-white px-4 ms-2 opacity-50">
            <i className="fas fa-th-large align-content-center text-white"></i>
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
