import React, {useRef, useState} from 'react'
import './House.css'; 


const House = ({house}) => {
  const iconref = useRef()
  const[showform, setShowform] = useState(false);
  let [userData, setUserData] = useState({
    name: '',
    email: '',
    textarea:''
  })
  
        const handleClick = () => {
          setShowform(!showform)

          // document.addEventListener('click', (e) =>{
          //   if (e.target !== iconref.current)
          //   setShowform(false)
          // })
          
        }
        const HandleChange = (e) => {
          // console.log(e.target.value)
          // if (e.target.value === 'name') {
          //   const name = e.target.value
          //   console.log(name);
          // }
          // if (e.target.value === 'Email') {
          //   const Email = e.target.value
          //   console.log(Email);
          // }
          // if (e.target.value === 'textarea') {
          //   const textarea = e.target.value
          //   console.log(textarea);
          // }

        setUserData ({...userData,  [e.target.id]: e.target.value})
          
        }
        console.log(userData)



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
           <img  onClick= {handleClick} src={`/images/mail.png`} alt=''/>
        </div>

        {showform && ( <div className='Form01'>
            <div className='form_content'>
              <form>
                <label for='name'>Name</label>
                <input type='text' placeholder='Name' id='name' value={userData.name} onChange={HandleChange}/> 

                <label for='Email'>Email address</label>
                <input type='email' placeholder='Email' id='email' value={userData.email} onChange={HandleChange} />

                <label for='remark'>Remarks</label>
                <input type='textarea' id='textarea' value={userData.textarea} onChange={HandleChange}/>

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