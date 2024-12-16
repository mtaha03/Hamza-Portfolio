import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading'
import "./Resume.scss";
import SingleResume from './SingleResume';

const ResumeSection = ({ data }) => {
  const { educationTitle, education, experienceTitle, link, experience } = data;
  return (
    <section id="education">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Education"} />
      <div className="container"  data-aos="fade-up"
              data-aos-duration="800" data-aos-delay="200">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap" >
                {
                  education.map((education, index) => (
                    <SingleResume element={education} key={index} />
                  ))
                }
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

ResumeSection.propTypes = {
  data: PropTypes.object
}

export default ResumeSection;
