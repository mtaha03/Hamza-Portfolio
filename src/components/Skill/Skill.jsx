import PropTypes from 'prop-types';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const Skill = ({ data }) => {
  const { title, text } = data;
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">{text}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
