import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  // FaXTwitter,
} from "react-icons/fa";

function FooterMain() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5>Information</h5>

            <p>
              Your one-stop destination for quality products at unbeatable
              prices.
            </p>

            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              {/* <FaXTwitter /> */}
              <FaLinkedin />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Company</h5>

            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Categories</h5>

            <ul>
              <li>Grocery</li>
              <li>Personal Care</li>
              <li>Baby Products</li>
              <li>Home Decor</li>
              <li>Organic Products</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Subscribe Our Newsletter</h5>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />

            <h6 className="mt-4">Easy Payment Method</h6>

            <img src="/payment.png" alt="payment" className="payment-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
