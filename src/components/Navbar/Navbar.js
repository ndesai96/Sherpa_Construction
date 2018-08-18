import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {

  delta = 10;
  lastScrollTop = 0;
  topBuffer = 100;

  state = {
    navbarUp: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.navbarScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navbarScrollHandler);
  }

  navbarScrollHandler = () => {
    var st = document.documentElement.scrollTop;

    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
        return;
    }

    if (st > this.lastScrollTop && st > this.topBuffer) {
      this.setState({navbarUp: true});
    } else {
      this.setState({navbarUp: false});
    }

    this.lastScrollTop = st;

  };

  render() {

    let navbarClasses = "navbar";
    if (this.state.navbarUp) {
      navbarClasses = "navbar up"
    }

    return (
      <header className={navbarClasses}>
        <nav className="navbar_navigation">

          <div className="navbar_logo"><a href="/">SHERPA</a></div>

          <div className="navbar_center">
            <ul>
              <li><a href="/">Hotels</a></li>
              <li><a href="/">Residences</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </div>

          <div className="navbar_right">
            <ul>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

        </nav>
      </header>
    );
  }
}

export default Navbar;
