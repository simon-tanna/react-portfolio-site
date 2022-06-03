import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSketch,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import LoremIpsum from 'react-lorem-ipsum'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2800)
  }, [])

  return (
  <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            stringArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            index={15}
          />
        </h1>
        <div>
          <LoremIpsum p={3} />
        </div>
      </div>
      <div className="cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faSketch} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
          </div>
        </div>
    </div>
    <Loader type="pacman" />
  </>
  )
}

export default About
