import "../assets/css/contact.css";
import Map from "../components/Map";

function Contact() {
  return (
    <div className="contactpage">
      <div className="intro">Contact us</div>
      <div className="contact">
        <div className="map">
          <Map />
        </div>
        <div className="contactdetail">
          <div className="contactline">
            <div className="contactlogo">
              <i class="bi bi-building"></i>
            </div>
            <div className="contactlogo-describe">
              <h1>Head Quater</h1>
              <p>address:</p>
            </div>
          </div>

          <div className="contactline">
            <div className="contactlogo">
              <i class="bi bi-envelope-at-fill"></i>
            </div>
            <div className="contactlogo-describe">
              <h1>Mail us</h1>
              <p>gmail:</p>
            </div>
          </div>

          <div className="contactline">
            <div className="contactlogo">
              <i class="bi bi-telephone-fill"></i>
            </div>
            <div className="contactlogo-describe">
              <h1>Contact us</h1>
              <p>Phone Number : +977 9809234720</p>
            </div>
          </div>
          <div className="contactline">
            <p>facebook,instagram,twiter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
