// src/components/Contact/Contact.js
import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your name" name="from_name" />
                <input type="text" className="email" placeholder="Your Email" name="from_email" />
                <textarea name="message" placeholder="Your Message" rows={5} className="msg"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={facebookIcon} alt="Facebook" className="link" />
                    <img src={twitterIcon} alt="Twitter" className="link" />
                    <img src={youtubeIcon} alt="YouTube" className="link" />
                    <img src={instagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </section>
    );
};

export default Contact;
