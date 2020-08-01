import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import logo from "./Screens/images/slide_2.jpg"
import './Screens/navbar.css'
import $  from "jquery"
class NavBar extends Component{
    componentDidMount(){
      $(document).ready(function() {
        $('.toggle-nav').click(function(e) {
          $(this).toggleClass('active');
          $('.menu ul').toggleClass('active');
      
          e.preventDefault();
        });
      });

    }
    render(){
      return(
        <nav class="menu">
        <ul class="active">
          <li><img class="log" src={logo}/> </li>
          <li><h1 class="texty">The True Events</h1></li>
          <li class="current-item"><Link to="/">Home</Link></li>
          <li><Link  to="/Timeline">My Work</Link></li>
          <li><Link to="/aboutme">About Me</Link></li>
          <li><Link  to="/Contactme">Get in Touch</Link></li>
        </ul>
        
        <a class="toggle-nav" href="#">&#9776;</a>
      </nav>

      )
    }
    
    

}
export default NavBar