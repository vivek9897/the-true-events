import React from 'react';
import './footer.css'
import logo from "./images/slide_2.jpg"
const Footer = ()=>{
    return(
      <footer class="ct-footer">
  <div class="container">
    <form name="contentForm" enctype="multipart/form-data" method="post" action="">
      <div class="ct-footer-pre text-center-lg">
        <div class="inner">
          <span>Connect with us to receive updates, news & events!</span>
        </div>
        <div class="inner">
          <div class="form-group">
            <input name="formfields[nl_email]" id="nl_email" class="validate[required]" placeholder="Enter your email address" type="text" value=""/> <label for="nl_email" class="sr-only">Email Address</label> <button type="submit" class="btn btn-motive">Join</button>
          </div>
        </div>
      </div>
    </form>
    <ul class="ct-footer-list text-center-sm">
      <li>
        <h2 class="ct-footer-list-header">Learn More</h2>
        <ul>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Clients</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
      </li>
      <li>
        <h2 class="ct-footer-list-header">Services</h2>
        <ul>
          <li>
            <a href="">Venues</a>
          </li>
          <li>
            <a href="">DJ parties</a>
          </li>
          <li>
            <a href="">Concerts</a>
          </li>
          <li>
            <a href="">Weddings</a>
          </li>
          <li>
            <a href="">Birthdays</a>
          </li>
        </ul>
      </li>
      <li>
        <h2 class="ct-footer-list-header">The Industry</h2>
        <ul>
          <li>
            <a href="">Thought Leadership</a>
          </li>
          <li>
            <a href="">Webinars</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Sponsorships</a>
          </li>
          <li>
            <a href="">Advisors</a>
          </li>
          <li>
            <a href="">Direct meetings</a>
          </li>
          <li>
            <a href="">Activities & Campaigns</a>
          </li>
        </ul>
      </li>
      <li>
        <h2 class="ct-footer-list-header">Public Relations</h2>
        <ul>
          <li>
            <a href="">True events Blog</a>
          </li>
          <li>
            <a href="">concerts</a>
          </li>
          <li>
            <a href="">Suggested venues</a>
          </li>
          <li>
            <a href="">Upcommimg Events</a>
          </li>
          <li>
            <a href="">Arragements</a>
          </li>
        </ul>
      </li>
      <li>
        <h2 class="ct-footer-list-header">About</h2>
        <ul>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Our Board</a>
          </li>
          <li>
            <a href="/aboutme">Our Staff</a>
          </li>
          <li>
            <a href="/Contactme">Contact Us</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="ct-footer-meta text-center-sm">
      <div class="row">
        <div class="col-sm-6 col-md-2">
          <img style={{width:"50px",height:"50px",borderRadius:"20px"}}alt="logo" src={logo}/>
        </div>
        <div class="col-sm-6 col-md-3">
          <address>
            <span>TheTrueEvents<br/></span>xyz address<br/>
            haridwar, Uttarakhand, 01334<br/>
            <span>Phone: <a href="tel:5555555555">9897136104</a></span>
          </address>
        </div>
        <div class="col-sm-6 col-md-3">
          <ul class="ct-socials list-unstyled list-inline">
            <li>
              <a href="" target="_blank"><img alt="facebook" src="data:image/jpeg;base64,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"/></a>
            </li>
            <li>
              <a href="" target="_blank"><img alt="twitter" src="data:image/png;base64,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"/></a>
            </li>
            <li>
              <a href="" target="_blank"><img alt="youtube" src="data:image/jpeg;base64,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"/></a>
            </li>
            <li>
              <a href="" target="_blank"><img alt="instagram" src="data:image/jpeg;base64,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"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="ct-footer-post">
    <div class="container">
      <div class="inner-left">
        <ul>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="/Contactme">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="inner-right">
        <p>Copyright © 2020.&nbsp;<a href="">Privacy Policy</a></p>
        <p><a class="ct-u-motive-color" href="" target="_blank">Web Developed</a> by Vivek kumar <a href="" target="_blank"></a></p>
      </div>
    </div>
  </div>
</footer>
      
      

        

        
  
      
      
    )

}
export default Footer