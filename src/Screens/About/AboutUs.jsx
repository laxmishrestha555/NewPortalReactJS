import React from 'react'
import './AboutUs.css'

export function AboutUs(props) {
    

    return (
        <div className='aboutwrapper'>
            <div className="aboutbox">
                <div className="about">
                    <h1>About Us</h1>
                    <p>Welcome to [Your News Portal], your reliable source for breaking news, insightful analysis, and engaging content. At [Your News Portal], we are committed to delivering accurate, timely, and unbiased news coverage to keep you informed and empowered.</p>
                </div>

                <div className="misson">
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide a platform where you can access the latest news from around the globe. We aim to deliver content that is not only informative but also enriching, covering a diverse range of topics to cater to your varied interests.</p>
                </div>

                <div className="team">
                    <h2>Our Team</h2>
                    <p>Behind [Your News Portal] is a dedicated team of journalists, editors, and tech enthusiasts who are passionate about delivering quality news content. We are driven by a shared commitment to journalistic integrity and a belief in the power of information.</p>
                </div>

                <div className="contact">
                    <h2>Contact Us</h2>
                    <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you! Contact our team at [contact@yournewsportal.com] or visit our [Contact Page].</p>
                </div>
            </div>
           
        </div>
    )
}
