import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side  */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <div className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </div>
            </div>

            {/* right side  */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 Cannnaught Place, FL 266, India</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
