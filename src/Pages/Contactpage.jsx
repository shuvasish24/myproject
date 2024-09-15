import React from 'react'
import InnerBanner from '../components/InnerBanner'
import Contactform from './Contactform'

const Contactpage = () => {
  return (
    <>
    <InnerBanner/>
    <div className="container contact_page">
      <div className="row justify-content-center mt-5 mb-5">
          <div className="col-lg-8">
              <Contactform/>
          </div>
      </div>
    </div>
    </>
  )
}

export default Contactpage
