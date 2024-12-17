import data from '../HomePageData.json';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Resume from '../components/Resume/ResumeSection';
import ReviewSection from '../components/Review/ReviewSection';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Protfolio/PortfolioSection';
import Header from '../components/Header/Header';

const Home = () => {
  const { headerData ,heroData, aboutData, serviceData, portfolioData, resumeData, reviewData, contactData, socialData } = data;
  console.log("Header Data is :  ",headerData);
  return (
    <>
      <Header data={headerData} data-aos="fade-right" />
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}


export default Home;
