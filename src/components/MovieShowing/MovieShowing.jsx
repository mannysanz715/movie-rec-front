import './MovieShowing.css'

function MovieShowing({ movie, genre }){
  return(
    <>
      {(movie.title && movie.poster_path) ? 
      <>
        <h1>{movie.title}</h1>
        <p>Don't like the movie. Re-Roll for Another</p>
        <img className="movie-image" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img> 
      </>
      : ''}
      <h2>{genre}</h2>
      <p>{movie.overview}</p>
    </>
  )
}

export default MovieShowing