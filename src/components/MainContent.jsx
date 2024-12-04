import Hero from './Hero'
import MyCarousel from './Carousel'
import { Component } from 'react'

class MainContent extends Component {
  render() {
    return (
      <>
        <Hero />
        <MyCarousel search={'Harry Potter'} />
        <MyCarousel search={'Cars'} />
        <MyCarousel search={'Star Wars'} />
      </>
    )
  }
}
export default MainContent
