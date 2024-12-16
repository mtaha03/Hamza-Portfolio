import PropTypes from 'prop-types'

const SingleResume = ({ element }) => {
  const { title, duration, subTitle,link, text} = element;
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{title}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4 className="st-resume-timeline-subtitle"><a href={link} target='_blank'>{subTitle}</a></h4>
      
      <div className="st-resume-timeline-text"><p>{text}</p></div>
    </div>
  )
}

SingleResume.propTypes = {
  element: PropTypes.object,
}

export default SingleResume;
