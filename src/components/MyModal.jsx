import { Component } from 'react'
import { Modal } from 'react-bootstrap'

class MyModal extends Component {
  render() {
    return (
      <Modal.Dialog className="mt-3">
        <Modal.Header className=" justify-content-between">
          <Modal.Title>{this.props.movie.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Data di uscita: {this.props.movie.Year}</p>
        </Modal.Body>
      </Modal.Dialog>
    )
  }
}
export default MyModal
