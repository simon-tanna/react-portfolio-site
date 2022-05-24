import { Link } from 'react-router-dom'
import SimonLogo from '../../assets/images/st-logo.png'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={SimonLogo} alt="developer" />
                Simon Tanna
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