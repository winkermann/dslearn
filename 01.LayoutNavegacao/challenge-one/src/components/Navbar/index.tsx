import 'bootstrap/js/src/collapse.js';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid container">
        <a href="link" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse main-menu"
          id="dscatalog-navbar"
        >
          <ul className="navbar-nav offset-md-2">
            <li>
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
