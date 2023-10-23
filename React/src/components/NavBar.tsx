import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}
