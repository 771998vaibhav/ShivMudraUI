import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported in your project

const footer = () => {
    return (
        <div className="footer-top section-space--ptb_80 section-pb text-white" style={{ backgroundColor: '#ffe6cc' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget-footer mt-30">
                  <div className="footer-title" style={{color:"black"}}>
                    <h5>Address:</h5>
                  </div>
                  <div className="footer-logo mb-15">
                    <a href=""><img src="src/images/shivmudraLogo.png" className="w-50" alt=""/></a>
                  </div>
                  <div className="footer-contents">
                    <p style={{color:"black"}}><b>Shivmudra Group, Chatrapati Shivaji Nagar, Faizpur - 425503;</b></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                {/* <div className="widget-footer mt-30">
                  <div className="footer-title">
                    <h6>Related Links</h6>
                  </div>
                  <div className="footer-contents">
                    <ul>
                      <li><a href="index.php">Home</a></li>
                      <li><a href="about-us.php">About</a></li>
                      <li><a href="Social-activity.php">Blog</a></li>
                      <li><a href="photos.php">Photos</a></li>
                      <li><a href="terms.php">Terms</a></li>
                      <li><a href="contact-us.php">Contact Us</a></li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* <div className="widget-footer mt-30">
                  <div className="footer-title">
                    <h6>Donation</h6>
                  </div>
                  <div className="footer-contents">
                    <a href="donation.php"><img src="assets/images/banners/Donate-Now-1.png" className="w-75" alt="donation"/></a>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="widget-footer mt-30">
                  <div className="footer-title">
                    <h5 style={{color:"black", position:'relative', left:'32px'}}>Join With Us</h5>
                  </div>
                  <ul className="footer-social-share mt-20"style={{color:"black",fontSize: "25px",listStyle:"none", display:'flex',gap:'20px'}}>
                    <li><a href="https://www.facebook.com/share/g/L4ZbS17QoDNTv21B/?mibextid=K35XfP"><i className="fab fa-facebook" style={{color:"black",}}></i></a></li>
                    <li><a href="https://www.instagram.com/shivmudra_group_official?igsh=MW52dnozMGJmZmI5aA=="><i className="fab fa-instagram"style={{color:"black"}}></i></a></li>
                    <li><a href="https://youtube.com/@shivmudragroup?si=KmRnEfkz7S194o9h"><i className="fab fa-youtube"style={{color:"black"}}></i></a></li>
                    <li><a href="https://maps.app.goo.gl/f9dFQCyqeuk3U8HH9?g_st=com.google.maps.preview"><i className="fas fa-map-marker-alt"style={{color:"black"}}></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default footer
