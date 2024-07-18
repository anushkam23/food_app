<<<<<<< HEAD
// import React from 'react';
// import {Image} from 'react-bootstrap';
// import logo from './Images/lgranLogo.png';
// import {Link} from 'react-scroll';
// export default function Header() {
  
//   return (
//     <>
//        <section id="header">
//         <nav>
//                    <ul>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section1' smooth={true} offset={-100} duration={1000} activeClass="activeLink">ABOUT US</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section2' smooth={true} offset={100} duration={1000} activeClass="activeLink">MENU</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section3' smooth={true} offset={100} duration={1000} activeClass="activeLink">GALLERY</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section4' smooth={true} offset={100} duration={1000} activeClass="activeLink"> <Image src= {logo} alt="" /> </Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section5' smooth={true} offset={100} duration={1000} activeClass="activeLink" >BOOKINGS</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section6' smooth={true} offset={100} duration={1000} activeClass="activeLink">CONTACT</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section7' smooth={true} offset={100} duration={1000} activeClass="activeLink">BLOGS</Link></li>
//             </ul>
//         </nav>
//         </section>
//         </>
//   );
// }


import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './Images/lgranLogo.png';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#Section1" onClick={() => scrollToSection('Section1')} className="link">ABOUT US</a>
        </li>
        <li>
          <a href="#Section2" onClick={() => scrollToSection('Section2')}  className="link"> MENU</a>
        </li>
        <li><a href="#Section3" onClick={() => scrollToSection('Section3')}  className="link"> GALLERY </a>
        </li>
        <li>
          <a href="#Section4" onClick={() => scrollToSection('Section4')}  className="link"><Image src={logo} alt="" /></a>
        </li>
        <li>
          <a href="#Section5" onClick={() => scrollToSection('Section5')}  className="link"> BOOKING</a>
        </li>
        <li><a href="#Section6" onClick={() => scrollToSection('Section6')}  className="link">CONTACT</a>
        </li>
        <li><a href="#Section7" onClick={() => scrollToSection('Section7')}  className="link">BLOGS</a>
        </li>
        {/* <li>
        <a href="#LoginForm" onClick={() => scrollToSection('LoginForm')}  className="link">LOGIN</a>
        </li> */}

      </ul>
    </nav>
  );
}


// import React from 'react';
// import { Image } from 'react-bootstrap';
// import logo from './Images/lgranLogo.png';
// import { NavLink } from 'react-router-dom'; // Import NavLink

// export default function Header() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/Section1" className="link" activeClassName="activeLink">
//             ABOUT US
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section2" className="link" activeClassName="activeLink">
//             MENU
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section3" className="link" activeClassName="activeLink">
//             Gallery
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section4" className="link" activeClassName="activeLink">
//             <Image src={logo} alt="" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section5" className="link" activeClassName="activeLink">
//             BOOKING
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section6" className="link" activeClassName="activeLink">
//             CONTACT
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section7" className="link" activeClassName="activeLink">
//             BLOGS
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
=======
// import React from 'react';
// import {Image} from 'react-bootstrap';
// import logo from './Images/lgranLogo.png';
// import {Link} from 'react-scroll';
// export default function Header() {
  
//   return (
//     <>
//        <section id="header">
//         <nav>
//                    <ul>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section1' smooth={true} offset={-100} duration={1000} activeClass="activeLink">ABOUT US</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section2' smooth={true} offset={100} duration={1000} activeClass="activeLink">MENU</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section3' smooth={true} offset={100} duration={1000} activeClass="activeLink">GALLERY</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section4' smooth={true} offset={100} duration={1000} activeClass="activeLink"> <Image src= {logo} alt="" /> </Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section5' smooth={true} offset={100} duration={1000} activeClass="activeLink" >BOOKINGS</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section6' smooth={true} offset={100} duration={1000} activeClass="activeLink">CONTACT</Link></li>
//                 <li><Link spy={true} style={({ isActive }) => ({ color: isActive ? '#f5b236' : '' })} to='Section7' smooth={true} offset={100} duration={1000} activeClass="activeLink">BLOGS</Link></li>
//             </ul>
//         </nav>
//         </section>
//         </>
//   );
// }


import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './Images/lgranLogo.png';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#Section1" onClick={() => scrollToSection('Section1')} className="link">ABOUT US</a>
        </li>
        <li>
          <a href="#Section2" onClick={() => scrollToSection('Section2')}  className="link"> MENU</a>
        </li>
        <li><a href="#Section3" onClick={() => scrollToSection('Section3')}  className="link"> GALLERY </a>
        </li>
        <li>
          <a href="#Section4" onClick={() => scrollToSection('Section4')}  className="link"><Image src={logo} alt="" /></a>
        </li>
        <li>
          <a href="#Section5" onClick={() => scrollToSection('Section5')}  className="link"> BOOKING</a>
        </li>
        <li><a href="#Section6" onClick={() => scrollToSection('Section6')}  className="link">CONTACT</a>
        </li>
        <li><a href="#Section7" onClick={() => scrollToSection('Section7')}  className="link">BLOGS</a>
        </li>
        {/* <li>
        <a href="#LoginForm" onClick={() => scrollToSection('LoginForm')}  className="link">LOGIN</a>
        </li> */}

      </ul>
    </nav>
  );
}


// import React from 'react';
// import { Image } from 'react-bootstrap';
// import logo from './Images/lgranLogo.png';
// import { NavLink } from 'react-router-dom'; // Import NavLink

// export default function Header() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/Section1" className="link" activeClassName="activeLink">
//             ABOUT US
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section2" className="link" activeClassName="activeLink">
//             MENU
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section3" className="link" activeClassName="activeLink">
//             Gallery
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section4" className="link" activeClassName="activeLink">
//             <Image src={logo} alt="" />
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section5" className="link" activeClassName="activeLink">
//             BOOKING
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section6" className="link" activeClassName="activeLink">
//             CONTACT
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Section7" className="link" activeClassName="activeLink">
//             BLOGS
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
>>>>>>> c9748e4 (first commits)
