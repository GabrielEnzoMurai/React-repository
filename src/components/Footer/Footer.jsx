import { Link  } from 'react-router-dom'

// ASSETS
import './Footer.css'

import Logo from '../../assets/dnc-logo.svg'  
import BrazilLogo from '../../assets/brazil-icon.svg' 
import UsaLogo from '../../assets/usa-icon.svg'  
import FacebookLogo from '../../assets/facebook-icon.svg'
import TwitterLogo from '../../assets/twitter-icon.svg' 
import LinkedinLogo from '../../assets/linkedin-icon.svg' 
import InstagramLogo from '../../assets/instagram-icon.svg' 

function Footer () {
    return(
        <footer>
            <div className="container">
                <div className='d-flex jc-space-between'>
                    <div className='footer-logo-col'>
                        <img src={Logo} />
                        <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className='d-flex social-links'>
                            <a href="https://google.com" target="_blank">
                                <img src={FacebookLogo} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={TwitterLogo} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={LinkedinLogo} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={InstagramLogo} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer