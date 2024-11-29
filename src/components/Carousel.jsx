import { Component } from 'react'

class Carousel extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  getMovies = () => {
    fetch(
      'http://www.omdbapi.com/?i=tt3896198&apikey=e0b160d3&s=' +
        this.props.search
    )
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
        this.setState({
          movies: data.Search,
        })
      })
      .catch((err) => {
        console.log('errore', err)
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <>
        <Carousel>
          {this.state.movies.map((movie) => {
            return (
              <Carousel.Item key={movie.id}>
                <img alt={movie.Title} src={movie.Poster} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </>
    )
  }
}

export default Carousel
