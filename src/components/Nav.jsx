import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Nav = () => {
  const publicOptions = (
    <nav>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
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
