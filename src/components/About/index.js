// Write your code here
import ThemeContent from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContent.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const home = isDarkTheme ? 'home-dark' : 'home-light'

      const about = isDarkTheme ? 'heading-dark' : 'heading-light'
      return (
        <div>
          <Navbar />
          <div className={`home-container ${home}`}>
            <img src={homeUrl} alt="about" className="home-image" />
            <h1 className={about}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContent.Consumer>
)

export default About
