import { Nav, Navbar } from 'react-bootstrap'

import logo from './assets/netflix_logo.png'
import avatar from './assets/avatar.png'

function MyNav(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="navbar navbar-dark bg-dark align-items-lg-center flex-lg-row-reverse px-4"
    >
      <div className="d-flex gap-3">
        <a href="index.html" className="text-white me-4 me-lg-0">
          <i className="fas fa-search"></i>
        </a>
        <button
          className=" align-self-center text-white border-0 bg-dark p-0 pb-3"
          onClick={() => {
            props.toSettings()
          }}
        >
          <i className="fas fa-cog"></i>
        </button>
        <p className="text-white d-none d-lg-block mb-0">KIDS</p>
        <a
          href="index.html"
          className="text-white d-none d-lg-block icon-link-hover"
        >
          <i className="fas fa-bell"></i>
        </a>
        <div className="d-none d-lg-flex">
          <button
            className=" border-0 bg-dark"
            onClick={() => {
              props.toProfile()
            }}
          >
            <img
              className="logo"
              src={avatar}
              alt="Netflix avatar"
              id="avatar"
              style={{ width: '40px' }}
            />
          </button>
        </div>
      </div>
      <div className="d-flex d-lg-none">
        <button
          className=" border-0 bg-dark"
          onClick={() => {
            props.toMain()
          }}
        >
          <img
            src={logo}
            id="netflix-logo"
            alt="Netflix logo"
            style={{ width: '120px' }}
          />
        </button>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="d-none d-lg-flex">
          <button
            className=" border-0 bg-dark"
            onClick={() => {
              props.toMain()
            }}
          >
            <img
              src={logo}
              id="netflix-logo"
              alt="Netflix logo"
              style={{ width: '120px' }}
            />
          </button>
        </div>
        <Nav className="offcanvas-header">
          <Nav.Link className=" pe-2 p-lg-3">Home</Nav.Link>
          <Nav.Link className=" pe-2 p-lg-3">Tv Show</Nav.Link>
          <Nav.Link className=" pe-2 p-lg-3 active">Movies</Nav.Link>
          <Nav.Link className=" pe-2 p-lg-3">Recently Added</Nav.Link>
          <Nav.Link className=" pe-2 p-lg-3">My List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
