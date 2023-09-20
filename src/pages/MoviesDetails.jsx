import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'

export default function MoviesDetails() {
  const {id} =useParams();
  const [movie,setMovie] = useState(0);
  useEffect( ()=>{
    const getMovie = async ()=>{ 
const response =      
await axios.get(`http://localhost:3005/movies/${id}`)
setMovie(response.data)  }
  getMovie();
},[])
  return ( 
    <div className='alert alert-dark'>
      <div className="container">
        <div className="row">
          <div className="col">
             <h1>movie Id : {id}</h1>
    <p className='fs-2'>movie name : {movie.movie_name}</p>
    <p className='fs-2'>IMDb rating : {movie.IMDb_rating}</p>
    <p className='fs-2'>publication date : {movie.publication_date}</p>
    <p className='fs-2'>movie duration : {movie.duration}</p>
    <NavLink to="/movies" className='btn btn-success fs-2'>Back To Movies</NavLink>
          </div>
          <div className='col'>
      <img className='rounded' style={{ width: '21rem' }} src={movie.img_movie} alt="" />
      </div>
        </div>
      </div>
    </div>
  )
}
