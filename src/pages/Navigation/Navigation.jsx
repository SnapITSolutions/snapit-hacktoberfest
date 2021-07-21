import React from "react";
// import { Link, NavLink} from 'react-router-dom';

const Navigation = () => (
  <>
    <aside className="mdc-drawer">
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <li
            className="mdc-list-item mdc-list-item--activated"
            aria-current="page"
          >
            {/* <Link to='/' className="mdc-list-item__text">Information</Link>  */}
            <span className="mdc-list-item__ripple">??</span>
            <i
              className="material-icons mdc-list-item__graphic"
              aria-hidden="true"
            >
              inbox
            </i>
            {/* <span className="mdc-list-item__text">Information</span> */}
          </li>
          <a className="mdc-list-item" href="https://www.google.com">
            <span className="mdc-list-item__ripple">??</span>
            <i
              className="material-icons mdc-list-item__graphic"
              aria-hidden="true"
            >
              send
            </i>
            <span className="mdc-list-item__text">Profile</span>
          </a>
          <a className="mdc-list-item" href="https://www.google.com">
            <span className="mdc-list-item__ripple">??</span>
            <i
              className="material-icons mdc-list-item__graphic"
              aria-hidden="true"
            >
              drafts
            </i>
            <span className="mdc-list-item__text">FAQ</span>
          </a>
          <a className="mdc-list-item" href="https://www.google.com">
            <span className="mdc-list-item__ripple">??</span>
            <i
              className="material-icons mdc-list-item__graphic"
              aria-hidden="true"
            >
              drafts
            </i>
            <span className="mdc-list-item__text">Registration</span>
          </a>
        </nav>
      </div>
    </aside>
  </>
);

export default Navigation;
