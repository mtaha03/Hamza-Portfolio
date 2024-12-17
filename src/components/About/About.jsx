import PropTypes from 'prop-types';
import './About.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const About = ({ data }) => {
  const { imgLink, title, subtitle, text, skills } = data;
  
  return (
    <section id="about" className="st-about-wrap ">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              <div className="st-about-img st-bg" style={{ backgroundImage: `url(${imgLink})`}} data-aos="fade-right" data-aos-duration="800" data-aos-delay="400"></div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className={`st-text-block st-style1`} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                  <h2 className="st-text-block-title">{title}</h2>
                  <h4 className="st-text-block-subtitle">{subtitle}</h4>
                  <div className="st-text-block-text">
                    <p>{text}</p>
                  </div>
                  <div className="st-progressbar-wrap">
              {skills.map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos={element.effect}
                  data-aos-duration={element.duration}
                  data-aos-delay={element.delay}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.title}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.progress}
                    </div>
                  </div>
                  <div className="st-progressbar" data-progress="95">
                    <div className="st-progressbar-in "></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
                  <div className="st-text-block-btn">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  data: PropTypes.object
}

export default About;



