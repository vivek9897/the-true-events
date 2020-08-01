import React from 'react';
import './contact.css'

const Contact = ()=>{
    return(
        <div class="contact-page body1">
        <h2>Get in touch with us!</h2>
        <div class="contact-info">
          <div class="item1">
            <i class="icon1 fas fa-home"></i>
             Haridwar , Uttarakhand
          </div>
          <div class="item1">
            <i class="icon1 fas fa-phone"></i>
            +91 9634343693
          </div>
          <div class="item1">
            <i class="icon1 fas fa-envelope"></i>
            samkit@gmail.com
          </div>
          <div class="item1">
            <i class="icon1 fas fa-clock"></i>
            We will help you to create your beautiful memories!
          </div>
        </div>
        <form action="" class="contact-form">
          <input type="text" class="textme" placeholder="Your Name"/>
          <input type="email" class="textme" placeholder="Your Email"/>
          <textarea class="textme" placeholder="Your Message"></textarea>
          <input type="submit" class="btn2" value='Send'/>
        </form>
      </div>
       
    )

}
export default Contact