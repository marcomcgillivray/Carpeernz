import './Styles.css';
import { Link } from 'react-router-dom';
import {useRef} from 'react';
import Volkswagen from '../assets/volkswagen.png';
import Skyline from '../assets/skyline.png';

const Hero = () => {
    const scrollRef = useRef(null);

    const scrollToPosition = e => {
        e.preventDefault();
      // Calculate the desired scroll position in pixels based on your reference element
      const referenceElement = scrollRef.current;
      
      if (referenceElement) {
        const referenceElementHeight = referenceElement.clientHeight; // Height of the reference element
        const desiredScrollPosition = referenceElement.offsetTop + referenceElementHeight + 200; // Scroll 200px below the reference element
  
        // Scroll to the desired position
        window.scrollTo({
          top: desiredScrollPosition,
          behavior: 'smooth', // Optionally, add smooth scrolling behavior
        });
      }
    };


    return (
        <section id='hero'>
                <div className='blob'>
                    <img src={Skyline} alt='background skyline'></img>
            </div>
            <div className="container">

                <div className='hero-content'>
                    <p className='pre-hero'>
                        Plan Your Trip Now
                    </p>
                    <h1>
                        Save <span>Big</span> with NZ's Most Trusted Peer to Peer Car Rental
                    </h1>
                    <p>
                        Don't get charged an arm and a leg by car rental companies when planning your next trip
                    </p>
                    <p>
                        Rent from your neighbor with CarPair NZ - NZ's biggest and most trusted peer to peer car lending platform
                    </p>
                    <div className='hero-buttons'>
                    <a className='btn' href='/' onClick={scrollToPosition} ref={scrollRef}>
                        Book Now
                    </a>
                    <br></br>

                    <Link className='btn-alt' to='/listcar'>
                        Lend Your Car
                    </Link>
                    </div>
                <div className='hero-images'>
                    <div className='car'>
                        <img src={Volkswagen} alt='Volkswagen Golf'></img>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;