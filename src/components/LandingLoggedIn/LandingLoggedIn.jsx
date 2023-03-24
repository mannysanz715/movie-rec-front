import * as movieService  from '../../services/movieService'
import MovingShowing from '../../components/MovieShowing/MovieShowing'
import './LandingLoggedIn.css'
import { useState } from 'react'
function LandingLoggedIn  ()  {
  const [movieRec, setMovieRec] = useState({})
  const [tempMovie, setTempMovie] = useState({
    genreId: '', genreName: ''
  })

  function handleChange(e){
    e.preventDefault()
    const genreValues = e.target.value.split(' ')
    setTempMovie({genreId: genreValues[0], genreName: genreValues[1]})
  }

  async function handleMovieRequest(e){
    e.preventDefault()
    try {
      let movie = {
        title : '',
        poster_path: '',
      }
      while(!movie.poster_path){
        movie = await movieService.getMovieRec(tempMovie.genreId)
      }
      setMovieRec(movie)
    } catch (error) {
      console.log(error)
    }
  }
  return ( 
    <>
      <h3>What do I watch tonight?</h3>
        <h5>Pick a genre</h5>

        <form id='movieId' onSubmit={handleMovieRequest}>
          <select className='select-options' onChange={handleChange}name='movieId'>
            <option value={null}>-Select a Genre-</option>
            <option value='27 Horror'>Horror</option>
            <option value='28 Action'>Action</option>
            <option value='12 Adventure'>Adventure</option>
            <option value='16 Annimation'>Annimation</option>
            <option value='35 Comedy'>Comedy</option>
            <option value='80 Crime'>Crime</option>
            <option value='99 Documentary'>Documentary</option>
            <option value='18 Drama'>Drama</option>
            <option value='10751 Family'>Family</option>
            <option value='14 Fantasy'>Fantasy</option>
            <option value='36 History'>History</option>
            <option value='10402 Music'>Music</option>
            <option value='9648 Mystery'>Mystery</option>
            <option value='10749 Romance'>Romance</option>
            <option value='878 SciFi'>Sci Fi</option>
            <option value='10770 TV-Movie'>TV Movie</option>
            <option value='53 Thriller'>Thriller</option>
            <option value='10752 War'>War</option>
            <option value='37 Western'>Western</option>
          </select>
          <input className="select-options-button" type='submit' value='search'/>
        </form>
        <MovingShowing movie={movieRec}/>
    </>
  );
}

export default LandingLoggedIn;