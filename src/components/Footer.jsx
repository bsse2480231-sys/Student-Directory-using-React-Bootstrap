function Footer({ links, contact }) {
  return (
    <footer className="bg-dark text-light mt-4 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled small mb-0">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-light text-decoration-none">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Contact Info</h5>
            <ul className="list-unstyled small mb-0">
              <li>Contact Us</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center small pb-3 mb-0">
          &copy; {new Date().getFullYear()} StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
