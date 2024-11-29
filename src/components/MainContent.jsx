import Hero from './Hero'
import MyCarousel from './Carousel'
import { Component } from 'react'

class MainContent extends Component {
  render() {
    return (
      <>
        <Hero />
        <MyCarousel search={'Godzilla'} />
        <MyCarousel search={'Cars'} />
        <MyCarousel search={'Lord Of The Rings'} />
      </>
    )
  }
}
export default MainContent
