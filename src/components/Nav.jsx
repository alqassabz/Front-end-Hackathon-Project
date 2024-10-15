import { Link } from 'react-router-dom'

const Nav = () => {

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          
        </div>
      </Link>
      {publicOptions }
    </header>
  )
}

export default Nav
