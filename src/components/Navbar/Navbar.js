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

          <ul className="navbar_center">
            <li className="Hotels"><a href="/">Hotels</a></li>
            <li className="Residences"><a href="/">Residences</a></li>
            <li className="About Us"><a href="/">About Us</a></li>
          </ul>

          <ul className="navbar_right">
            <li className="Contact"><a href="/">Contact</a></li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default Navbar;
