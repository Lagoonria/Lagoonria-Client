import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Service from './Service'
import WhatPeopleSay from './WhatPeopleSay'
import ContactUs from './ContactUs'

const AppContent = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
        <Service />
        <WhatPeopleSay />
        <ContactUs />
    </div>
  )
}

export default AppContent