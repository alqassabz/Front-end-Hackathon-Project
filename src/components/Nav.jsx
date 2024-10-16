import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Nav = ({ user, handleLogout }) => {
  console.log(user)

  const publicOptions = (
    <nav>
      <div>
        <h3>helloooooo!! {user ? 
        (user.name):null}</h3>
      </div>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>

        {user ? 
        
        <Link onClick={handleLogout}>Sign Out</Link> 
        :
        <Link to="/signin">Sign In</Link>}
      </div>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo"></div>
      </Link>
      {publicOptions}
    </header>
  )
}

export default Nav