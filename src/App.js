import './App.css';
import Header from './Header'
import Feature from './Feature'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Return from './Return'

function App(params) {
    let [allhouses, setAllHouses] = useState([]);

    useEffect(()=>{

        fetch('/houses.json')
        .then((data) => data.json())
        .then((json) => {
            setAllHouses(json);
            console.log(allhouses);
        })
    }, [])

    return <>
    <BrowserRouter>
    <Header allhouses={allhouses}/>
       <Routes>
           <Route path='/' element={ <Feature allhouses={allhouses}/>}/>
           <Route path='/Return/:country' element={<Return allhouses={allhouses}/>}/>
           <Route path='/Feature/: house' element={<} />
            
           
       </Routes>
    </BrowserRouter>
    </>
    
    
}



export default App ; 