import React from 'react'
import { useParams } from 'react-router-dom'

const Return = ({allhouses}) => {
    const {country} = useParams()
    const filteredhouses = allhouses.filter((house) => house.country === country)
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
                            <tr key={houses.id}>
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