import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ data, socialData }) => {
  

  const { title, text, subTitle } = data;


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Button is clicked');

    emailjs
      .send(
        "service_opv3pba", // Replace with your EmailJS service ID
        "template_vk3jb8n", // Replace with your EmailJS template ID
        formData,
        "yIOEzbD-2uLJ0RHeo" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          console.log("Form data is :  ",formData);
          setIsSubmitted(true);
          
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="row-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form onSubmit={handleSubmit} action="#" method="POST" className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} placeholder="Your Name" required />
              </div>
              <div className="st-form-field">
                <input type="email" id="email" onChange={handleChange} value={formData.email} name="email" placeholder="Your Email" required />
              </div>
              <div className="st-form-field">
                <input type="text" id="subject" name="subject" placeholder="Your Subject" required />
              </div>
              <div className="st-form-field">
                <textarea type="text" id="message" cols="30" rows="10" name="message" onChange={handleChange} value={formData.message} placeholder="Your Message" required></textarea>
              </div>
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">Send Message</button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
