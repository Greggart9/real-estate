import React, {useRef, useState} from 'react'
import './House.css'; 


const House = ({house}) => {
  const iconref = useRef()
  const[showform, setShowform] = useState(false);
  
        const handleClick = () => {
          setShowform(!showform)

          document.addEventListener('click', (e) =>{
            if (e.target !== iconref.current)
            setShowform(false)
          })
        }



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
           <img ref={iconref} onClick= {handleClick} src={`/images/mail.png`} alt=''/>
        </div>

        {showform && ( <div className='Form01'>
            <div className='form_content'>
              <form>
                <label for='name'>Name</label>
                <input type='text' placeholder='Name' id='Name'/> 

                <label for='Email'>Email address</label>
                <input type='email' placeholder='Email' id='Email' />

                <label for='remark'>Remarks</label>
                <input type='textarea'/>

                <button type='submit'>Submit</button>

              </form>
            </div>

        </div>)}

        </div>
      </div>

      </>
    )

}

export default House