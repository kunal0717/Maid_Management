// import React from 'react';

// import { Component } from "react";
import './Hero.css';

export function Hero(){
        return (
          <div className="hero-container">
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#registration">Registration</a></li>
            </ul>
          </nav>
          <section className="hero">
            <div className="zigzag-container">
              <div className="zigzag-item">
                <img src="..\DesignImg\Maid1.jpg"></img>
                <p>Some text related to image 1</p>
              </div>
              <div className="zigzag-item">
                {/* <img src="/images/image2.jpg" alt="Image 2" /> */}
                <p>Some text related to image 2</p>
              </div>
              <div className="zigzag-item">
                {/* <img src="/images/image3.jpg" alt="Image 3" /> */}
                <p>Some text related to image 3</p>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="footer-content">
              <div className="social-links">
                <a href="https://www.linkedin.com/">LinkedIn</a>
                <a href="https://github.com/">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
          );
    }
