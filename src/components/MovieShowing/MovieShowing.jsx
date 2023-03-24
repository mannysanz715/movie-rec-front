import './MovieShowing.css'

function MovieShowing({ movie }){
  return(
    <>
      {(movie.title && movie.poster_path) ? 
      <>
        <h1>{movie.title}</h1>
        <img className="movie-image" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img> 
        <h4>Don't like the movie. Re-Roll for Another</h4>
      </>
      :
      <>
        <h1>No Movie</h1>
        <img className='no-movie' alt='' src='/noMovie.png'></img>
      </>
      }
      <p>{movie.overview}</p>
    </>
  )
}

export default MovieShowing