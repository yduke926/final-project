import React, { Component } from 'react';




class Footer extends Component {
  render() {
    return (
        <div className="footer">
         <div className="footer-nav">
         <footer>
         <nav>
            <ul>
                <li><a href="http://www.facebook.com" target ="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a></li>
                <li><a href="http://www.twitter.com" target ="_blank" rel="noopener noreferrer" className="fa fa-twitter"></a></li>
                <li><a href="http://www.github.com" target ="_blank" rel="noopener noreferrer" className="fa fa-github"></a></li>
                <li><a href="http://www.instagram.com" target ="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a></li>
            </ul>
        </nav>  
        </footer>
        </div>
      </div>
    );
  };
}

export default Footer;
