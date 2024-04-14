import React from 'react';
import './HeroSection.css'; // Ensure you have this CSS file with the required styles.
import heroimg from './assets/component/HeroContainers.png'
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
    let navigate = useNavigate();
  return (
    <section className="hero" style={{ backgroundColor: '#212121' }}>
      <div className="container">
        <div className="row justify-content-md-center">
          <img className="himg" src={heroimg} alt="Hero Containers" style={{ marginTop: '-8%' }} />
          <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white htext">
            <h1 className="text1">Web Development<br/>Now <span className="green">Simplified.</span></h1>
            <p className="text2 lead mb-5">Simplify your Web Development journey - Dev Matrix<br />Where complexity meets Clarity</p>
            <div className="btngrp" style={{ paddingLeft: '9%' }}>
              <Link to="/explore"><button className="twobtn1" type="button">Explore Now&emsp;<i className='fa fa-angle-right'></i></button></Link>
              <Link className="twobtn2">Create New!&emsp;<i className='fa fa-angle-right'></i></Link>
             <hr className='WhiteLine'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
