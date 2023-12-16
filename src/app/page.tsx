"use client";

import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {

  var [step, setStep] = useState(0);

  var names = ['pink panther', 'miku', 'anya','captian hardlock','Pengweno','Honda','Vegeta'];
  var pictures = ['pink.gif','cry_miku.jpg', 'anya.png','hardlock.jpg','Penguin_bongos.gif','honda.jpg','vegeta.jpg'];

  var currentName:string = names[step];
  var currentPicture:string = pictures[step];

  var handleNext = () => {
    setStep((prevStep) => (prevStep < names.length - 1 ? prevStep + 1 : prevStep));
  };

  var handleBack = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };


  return (  <>
    <Head><>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xplore Skill - Sagar Developer</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
  />
</>
 </Head>
  
  <section className="header">
    <nav>
    <a href="/" className="logo">
        Xplore
        <i className="fa-brands fa-staylinked" />
        kill
      </a>
      <div className="nav-links" id="navLinks">
        {/* Reposnive bar open and close */}
      
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
     
      {/* Reposnive bar open and close */}
    </nav>
    <div className="text_box">
      <h2>Most Wanted</h2>
    
      <p id="headtext">{currentName}</p>
     
  
      {/* <button onClick={handleBack}>Back</button> */}
      <button className="hero_btn" onClick={handleBack}><span>Back </span></button>
      <img
        src={currentPicture}
        alt={currentName}
        style={{ width: '400px', height: '400px' }}
      />
            <button className="hero_btn" onClick={handleNext}><span>Next</span></button>
      {/* <button onClick={handleNext}>Next</button> */}
      {/* <hr /> */}
     
    </div>
  </section>
  {/* Course Section Start */}
  <section className="course">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>
      EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
    </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="course-col">
        <h3>Undergraduate Programs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedi
          distinctio explicabo aut minima quos pariatur unde aliquam earum
          laborum velit non.
        </p>
      </div>
      <div className="course-col">
        <h3>Graduate Programs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedit
          distinctio explicabo aut minima quos pariatur unde aliquam earum
          laborum velit non.
        </p>
      </div>
      <div className="course-col">
        <h3>Adult Learning &amp; Degree Completion</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedit
          distinctio explicabo aut minima quos pariatur unde aliquam earum
          laborum velit non.
        </p>
      </div>
    </div>
  </section>
  {/* Course Section End */}
  {/* Campus Section Start*/}
  <section className="campus">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>TAKE OUR VIRTUAL TOUR</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="campus-col">
        <img src="img/Campus1.png" alt="" />
        <div className="layer">
          <h3>DELHI</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="img/Campus2.png" alt="" />
        <div className="layer">
          <h3>HYDERABAD</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="img/Campus3.png" alt="" />
        <div className="layer">
          <h3>MUMBAI</h3>
        </div>
      </div>
    </div>
  </section>
  {/* Campus Section End */}
  {/* Facilities Section Start */}
  <section className="facilities">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="facilities-col">
        <img src="img/libary.png" alt="" />
        <h3>Best Libary</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <img src="img/playground.png" alt="" />
        <h3>Athletics</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <img src="img/food.png" alt="" />
        <h3>Tasty and Healthy Food</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
    </div>
  </section>
  {/* Facilities Section End */}
  {/* Testimonials Section Start */}
  <section className="testimonials">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>What Our Student Says</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="testimonials-col">
        <img src="img/user.png" alt="oo.." />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores in nostrum rerum voluptatem praesentium veritatis alias
            omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
            deserunt. In quia repellat maxime.
          </p>
          <h3>Student Name</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
      <div className="testimonials-col">
        <img src="img/user.png" alt="oo.." />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores in nostrum rerum voluptatem praesentium veritatis alias
            omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
            deserunt. In quia repellat maxime.
          </p>
          <h3>Student Name</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-alt" />
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials Section End */}
  {/* Call To Action Section Start */}
  <section className="cta">
    <h1>GET READY FOR A BRIGHT FUTURE</h1>
    <a href="contact.html" className="hero_btn">
      CONTACT US
    </a>
  </section>
  {/* Call To Action Section End */}
  {/* Footer Section Start */}
  <section className="footer">
    <hr />
    <h4>About Us</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
      incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur.
      Aliquid ab deserunt exercitationem, illum molestiae dolorem.
    </p>
    <div className="icons">
      <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="fab fa-linkedin" />
    </div>
    <p>
      Made with Nextjs <i className="fas fa-heart" /> by 
      <a href="https://github.com/Yinmisan/multi_page_to_nextjs"> Yinmisan</a>
    </p>
    <p>
      Copyright © 2021 <a href="/">Xplore Skill</a>. All Rights
      Reserved
    </p>
  </section>
  {/* Footer Section End */}
</>

  )
}
