import Hero from './Hero'
import Carousel from './Carousel'

function MainContent() {
  return (
    <>
      <Hero />
      <Carousel search={'cars'} />
    </>
  )
}

export default MainContent
