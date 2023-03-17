import { useState } from 'react'
import styles from './Landing.module.css'
import MovingShowing from '../../components/MovieShowing/MovieShowing'
import * as movieService  from '../../services/movieService'
import LandingNotLoggedIn from '../../components/LandingNotLoggedIn/LandingNotLoggedIn'
function Landing({ user }){
  const [movieRec, setMovieRec] = useState({})
  const [genre, setGenre] = useState('')
  console.log(movieRec)
  async function handleMovieRequest(e){
    e.preventDefault()
    console.log(e.target.id)
    const genre = e.target.id
    try {
      let movie = {
        title : '',
        poster_path: '',
      }
      while(!movie.poster_path){
        movie = await movieService.getMovieRec(genre)
      }
      setGenre(e.target.textContent)
      setMovieRec(movie)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <main className={styles.container}>
      { user? <>
        <h3>What do I watch tonight?</h3>
        <h5>Pick a genre</h5>
        <div className='movie-genre-buttons'>
          <button onClick={handleMovieRequest} id='27'>Horror</button>
          <button onClick={handleMovieRequest} id='28'>Action</button>
          <button onClick={handleMovieRequest} id='12'>Adventure</button>
          <button onClick={handleMovieRequest} id='16'>Annimation</button>
          <button onClick={handleMovieRequest} id='35'>Comedy</button>
          <button onClick={handleMovieRequest} id='80'>Crime</button>
          <button onClick={handleMovieRequest} id='99'>Documentary</button>
          <button onClick={handleMovieRequest} id='18'>Drama</button>
          <button onClick={handleMovieRequest} id='10751'>Family</button>
          <button onClick={handleMovieRequest} id='14'>Fantasy</button>
          <button onClick={handleMovieRequest} id='36'>History</button>
          <button onClick={handleMovieRequest} id='10402'>Music</button>
          <button onClick={handleMovieRequest} id='9648'>Mystery</button>
          <button onClick={handleMovieRequest} id='10749'>Romance</button>
          <button onClick={handleMovieRequest} id='878'>Sci Fi</button>
          <button onClick={handleMovieRequest} id='10770'>TV Movie</button>
          <button onClick={handleMovieRequest} id='53'>Thriller</button>
          <button onClick={handleMovieRequest} id='10752'>War</button>
          <button onClick={handleMovieRequest} id='37'>Western</button>
        </div>
      </> : <LandingNotLoggedIn />}
      <MovingShowing movie={movieRec} genre={genre}/>
    </main>
  )
}
  

export default Landing
