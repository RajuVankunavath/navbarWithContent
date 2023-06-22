import {Link} from 'react-router-dom'

import ThemeContent from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContent.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const backgroundTheme = isDarkTheme
        ? 'background-dark'
        : 'background-light'

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <nav className={`nav-light ${backgroundTheme}`}>
          <img className="logo" src={websiteLogoUrl} alt="website logo" />
          <ul className="nav-container-list">
            <li className="item">
              <Link className={`link-item ${theme}`} to="/">
                Home
              </Link>
            </li>
            <li className="item">
              <Link className={`link-item ${theme}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            className="themeChange-button"
            type="button"
            data-testid="theme"
            onClick={onClickChangeTheme}
          >
            <img src={themeUrl} className="changeTheme-logo" alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContent.Consumer>
)

export default Navbar
