// Write your code here
import ThemeContent from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContent.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const home = isDarkTheme ? 'home-dark' : 'home-light'
      const heading = isDarkTheme ? 'heading-dark' : 'heading-light'
      return (
        <div>
          <Navbar />
          <div className={`home-container ${home}`}>
            <img src={homeUrl} alt="home" className="home-image" />
            <h1 className={heading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContent.Consumer>
)

export default Home
