import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import {addMovie, editMovie, getMovieById} from '../API/ProductAPI'
export default function MoviesForm() {
 const navigate = useNavigate();
 const {id} = useParams();
  const [movie, setMovie] = useState({
    "movie_name":'',
    "IMDb_rating":'',
    "publication_date":'',
    "duration": '',
    "img_movie" : '',
  });
const changeHandler = (e)=>{
  setMovie({
    ...movie,
    [e.target.name] : e.target.value
  })
}

const submitHandler = async (e)=>{
e.preventDefault();
if (id==0) {
addMovie(movie)
}
else{
 await editMovie(id,movie)
}
navigate('/movies')
}
useEffect(()=>{
if (id!=0) {
  const fetchMovie =async ()=>{
    const response = await getMovieById(id)
    setMovie(response.data)
    }
    fetchMovie()
}
},[])
  return (
    <div>
<div className="container mt-5">
<Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" name='movie_name' value={movie.movie_name} onChange={changeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>IMDb rating</Form.Label>
        <Form.Control type="number" placeholder="Enter IMDb rating" name='IMDb_rating' value={movie.IMDb_rating} onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>publication date</Form.Label>
        <Form.Control type="number" placeholder="Enter publication date" name='publication_date' value={movie.publication_date} onChange={changeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>duration</Form.Label>
        <Form.Control type="text" placeholder="Enter duration" name='duration' value={movie.duration} onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>movie img source </Form.Label>
        <Form.Control type="text" placeholder="Enter movie source" name='img_movie' value={movie.img_movie} onChange={changeHandler}/>
      </Form.Group>
      <Button variant="success" type="submit">
       {id==0? 'Add New Movie':"Edit Your Movie"}
      </Button>
    </Form>
</div>
    </div>
  )
}
