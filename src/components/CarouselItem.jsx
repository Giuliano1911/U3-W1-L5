import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import MyModal from './MyModal'

const MyCarouselItem = (props) => {
  const navigate = useNavigate()
  return (
    <Card
      className="p-2 bg-dark border-0"
      role="button"
      onClick={(e) => {
        navigate('/details/' + props.mov.imdbID)
      }}
    >
      <Card.Img src={props.mov.Poster} className="mx-auto animation" />
    </Card>
  )
}

export default MyCarouselItem
