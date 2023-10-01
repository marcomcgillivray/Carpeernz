import { useState, useRef } from 'react';
import Logo from '../assets/1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const scrollRef = useRef(null);

    const scrollToPosition = e => {
        e.preventDefault();
      // Calculate the desired scroll position in pixels based on your reference element
      const referenceElement = scrollRef.current;
      
      if (referenceElement) {
        const referenceElementHeight = referenceElement.clientHeight; // Height of the reference element
        const desiredScrollPosition = referenceElement.offsetTop + referenceElementHeight + 700; // Scroll 200px below the reference element
  
        // Scroll to the desired position
        window.scrollTo({
          top: desiredScrollPosition,
          behavior: 'smooth', // Optionally, add smooth scrolling behavior
        });
      }
    };
    const [hamburgerClicked, setHamburgerClicked] = useState(false);

    const hamburgerClickHandler = (e) => {
        e.preventDefault();
        setHamburgerClicked(!hamburgerClicked);
    };

    return (
        <section id='navigation'>
        <div className='background-color-div'>
            
        </div>
        <div className='container'>
    
            <div className='logo'>
                <img src={Logo} alt='logo'></img>
            </div>
    
    
            <div className='menu-button' onClick={hamburgerClickHandler}>
    
                <span></span>
                <span></span>
                <span></span>
            </div>
    
            <div className={!hamburgerClicked ? 'menu-container' : 'menu-container-active'}>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>LEND YOUR CAR</li>
                        <li onClick={scrollToPosition} ref={scrollRef}>BOOK A CAR</li>
                    </ul>
                </nav>
            </div>
    
            <div className='desktop-navbar'>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li >LEND YOUR CAR</li>
                        <li onClick={scrollToPosition} ref={scrollRef}>BOOK A CAR</li>
                    </ul>
                </nav>
            </div>
    
    
        </div>
    </section>
    )
};

export default Header;