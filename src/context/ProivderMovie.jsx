import React, { useState } from 'react';
import { moviesContext } from './moviesContext';
export default function ProivderMovie(props) {
  const [count,setCount] = useState(0);
  return (
    <moviesContext.Provider value={{count,setCount}}>
{props.children}
</moviesContext.Provider>
  )
}
