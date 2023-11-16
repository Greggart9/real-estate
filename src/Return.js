import { logDOM } from '@testing-library/react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Return = ({allhouses}) => {
    const {country} = useParams()
    const navigate = useNavigate()
    const filteredhouses = allhouses.filter((house) => house.country === country)
    const handleClick = (e) => {
        const id = e.currentTarget.id
        console.log(id);
        navigate(`/HouseQuery/${id}`)

    }
  return (
   <>
        <div className='result' style={{marginBottom: '10px'}}>
            <p>Result for:{}</p>

        </div>                                                      

        <table width='90%' cellPadding={7} style={{borderCollapse: 'collapse'}}>
            <tbody>
                {
                    filteredhouses.map((houses) => {
                        return(
                            <tr onClick={handleClick} key={houses.id} id={houses.id}>
                                <td style={{borderTop: '1.5px solid grey', padding: '10px 0'}}>{houses.address}</td>
                                <td style={{borderTop: '1.5px solid grey', padding: '10px 0'}}>{houses.price}</td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
   </>
  )
}

export default Return