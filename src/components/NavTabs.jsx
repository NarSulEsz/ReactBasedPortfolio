import {NavLink, useLocation } from 'react-router-dom';
import Footer from 'pages/Footer'; // Importation of Footer module

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <header className="header">  {/* Located all the links inside the header element*/}
       {/* h1 with my name */}
       <h1> Nariman Suleimenov</h1>
    <ul className="nav nav-tabs">
            <li className="nav-item">
        <NavLink
          to="/"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </NavLink>
      </li>
    </ul>
    </header>
    <Footer /> 
    </>
  );
}

export default NavTabs;
