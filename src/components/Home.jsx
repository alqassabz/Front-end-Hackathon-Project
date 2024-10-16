import React from 'react' // Custom CSS for styling and animation
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import Ghosts from './Ghosts'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // 6 seconds between automatic scroll
    arrows: false // No manual arrows if you want automatic only
  }

  return (
    <>
    <Slider {...settings}>
      
      <div className="carousel-section">
        <h1>Welcome to Our Amusement Park</h1>
        <p>Where dreams do come true</p>
        <img src="../../public/" alt="" />
      </div>
      <div className="carousel-section ridesPoster">
        <h1>Enjoy Thrilling Rides!</h1>
        <Link to="rides/">
          <button className="ride-button">Learn More</button>
        </Link>
      </div>
      <div className="carousel-section foodPoster">
        <h1>Devour Yummy Food!</h1>
        <Link to="foods/">
          <button className="ride-button">Learn More</button>
        </Link>
      </div>
      <div className="carousel-section hotelPoster">
        <h1>Stay In the Most Luxurious Hotels</h1>
        <Link to="hotels/">
          <button className="ride-button">Learn More</button>
        </Link>
      </div>
      <div className="carousel-section giftsPoster">
        <h1>Grab Amazing Souvenirs</h1>
        <Link to="gifts/">
          <button className="ride-button">Learn More</button>
        </Link>

      </div>
      
    </Slider><Ghosts />
    </>
  )
}

export default Home
