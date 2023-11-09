import React from 'react'
import './Header.css';

const Header = ({allhouses}) => {
  return (
    <>
    <div className='HeaderContent'>
          {/* Logo */}
               <div className='logo'>
                    <div className='logoContainer'>
                        <img src={process.env.PUBLIC_URL + '/GloboLogo.png'} alt=''/>
                    </div>
                </div>

            {/* Header text */}
            <div className='textContainer'>
                <div className='textContent'>
                    <p>Providing houses all over the world</p>
                </div>
            
            </div>
    </div>

    {/* SEARCH BAR */}
    <div className='search_container'>
        <div className='search_content'>
            <label>
                <p> Look for your dream house in country</p>
            </label>
            <select>
                <option>The Netherland</option>
                <option>The Netherland</option>
                <option>The Netherland</option>
            </select>
        </div>
    </div>

    </>
  )
}

export default Header