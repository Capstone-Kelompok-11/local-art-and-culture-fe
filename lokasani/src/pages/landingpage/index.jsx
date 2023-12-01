import React from 'react';
import Navbar from "../../component/landingpage/Navbar"
import Hero from "../../component/landingpage/Hero"
import WhyUs from "../../component/landingpage/Whyus"
import ProductFeature from '../../component/landingpage/Productfeature';
import EventFeature from '../../component/landingpage/Eventfeature';
import ContactUs from '../../component/landingpage/Contactus'

const landing = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhyUs />
      <ProductFeature/>
      <EventFeature/>
      <ContactUs />
    </div>

  )
}

export default landing
