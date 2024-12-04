import { Card } from 'react-bootstrap'

function Comment(props) {
  return (
    <Card className=" mt-3 text-center">
      <Card.Text>{props.comm.rate}</Card.Text>
      <Card.Text>{props.comm.comment}</Card.Text>
    </Card>
  )
}

export default Comment
