import { useEffect, useState } from 'react'
import styles from './Landing.module.css'
import MovingShowing from '../../components/MovieShowing/MovieShowing'
import * as movieService  from '../../services/movieService'
function Landing({ user }){
  const [movieRec, setMovieRec] = useState({})
  useEffect(()=>{
    async function fetchMovie(){
      try {
        const movie = await movieService.getMovieRec(28)
        setMovieRec(movie)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
  }
  ,[])

  console.log(movieRec)
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <MovingShowing />
    </main>
  )
}

export default Landing
