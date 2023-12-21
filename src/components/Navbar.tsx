import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center h-32 max-w-[1240px] mx-auto">
          <Link to="/Home">
            <img src="https://flowbite.com/docs/images/logo.svg" className="w-9 h-auto" alt="Portfolio Logo" />
          </Link>
          <ul className="flex space-x-12 text-white px-4">
            <Link to="/Home"><li>Home</li></Link>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar;
