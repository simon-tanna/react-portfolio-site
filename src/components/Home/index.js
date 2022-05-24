import { useState } from 'react';
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S', 'i', 'm', 'o', 'n', ' ', 'T', 'a', 'n', 'n', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, 
                
                <br />
                I'm <AnimatedLetters letterClass={letterClass}
                stringArray={nameArray}
                index={15}
                />
                <br />
                web developer
                </h1>
                <h2>Full-stack Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home