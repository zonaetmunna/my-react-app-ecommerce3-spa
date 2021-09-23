import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
     return (
          <div className="header">
               <div>
                    <img src={logo} alt="" />

               </div>
               <div>
                    <nav>
                         <a href="">Shop</a>
                         <a href="">Order Review</a>
                         <a href="">Manage </a>
                         <a href="">Inventory here</a>
                    </nav>
               </div>

          </div>
     );
};

export default Header;