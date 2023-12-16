import Link from 'next/link'
export default function Contacts(){
    return <>
    <section className="Sub-header">
      <nav>
      <a href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked" />
          kill
        </a>
        <div className="nav-links" id="navLinks">
          {/* reposnive bar open and close */}
        
          <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
              <a href="course">Course</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
       
        {/* reposnive bar open and close */}
      </nav>
      <h1>Contact Us</h1>
    </section>
    {/* Contact Us Section Start */}
    <section className="loacation">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12488.634659345!2d73.08163589886514!3d31.421347042586344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a2f5be33f3%3A0x6a214e1f73edd114!2sClock%20Tower%20Faisalabad!5e0!3m2!1sen!2s!4v1702541311493!5m2!1sen!2s"
  width={400}
  height={300}
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </section>
    <section className="contact-us">
      <div className="row">
        <div className="content-col">
          <div>
            <i className="fa fa-home" />
            <span>
              <h5>Clock Tower Faisalabad</h5>
              <p>Clock Tower Faisalabad pk</p>
            </span>
          </div>
          <div>
            <i className="fa fa-phone" />
            <span>
              <h5>+91 7445546525</h5>
              <p>Monday To Saturday, 9AM To 6PM</p>
            </span>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <span>
              <h5>xyz@email.com</h5>
              <p>Email Us Yor Query</p>
            </span>
          </div>
        </div>
        <div className="content-col">
          <form>
            <input type="text" placeholder="Enter Name" defaultValue={""} />
            <input type="email" placeholder="Enter Email" defaultValue={""} />
            <input type="text" placeholder="Enter Subject" defaultValue={""}/>
            <textarea
              rows={8}
              placeholder="Message"
              required={false}
              defaultValue={""}
            />
            <button type="submit" className="hero_btn btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* Contact Us Section End */}
    {/* Footer Section Start */}
    <section className="footer">
      <hr />
      <h4>About Us</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi
        <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
        exercitationem, illum molestiae dolorem.
      </p>
      <div className="icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter" />
        <i className="fab fa-linkedin" />
      </div>
      <p>
      Made with <i className="fas fa-heart" /> by{" "}
      <a href="https://github.com/Yinmisan/multi_page_to_nextjs">Yinmisan</a>
    </p>
    <p>
      Copyright © 2021 <a href="/">Xplore Skill</a>. All Rights
      Reserved
    </p>
    </section>
    {/* Footer Section End */}
  </>
  
}