import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className='nav-bar logged-in'>
          <li> WHAT TO WATCH?</li>
          <div className='nav-buttons logged-in'>

            <li><Link to="/change-password">G</Link></li>
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
