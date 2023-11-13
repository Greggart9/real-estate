import React from 'react'
import './Header.css';

const Header = ({allhouses}) => {
    let countries = []
    if(allhouses){
    //  for (let house of allhouses ){
    //     countries.push(house.country);

    //  }
     

    //  countries = new Set(countries)

    //  countries = Array.from(countries)
    //  console.log(countries);

    countries = Array.from(new Set(allhouses.map(
        (house) => {
            return house.country
        })));
        console.log(countries);
    }
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
            <select className='select_container'>
                {countries.map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
        </div>
    </div>

    </>
  )
}

export default Header