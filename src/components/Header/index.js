import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo-image"
    />
    <ul className="component-container">
      <li className="para">Home</li>
      <li className="para">Products</li>
      <li className="para">Cart</li>
      <button type="button" className="button">
        Logout
      </button>
    </ul>
  </div>
)

export default Header
