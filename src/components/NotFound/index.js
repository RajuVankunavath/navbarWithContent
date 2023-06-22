// Write your code here
import ThemeContent from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContent.Consumer>
    {value => {
      const {isDarkTheme} = value

      const home = isDarkTheme ? 'home-dark' : 'home-light'
      const notfound = isDarkTheme ? 'heading-dark' : 'heading-light'

      return (
        <div>
          <Navbar />
          <div className={`home-container ${home}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image"
            />
            <h1 className={notfound}>Lost Your Way?</h1>
            <p className="descriptions">We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContent.Consumer>
)

export default NotFound
