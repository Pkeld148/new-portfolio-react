import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li>PAUL KELDSEN - Full Stack Web Developer</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
