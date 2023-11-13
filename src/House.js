import React, {useState} from 'react'
import './House.css'; 


const House = ({house}) => {
  

      const handleClick = () => {
        // Your event handling logic here
        document.getElementsByClassName('Form01').style.display = 'block';
      };



    return (
      <>

            <div className='country'>
                <h4>{house.country}</h4>
            </div>

            <div className='address'>
                <h2>{house.address}</h2>
            </div>
      <div className='left_right'>

        <div className='left'>

            <div className='images'>
              <img src={`/images/${house.photo}.jpeg`} alt=''/>
            </div>
        </div>

        <div className='right'>

        <div className='price'>
          <p>{'$' +house.price}</p>
        </div>

        <div className='description'>
          <p>{house.description}</p>
        </div>

        <div className='icon'>
           <img onClick={handleClick} src={`/images/mail.png`} alt=''/>
        </div>

        <div className='Form01'>
            <div className='form_content'>
              <form>
                <input type='text' placeholder='Name' id='Name'/> <br/>
                <input type='email' placeholder='Email' id='Email' />

              </form>
            </div>

        </div>

        </div>
      </div>

      </>
    )

}

export default House