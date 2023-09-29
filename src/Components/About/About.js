import React from 'react'
import "./About.css"
import back from "../../assets/breadcrumb-bg.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const About = () => {
  return (
    <div>


<section class="breadcrumb-section set-bg" style={{ backgroundImage: `url(${back})` }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>About us</h2>
                        <div class="bt-option">
                            <Link to="/">
                            <a >Home </a>
                            </Link>
                            <span>About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="choseus-section spad">
        <div class="container">
            
               
                    <div class="section-title">
                        <h3>Why chose us?</h3>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
             
            
            <div class="row">
                <div class="col-lg-3">
                    <div class="cs-item">
                        <span > <img></img></span>
                        <h4>Modern equipment</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-033-juice"></span>
                        <h4>Healthy nutrition plan</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-002-dumbell"></span>
                        <h4>Proffesponal training plan</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-014-heart-beat"></span>
                        <h4>Unique to your needs</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </div>
  )
}

export default About