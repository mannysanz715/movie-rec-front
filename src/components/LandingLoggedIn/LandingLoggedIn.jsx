import * as movieService  from '../../services/movieService'
import MovingShowing from '../../components/MovieShowing/MovieShowing'
import { useState, useEffect } from 'react'

function LandingLoggedIn  ()  {
  const [movieRec, setMovieRec] = useState({})
  const [genre, setGenre] = useState('')
  console.log(movieRec)
  async function handleMovieRequest(e){
    e.preventDefault()
    console.log(e)
    // const genre = e.target.value
    // try {
    //   let movie = {
    //     title : '',
    //     poster_path: '',
    //   }
    //   while(!movie.poster_path){
    //     movie = await movieService.getMovieRec(genre)
    //   }
    //   setGenre(e.target.textContent)
    //   setMovieRec(movie)
    // } catch (error) {
    //   console.log(error)
    // }
  }
  return ( 
    <>
      <h3>What do I watch tonight?</h3>
        <h5>Pick a genre</h5>

        <form id='movieId' onSubmit={handleMovieRequest}>
          <select name='movieId'>
            <option value='27'>Horror</option>
            <option value='28'>Action</option>
            <option value='12'>Adventure</option>
            <option value='16'>Annimation</option>
            <option value='35'>Comedy</option>
            <option value='80'>Crime</option>
            <option value='99'>Documentary</option>
            <option value='18'>Drama</option>
            <option value='10751'>Family</option>
            <option value='14'>Fantasy</option>
            <option value='36'>History</option>
            <option value='10402'>Music</option>
            <option value='9648'>Mystery</option>
            <option value='10749'>Romance</option>
            <option value='878'>Sci Fi</option>
            <option value='10770'>TV Movie</option>
            <option value='53'>Thriller</option>
            <option value='10752'>War</option>
            <option value='37'>Western</option>
          </select>
          <input type='submit' value='search'/>
        </form>
        <MovingShowing movie={movieRec} genre={genre}/>
    </>
  );
}

export default LandingLoggedIn;