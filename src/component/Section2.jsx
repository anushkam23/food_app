<<<<<<< HEAD
import React from 'react';
import {Image} from 'react-bootstrap';
import pointer from './Images/pointer.png';
// import pp from './Images/fff.png';
// import pp from './Images/fff.png';
import aboutLgran from './Images/aboutLgran.png';


// bg-img img-fluid

export default function Section2() {
  return (
    <>
    {/* <div className="ff2"> </div>      
    <div className="patti"></div> */}
    <div className="secondCat" id="Section2" ref={Section2}>
    <div className="textmy mx-auto">
      <h1 className="text-uppercase">
        <Image className='bg-img' src={pointer} alt="" /> About{' '}
        <span id="aboutt">
          <Image src={aboutLgran} alt="" />
        </span>{' '}
        <Image src={pointer} alt="" />
      </h1>
      <p className="text-start mx-auto p-4 text-wrap fs-5">
      <span id="essay">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        <br />
        ipsum suspendisse ultrices gravida. Risus commodo vive rra
        <br />
        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
        <br />
        consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut
        <br />
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <br />
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
      </p>
      <span id="base">
        Visit OR Book <span id="visit" className="text-uppercase"> Now </span>
      </span>
    </div>
  </div> 
  </>
  )
=======
import React from 'react';
import {Image} from 'react-bootstrap';
import pointer from './Images/pointer.png';
// import pp from './Images/fff.png';
// import pp from './Images/fff.png';
import aboutLgran from './Images/aboutLgran.png';


// bg-img img-fluid

export default function Section2() {
  return (
    <>
    {/* <div className="ff2"> </div>      
    <div className="patti"></div> */}
    <div className="secondCat" id="Section2" ref={Section2}>
    <div className="textmy mx-auto">
      <h1 className="text-uppercase">
        <Image className='bg-img' src={pointer} alt="" /> About{' '}
        <span id="aboutt">
          <Image src={aboutLgran} alt="" />
        </span>{' '}
        <Image src={pointer} alt="" />
      </h1>
      <p className="text-start mx-auto p-4 text-wrap fs-5">
      <span id="essay">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        <br />
        ipsum suspendisse ultrices gravida. Risus commodo vive rra
        <br />
        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
        <br />
        consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut
        <br />
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <br />
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
      </p>
      <span id="base">
        Visit OR Book <span id="visit" className="text-uppercase"> Now </span>
      </span>
    </div>
  </div> 
  </>
  )
>>>>>>> c9748e4 (first commits)
}