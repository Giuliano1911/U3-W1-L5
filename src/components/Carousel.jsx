import { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import MyCarouselItem from './CarouselItem'
import Loading from '../components/Loading'
import Error from '../components/Error'

class MyCarousel extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  responsive = {
    desktop: {
      breakpoint: { max: 994, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktopLg: {
      breakpoint: { max: 3000, min: 994 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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
          isLoading: false,
          isError: false,
        })
      })
      .catch((err) => {
        console.log('errore', err)
        this.setState({ isLoading: false, isError: true })
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <Container className="mt-5">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <h2>{this.props.search}</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={this.responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={this.props.deviceType}
          itemClass="carousel-item-padding-40-px"
        >
          {this.state.movies.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <MyCarouselItem mov={movie} />
              </div>
            )
          })}
        </Carousel>
      </Container>
    )
  }
}

export default MyCarousel
