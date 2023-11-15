import React from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({allhouses}) => {
    const navigate = useNavigate()
    let countries = []
    if(allhouses){
        
    countries = Array.from(new Set(allhouses.map(
        (house) => {
            return house.country
        })));
    }
    const handleChange = (e) =>{
        navigate(`/Return/${e.target.value}`);
       }
       countries.unshift(null)
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
            <select onChange={handleChange} className='select_container'>
                {countries.map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
        </div>
    </div>

    </>
  )
}

export default Header