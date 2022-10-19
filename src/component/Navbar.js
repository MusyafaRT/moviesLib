import { useNavigate, Link } from 'react-router-dom';
import {useState} from 'react';

const Navbar = ({searchText, setSearchText}) => {
  const navigate = useNavigate();
  const [updated, setUpdated] = useState('');

  const handleChange = (e) => {
    // navigate('/search')
    setSearchText(e.target.value)
  }

  const handelKeyDown = (e) => {
    if(e.key === 'Enter'){
      navigate("/search")
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand">Netfly</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={e => handleChange(e)}
            // onKeyDown={e => handelKeyDown(e)}
          />
          <Link to="/search" className="btn btn-outline-success" >
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
