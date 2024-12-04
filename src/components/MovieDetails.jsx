import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import Error from './Error'
import Loading from './Loading'

function MovieDetails(props) {
  const [movie, setMovie] = useState({})
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isLoadingc, setIsLoadingc] = useState(true)
  const [isErrorc, setIsErrorc] = useState(false)

  const apiKey =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUwNmM0YTIyY2EwMzAwMTU0ODg0ZTIiLCJpYXQiOjE3MzMzMjM4NTAsImV4cCI6MTczNDUzMzQ1MH0.shBOqp174cmB_PcFsp09Q2G_9R9FUw4Yi8latTmXz-Q'

  const params = useParams()

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=e0b160d3&i=' + params.id)
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('No ok')
        }
      })
      .then((data) => {
        console.log(data)
        setMovie(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('errore', err)
        setIsLoading(false)
        setIsError(true)
      })
  }, [params.id])

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + params.id, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('No ok')
        }
      })
      .then((data) => {
        console.log(data)
        setComments(data)
        setIsLoadingc(false)
      })
      .catch((err) => {
        console.log('errore', err)
        setIsLoadingc(false)
        setIsErrorc(true)
      })
  }, [params.id])

  return (
    <Container>
      <Row className=" justify-content-center">
        <Col xs={8} md={4}>
          {isError && <Error />}
          {isLoading && <Loading />}
          {!isError && !isLoading && (
            <>
              <Card className="text-center">
                <Card.Img src={movie.Poster} className="mx-auto" />
                <Card.Title>
                  {movie.Title}, {movie.Year}
                </Card.Title>
              </Card>
            </>
          )}

          {isErrorc && <Error />}
          {isLoadingc && <Loading />}
          {!isErrorc && !isLoadingc && (
            <>
              {comments.map((comment) => {
                return (
                  <div key={comment._id}>
                    <Comment comm={comment} />
                  </div>
                )
              })}
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
