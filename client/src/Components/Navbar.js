export default function Navbar() {
    return (
<nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            {/* <img src={logo} className="logo" /> */}
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarItems" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Profile</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-item">Groups</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-success" id="signupButton">
                  Sign up
                </a>
                <a className="button is-dark" id="signupButton">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}