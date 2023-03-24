import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className='nav-bar logged-in'>
          <a href='/'><li> WHAT TO WATCH?</li></a>
          <div className='nav-buttons logged-in'>

            <li><Link to="/change-password"><img src='/gear.png' alt='Change Password'></img></Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </div>
        </ul>
      :
        <ul className='nav-bar not-logged-in'>
          <li> WHAT TO WATCH?</li> 
          <div className='nav-buttons'>
            <li><Link className='nav-link' to="/login">Log In</Link></li>
            <li><Link className='nav-link' to="/signup">Sign Up</Link></li>
          </div>
        </ul>
      }
    </nav>
  )
}

export default NavBar
