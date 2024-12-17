import { Link } from 'react-router-dom';
import './Header.scss';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

const Header = ({ data = {} }) => {

  const { cvPdf } = data;



  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  return (
    <header className={`st-site-header st-style1 st-sticky-header`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
            <ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}><img src="/images/logo.png" alt="Davis" /></ScrollLink>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About</ScrollLink></li>
                  <li><ScrollLink to="experience" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Experience</ScrollLink></li>
                  <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Portfolio</ScrollLink></li>
                  <li><ScrollLink to="review" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Reviews</ScrollLink></li>
                  <li><ScrollLink to="education" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Education</ScrollLink></li>
                  <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Contact</ScrollLink></li>
                </ul>
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `}  onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="sp-phone">
                <a className='st-btn st-style1 st-color1' href={cvPdf} download>Download CV</a>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.object
}

export default Header;
