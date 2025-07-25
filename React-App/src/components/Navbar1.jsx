import logo from '../assets/pictures/Practice/fastracklogo.png'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light title">
            <div className="container-fluid">
                <Link to= "/"><img src={logo} alt="Logo" width="200" height="75" className="navbar-logo log"/></Link>
                </div>
                </nav>
  )
}
export default Navbar1