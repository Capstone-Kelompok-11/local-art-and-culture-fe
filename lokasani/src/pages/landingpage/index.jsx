import React from 'react';
import Navbar from "../../component/landingpage/Navbar"
import Hero from "../../component/landingpage/Hero"
import WhyUs from "../../component/landingpage/Whyus"
import ProductFeature from '../../component/landingpage/Productfeature';
import EventFeature from '../../component/landingpage/Eventfeature';
import ContactUs from '../../component/landingpage/Contactus'
import Footer from '../../component/landingpage/Footer'

const landing = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhyUs />
      <ProductFeature/>
      <EventFeature/>
      <ContactUs />
      <Footer />
    </div>

  )
}

export default landing

