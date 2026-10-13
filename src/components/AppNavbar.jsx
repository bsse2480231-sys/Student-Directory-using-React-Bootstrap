import { useState } from 'react';

function AppNavbar({ brand, links, activeLink, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand" href="#">{brand}</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link}>
                <a className={`nav-link ${link === activeLink ? 'active' : ''}`} href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav me-2">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                type="button"
                onClick={() => setSettingsOpen(!settingsOpen)}
              >
                Settings
              </button>
              {settingsOpen && (
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Preferences</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              )}
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
