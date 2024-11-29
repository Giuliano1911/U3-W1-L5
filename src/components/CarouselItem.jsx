import { Component } from 'react'
import { Card } from 'react-bootstrap'
import MyModal from './MyModal'

class MyCarouselItem extends Component {
  state = {
    isClicked: false,
  }

  render() {
    return (
      <Card
        className="p-2 bg-dark border-0"
        role="button"
        onClick={(e) => {
          this.setState({ isClicked: !this.state.isClicked })
        }}
      >
        <Card.Img
          src={this.props.mov.Poster}
          className=" w-75 mx-auto animation"
        />
        {this.state.isClicked && <MyModal movie={this.props.mov} />}
      </Card>
    )
  }
}

export default MyCarouselItem
