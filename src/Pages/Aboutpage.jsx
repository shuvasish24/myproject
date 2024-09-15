import React from 'react'
import InnerBanner from '../components/InnerBanner'
import aboutImageNew from '../assets/images/abtimg.jpg'

const Aboutpage = () => {
  return (
    <>
      <InnerBanner/>
      <div className="aboutSec">
      <div className="container">
        <div className="abtpnl">
          <div className="abtimg wow fadeInRight" >
            <img src={aboutImageNew} alt="About Us" />
          </div>
          <div className="abtcon wow fadeInLeft">
            <h3>About Us</h3>
            <em>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</em>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Aboutpage
