import './LandingNotLoggedIn.css'

function LandingNotLoggedIn ()  {
  return (
    <>
    <div className='not-logged-in-landing-page'>
      <h1 className='page-title'>What to Watch?</h1>
      <div className='not-logged-in-landing-page-content'>
        <img className="blank-movie-img" src="/noMovie.png" alt="" />
        <p className='landing-page-info'>Don't know what to watch tonight? <br/>
        Don't want to spend hours searching through Netflix or hulu looking for what to watch!<br/>
        pick a genre and get a movie recommended to you by “What to watch?”!<br/>
        already seen the movie? <br/>
        Roll Again!</p>
      </div>
    </div>
    </>
)
}

export default LandingNotLoggedIn
