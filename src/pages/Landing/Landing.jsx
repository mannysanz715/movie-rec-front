import styles from './Landing.module.css'
import LandingNotLoggedIn from '../../components/LandingNotLoggedIn/LandingNotLoggedIn'
import LandingLoggedIn from '../../components/LandingLoggedIn/LandingLoggedIn'
function Landing({ user }){
  return (
    <main className={styles.container}>
      { user? <LandingLoggedIn /> : <LandingNotLoggedIn />}
    </main>
  )
}
  

export default Landing
