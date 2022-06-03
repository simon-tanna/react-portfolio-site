import './index.scss'
import SolidLogo from '../../assets/images/2.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={SolidLogo} alt="Simon Logo" />
    </div>
  )
}

export default Logo
