// import React, { useContext, useState } from 'react'
// import { moviesContext } from '../context/moviesContext'

// export default function Counter() {

//     const [count,setCount] = useContext(moviesContext)
//     console.log(test)
//   return (
//     <div className='text-center'>
//       <h1>counter component</h1>
//       <p className='text-danger'>{count}</p>
//       <button onClick={()=>setCount(count+1)} className='btn btn-success'>+</button>
//       <button onClick={()=>setCount(count-1)} className='btn btn-danger'>-</button>
//     </div>
//   )
// }

import React, { useState } from "react";
 
export  function Counter() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <div className="App">
            <h2>Add Image:</h2>
<input type="file" onChange={handleChange} />
<img src={file} />
 
        </div>
 
    );
}
 
export default Counter;