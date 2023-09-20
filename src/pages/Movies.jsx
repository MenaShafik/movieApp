import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { useData } from '../Hooks/useGetData';
import {getMovies,deleteMovie} from '../API/ProductAPI'
export default function Movies() {
const [movies,setMovies] = useData(getMovies);

  return (
    <div className='alert alert-secondary text-center'>
      <h1>Movies Page</h1>
      <div className="container">
     {
    movies &&    movies.map((movie)=>{
const deleteMovieHandler =async (id)=>{
  await deleteMovie(id)
let DeleteMovie = movies.filter((movie)=>
movie.id!=id)
setMovies(DeleteMovie)
}

return(
    <Card className='d-inline-flex mx-4 my-5' key={movie.id} style={{ width: '20rem', }}>
    <Card.Img variant="top" src={movie.img_movie}/>
    <Card.Body>
      <Card.Title>{movie.movie_name}</Card.Title>
      <Card.Text>
      </Card.Text>
      <NavLink>
      <button className='btn btn-outline-danger m-1' onClick={()=>deleteMovieHandler(movie.id)}>Delete</button>
     </NavLink>
     <NavLink to={`/movies/${movie.id}`}>
<Button variant="outline-primary m-1">movie info</Button>
     </NavLink>
     <NavLink to={`/movies/${movie.id}/edit`}>
        <button className='btn btn-outline-warning m-1'>Edit</button>
      </NavLink>
    </Card.Body>
  </Card>
)
        })
     }
      </div>
    </div>
  )
}
