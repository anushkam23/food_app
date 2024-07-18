<<<<<<< HEAD
// import React from 'react'
// import {Image} from 'react-bootstrap';
// import pointer from './Images/pointer.png';

// export default function Section5() {
//   return (
//     <>
//           {/* <div className="ff2"> </div>      
//     <div className="patti"> </div> */}
//     <div className="fifthcat" id="Section5" ref={Section5}>
//     <h1>
//       {' '}
//       <Image src={pointer} alt="" /> BOOK NOW{' '}
//       <Image src={pointer} alt="" />
//     </h1>
//     <p>Book Your Table Now And Have A Great Meal !</p>
//     <div className="page-container">
//       <div className="column1">
//         <form action="">
//           <span className="details">Your Full Name ?</span>
//           <input type="text" placeholder="Write your name here.." id="p1" />
//           <span className="details">How many people ?</span>
//           <input type="number" placeholder="how many people ?" id="p2" />
//           <span className="details">What is the date ?</span>
//           <input type="date" placeholder="what is the date ?" id="p3" />
//         </form>
//       </div>

//       <div className="column2">
//         <form action="">
//           <span className="details">Your email address ?</span>
//           <input
//             type="email"
//             placeholder="Write your email here..."
//             id="p4"
//           />
//           <span className="details">What time ?</span>
//           <input type="time" placeholder="Enter time..." id="p5" />
//           <span className="details">Your phone number ?</span>
//           <input
//             type="number"
//             placeholder="Write your number here"
//             id="p6"
//           />
//         </form>
//       </div>
//     </div>

//     <div className="btn-box">
//       <a href="/">Submit</a>
//     </div>
//   </div>
//   </>
//   )
// }



// import React from 'react'
// import {Image} from 'react-bootstrap';
// import pointer from './Images/pointer.png';
// import React, { useState } from 'react';

// const MultipleInputs = () => {
//   const [userRegistration, setUserRegistration] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserRegistration({ ...userRegistration, [name]: value });
//   }

//   const [records, setRecords] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
//     setRecords([...records, newRecord]);
//     setUserRegistration({ username: "", email: "", phone: "", password: "" });
//   }
//   export default function Section5() {
//   return (
//     <>
//        <div className="fifthcat" id="Section5" ref={Section5}>
// <h1>
//       {' '}
//       <Image src={pointer} alt="" /> BOOK NOW{' '}
//       <Image src={pointer} alt="" />
//    </h1>
//    <p>Book Your Table Now And Have A Great Meal !</p>
//       <form action="" onSubmit={handleSubmit}>
//         <div className='column1'>
//         <div>
//           <label htmlFor="username" className='details'>Your Full Name ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.username}
//             onChange={handleInput}
//             name="username"
//             id="p1"
//           />
//         </div>
//         <div>
//           <label htmlFor="number" className='details'>How many people ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.email}
//             onChange={handleInput}
//             name="number"
//             id="p2"
//           />
//         </div>
//         <div>
//           <label htmlFor="date" className='details'>What is the date ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.phone}
//             onChange={handleInput}
//             name="date"
//             id="p3"
//           />
//         </div>
//         </div>


// <div className='column2'>
//         <div>
//           <label htmlFor="email" className='details'>Your email address ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="email"
//             id="p4"
//           />
//         </div>

//         <div>
//           <label htmlFor="number" className='details'>What time ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="time"
//             id="p5"
//           />
//         </div>

//         <div>
//           <label htmlFor="number" className='details'>Your Phone number ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="number"
//             id="p6"
//           />
//         </div>
//         </div>
//         <button type="submit" className='btn-box'>Registration</button>
//       </form>

//       <div>
//         {
//           records.map((curElem) => {
//             const { id, username, email, phone, password } = curElem;
//             return (
//               <div className="showDataStyle" key={id}>
//                 <p>{curElem.username} </p>
//                 <p>{curElem.email} </p>
//                 <p>{curElem.phone} </p>
//                 <p>{curElem.password} </p>
//               </div>
//             )
//           })
//         }
//       </div>
//       </div>
//     </>
//   );
// }


// import React, { useState } from 'react';
// import { Image } from 'react-bootstrap';
// import pointer from './Images/pointer.png';

// const MultipleInputs = () => {
//   const [userRegistration, setUserRegistration] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserRegistration({ ...userRegistration, [name]: value });
//   }

//   const [records, setRecords] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
//     setRecords([...records, newRecord]);
//     setUserRegistration({ username: "", email: "", phone: "", password: "" });
//   }

//   return (
//     <>
//       <div className="fifthcat" id="Section5">
//         <h1 className="ycolor">
//           <Image src={pointer} alt="" /> BOOK NOW <Image src={pointer} alt="" />
//         </h1>
//         <p>Book Your Table Now And Have A Great Meal!</p>

//         <div className="page-container">
//           <div className="column1">
//             <form onSubmit={handleSubmit}>
//               <span className="details" >Your Full Name ?</span>
//               <input
//                 type="text"
//                 placeholder="Write your name here.."
//                 name="username"
//                 value={userRegistration.username}
//                 onChange={handleInput}
//                 id="p1"
//               />
//               <span className="details">How many people ?</span>
//               <input
//                 type="number"
//                 placeholder="how many people ?"
//                 name="number"
//                 value={userRegistration.number}
//                 onChange={handleInput}
//                 id="p2"
//               />
//               <span className="details">What is the date ?</span>
//               <input
//                 type="date"
//                 placeholder="what is the date ?"
//                 name="date"
//                 value={userRegistration.date}
//                 onChange={handleInput}
//                 id="p3"
//               />
//               <button type="submit" className='btn-box'>Submit</button>
//             </form>
//           </div>

//           <div className="column2">
//             <form onSubmit={handleSubmit}>
//               <span className="details" >Your email address ?</span>
//               <input
//                 type="email"
//                 placeholder="Write your email here..."
//                 name="email"
//                 value={userRegistration.email}
//                 onChange={handleInput}
//                 id="p4"
//               />
//               <span className="details" >What time ?</span>
//               <input
//                 type="time"
//                 placeholder="Enter time..."
//                 name="time"
//                 value={userRegistration.time}
//                 onChange={handleInput}
//                 id="p5"
//               />
//               <span className="details">Your phone number ?</span>
//               <input
//                 type="tel"
//                 placeholder="Write your number here"
//                 name="phone"
//                 value={userRegistration.phone}
//                 onChange={handleInput}
//                 id="p6"
//                 maxLength={10}
//               />
//             </form>
//           </div>
//         </div>
//       </div>

//       <div>
//         {records.map((curElem) => (
//           <div className="showDataStyle" key={curElem.id}>
//             <p>Full Name: {curElem.username} </p>
//             <p>Number of People: {curElem.number} </p>
//             <p>Date: {curElem.date} </p>
//             <p>Email: {curElem.email} </p>
//             <p>Time: {curElem.time} </p>
//             <p>Phone Number: {curElem.phone} </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default MultipleInputs;

// import React, { useRef, useState } from 'react';
// import { Image } from 'react-bootstrap';
// import pointer from './Images/pointer.png';

// const Section5 = () => {
//   const [formInfo, setFormInfo] = useState({
//     name: '',
//     date: '',
//     email: '',
//     people: '',
//     time: '',
//     phoneno: '',
//   });

//   const form = useRef();

//   const formData = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//   console.log([...data.entries()]);
//     console.log(form);
//     const name = form.current.querySelector('#p1').value;
//     const date = form.current.querySelector('#p3').value;
//     const email = form.current.querySelector('#p4').value;
//     const people = form.current.querySelector('#p2').value;
//     const time = form.current.querySelector('#p5').value;
//     const phoneno = form.current.querySelector('#p6').value;
//     setFormInfo({ name, date, email, people, time, phoneno });

//     // Display the form data in the console
//     console.log(formInfo);
   

//     form.current.reset();
//   };

//   return (
//     <>
//       <div className="fifthcat" id="Section5">
//         <h1 className="ycolor">
//           <Image src={pointer} alt="" /> BOOK NOW <Image src={pointer} alt="" />
//         </h1>
//         <p>Book Your Table Now And Have A Great Meal!</p>
//         <form ref={form} onSubmit={formData}>
//         <div className="page-container">
//           <div className="column1">
//           <form action="">
//               <span className="details">Your Full Name?</span>
//               <input type="text" placeholder="Write your name here.." id="p1" />
//               <span className="details">How many people?</span>
//               <input type="number" placeholder="How many people?" id="p2" />
//         <span className="details">What is the date?
//               <input type="date" placeholder="What is the date?" id="p3" /> </span> 
//               </form>
//           </div>

//           <div className="column2">
//            <form action="">
//               <span className="details">Your email address?</span>
//               <input type="email" placeholder="Write your email here..." id="p4" />
//               <span className="details">What time?</span>
//               <input type="time" placeholder="Enter time..." id="p5" />
//               <span className="details">Your phone number?</span>
//               <input type="tel" placeholder="Write your number here" id="p6" />
//               </form>
//           </div>
//         </div>

// <div className="btn-box">
//         <button type="submit">Submit</button>
//         </div>
// </form>

//         <h2>Your Form Data:</h2>
//         <p>Name: {formInfo.name}</p>
//         <p>People: {formInfo.people}</p>
//         <p>Date: {formInfo.date}</p>
//         <p>Email: {formInfo.email}</p>
//         <p>Time: {formInfo.time}</p>
//         <p>Phone Number: {formInfo.phoneno}</p>
//       </div>
//     </>
//   );
// };

// export default Section5;
  


import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import pointer from "./Images/pointer.png";

export default function Section5() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const peopRef = useRef();
  // const mesRef = useRef(); // Uncomment this line for the message field
  const formRef = useRef(); // Add a ref for the form

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const time = timeRef.current.value;
    const date = dateRef.current.value;
    const people = peopRef.current.value;
    // const mes = mesRef.current.value; // Uncomment this line for the message field

    window.alert(`Your form has been submitted\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nTime: ${time}\nDate: ${date}\nNumber of people: ${people}`);
  }

  return (
    <>
      <div className="fifthcat" id="Section5">
        <h1 className="ycolor">
          <Image src={pointer} alt="" /> BOOK NOW <Image src={pointer} alt="" />
        </h1>
        <p>Book Your Table Now And Have A Great Meal!</p>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="page-container">
            <div className="column1">
              <span className="details">Your Full Name ?</span>
              <input
                type="text"
                placeholder="Write your name here.."
                name="username"
                ref={nameRef}
                id="p1"
              />
              <span className="details">How many people ?</span>
              <input
                type="number"
                placeholder="Enter the number of people"
                name="people"
                ref={peopRef}
                id="p2"
              />
              <span className="details">What is the date?</span>
              <input
                type="date"
                placeholder="Enter the date"
                name="date"
                ref={dateRef}
                id="p3"
              />
            </div>

            {/* Uncomment this section for the message field
            <div className="column2">
              <span className="details">Your Message</span>
              <textarea
                placeholder="Write your message here..."
                name="message"
                ref={mesRef}
              />
            </div>
            */}
            
            <div className="column2">
              <span className="details">Your email address ?</span>
              <input
                type="email"
                placeholder="Write your email here..."
                name="email"
                ref={emailRef}
                id="p4"
              />
              <span className="details">What time ?</span>
              <input
                type="time"
                placeholder="Enter time..."
                name="time"
                ref={timeRef}
                id="p5"
              />
              <span className="details">Your phone number ?</span>
              <input
                type="tel"
                placeholder="Write your number here"
                name="phone"
                ref={phoneRef}
                id="p6"
                maxLength={10}
              />
            </div>
          </div>
          <button type="submit" className="btn-box">
            Submit
          </button>
        </form>
      </div>
    </>
  );
=======
// import React from 'react'
// import {Image} from 'react-bootstrap';
// import pointer from './Images/pointer.png';

// export default function Section5() {
//   return (
//     <>
//           {/* <div className="ff2"> </div>      
//     <div className="patti"> </div> */}
//     <div className="fifthcat" id="Section5" ref={Section5}>
//     <h1>
//       {' '}
//       <Image src={pointer} alt="" /> BOOK NOW{' '}
//       <Image src={pointer} alt="" />
//     </h1>
//     <p>Book Your Table Now And Have A Great Meal !</p>
//     <div className="page-container">
//       <div className="column1">
//         <form action="">
//           <span className="details">Your Full Name ?</span>
//           <input type="text" placeholder="Write your name here.." id="p1" />
//           <span className="details">How many people ?</span>
//           <input type="number" placeholder="how many people ?" id="p2" />
//           <span className="details">What is the date ?</span>
//           <input type="date" placeholder="what is the date ?" id="p3" />
//         </form>
//       </div>

//       <div className="column2">
//         <form action="">
//           <span className="details">Your email address ?</span>
//           <input
//             type="email"
//             placeholder="Write your email here..."
//             id="p4"
//           />
//           <span className="details">What time ?</span>
//           <input type="time" placeholder="Enter time..." id="p5" />
//           <span className="details">Your phone number ?</span>
//           <input
//             type="number"
//             placeholder="Write your number here"
//             id="p6"
//           />
//         </form>
//       </div>
//     </div>

//     <div className="btn-box">
//       <a href="/">Submit</a>
//     </div>
//   </div>
//   </>
//   )
// }



// import React from 'react'
// import {Image} from 'react-bootstrap';
// import pointer from './Images/pointer.png';
// import React, { useState } from 'react';

// const MultipleInputs = () => {
//   const [userRegistration, setUserRegistration] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserRegistration({ ...userRegistration, [name]: value });
//   }

//   const [records, setRecords] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
//     setRecords([...records, newRecord]);
//     setUserRegistration({ username: "", email: "", phone: "", password: "" });
//   }
//   export default function Section5() {
//   return (
//     <>
//        <div className="fifthcat" id="Section5" ref={Section5}>
// <h1>
//       {' '}
//       <Image src={pointer} alt="" /> BOOK NOW{' '}
//       <Image src={pointer} alt="" />
//    </h1>
//    <p>Book Your Table Now And Have A Great Meal !</p>
//       <form action="" onSubmit={handleSubmit}>
//         <div className='column1'>
//         <div>
//           <label htmlFor="username" className='details'>Your Full Name ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.username}
//             onChange={handleInput}
//             name="username"
//             id="p1"
//           />
//         </div>
//         <div>
//           <label htmlFor="number" className='details'>How many people ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.email}
//             onChange={handleInput}
//             name="number"
//             id="p2"
//           />
//         </div>
//         <div>
//           <label htmlFor="date" className='details'>What is the date ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.phone}
//             onChange={handleInput}
//             name="date"
//             id="p3"
//           />
//         </div>
//         </div>


// <div className='column2'>
//         <div>
//           <label htmlFor="email" className='details'>Your email address ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="email"
//             id="p4"
//           />
//         </div>

//         <div>
//           <label htmlFor="number" className='details'>What time ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="time"
//             id="p5"
//           />
//         </div>

//         <div>
//           <label htmlFor="number" className='details'>Your Phone number ?</label>
//           <input type="text" autoComplete="off"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="number"
//             id="p6"
//           />
//         </div>
//         </div>
//         <button type="submit" className='btn-box'>Registration</button>
//       </form>

//       <div>
//         {
//           records.map((curElem) => {
//             const { id, username, email, phone, password } = curElem;
//             return (
//               <div className="showDataStyle" key={id}>
//                 <p>{curElem.username} </p>
//                 <p>{curElem.email} </p>
//                 <p>{curElem.phone} </p>
//                 <p>{curElem.password} </p>
//               </div>
//             )
//           })
//         }
//       </div>
//       </div>
//     </>
//   );
// }


// import React, { useState } from 'react';
// import { Image } from 'react-bootstrap';
// import pointer from './Images/pointer.png';

// const MultipleInputs = () => {
//   const [userRegistration, setUserRegistration] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserRegistration({ ...userRegistration, [name]: value });
//   }

//   const [records, setRecords] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
//     setRecords([...records, newRecord]);
//     setUserRegistration({ username: "", email: "", phone: "", password: "" });
//   }

//   return (
//     <>
//       <div className="fifthcat" id="Section5">
//         <h1 className="ycolor">
//           <Image src={pointer} alt="" /> BOOK NOW <Image src={pointer} alt="" />
//         </h1>
//         <p>Book Your Table Now And Have A Great Meal!</p>

//         <div className="page-container">
//           <div className="column1">
//             <form onSubmit={handleSubmit}>
//               <span className="details" >Your Full Name ?</span>
//               <input
//                 type="text"
//                 placeholder="Write your name here.."
//                 name="username"
//                 value={userRegistration.username}
//                 onChange={handleInput}
//                 id="p1"
//               />
//               <span className="details">How many people ?</span>
//               <input
//                 type="number"
//                 placeholder="how many people ?"
//                 name="number"
//                 value={userRegistration.number}
//                 onChange={handleInput}
//                 id="p2"
//               />
//               <span className="details">What is the date ?</span>
//               <input
//                 type="date"
//                 placeholder="what is the date ?"
//                 name="date"
//                 value={userRegistration.date}
//                 onChange={handleInput}
//                 id="p3"
//               />
//               <button type="submit" className='btn-box'>Submit</button>
//             </form>
//           </div>

//           <div className="column2">
//             <form onSubmit={handleSubmit}>
//               <span className="details" >Your email address ?</span>
//               <input
//                 type="email"
//                 placeholder="Write your email here..."
//                 name="email"
//                 value={userRegistration.email}
//                 onChange={handleInput}
//                 id="p4"
//               />
//               <span className="details" >What time ?</span>
//               <input
//                 type="time"
//                 placeholder="Enter time..."
//                 name="time"
//                 value={userRegistration.time}
//                 onChange={handleInput}
//                 id="p5"
//               />
//               <span className="details">Your phone number ?</span>
//               <input
//                 type="tel"
//                 placeholder="Write your number here"
//                 name="phone"
//                 value={userRegistration.phone}
//                 onChange={handleInput}
//                 id="p6"
//                 maxLength={10}
//               />
//             </form>
//           </div>
//         </div>
//       </div>

//       <div>
//         {records.map((curElem) => (
//           <div className="showDataStyle" key={curElem.id}>
//             <p>Full Name: {curElem.username} </p>
//             <p>Number of People: {curElem.number} </p>
//             <p>Date: {curElem.date} </p>
//             <p>Email: {curElem.email} </p>
//             <p>Time: {curElem.time} </p>
//             <p>Phone Number: {curElem.phone} </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default MultipleInputs;

// import React, { useRef, useState } from 'react';
// import { Image } from 'react-bootstrap';
// import pointer from './Images/pointer.png';

// const Section5 = () => {
//   const [formInfo, setFormInfo] = useState({
//     name: '',
//     date: '',
//     email: '',
//     people: '',
//     time: '',
//     phoneno: '',
//   });

//   const form = useRef();

//   const formData = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//   console.log([...data.entries()]);
//     console.log(form);
//     const name = form.current.querySelector('#p1').value;
//     const date = form.current.querySelector('#p3').value;
//     const email = form.current.querySelector('#p4').value;
//     const people = form.current.querySelector('#p2').value;
//     const time = form.current.querySelector('#p5').value;
//     const phoneno = form.current.querySelector('#p6').value;
//     setFormInfo({ name, date, email, people, time, phoneno });

//     // Display the form data in the console
//     console.log(formInfo);
   

//     form.current.reset();
//   };

//   return (
//     <>
//       <div className="fifthcat" id="Section5">
//         <h1 className="ycolor">
//           <Image src={pointer} alt="" /> BOOK NOW <Image src={pointer} alt="" />
//         </h1>
//         <p>Book Your Table Now And Have A Great Meal!</p>
//         <form ref={form} onSubmit={formData}>
//         <div className="page-container">
//           <div className="column1">
//           <form action="">
//               <span className="details">Your Full Name?</span>
//               <input type="text" placeholder="Write your name here.." id="p1" />
//               <span className="details">How many people?</span>
//               <input type="number" placeholder="How many people?" id="p2" />
//         <span className="details">What is the date?
//               <input type="date" placeholder="What is the date?" id="p3" /> </span> 
//               </form>
//           </div>

//           <div className="column2">
//            <form action="">
//               <span className="details">Your email address?</span>
//               <input type="email" placeholder="Write your email here..." id="p4" />
//               <span className="details">What time?</span>
//               <input type="time" placeholder="Enter time..." id="p5" />
//               <span className="details">Your phone number?</span>
//               <input type="tel" placeholder="Write your number here" id="p6" />
//               </form>
//           </div>
//         </div>

// <div className="btn-box">
//         <button type="submit">Submit</button>
//         </div>
// </form>

//         <h2>Your Form Data:</h2>
//         <p>Name: {formInfo.name}</p>
//         <p>People: {formInfo.people}</p>
//         <p>Date: {formInfo.date}</p>
//         <p>Email: {formInfo.email}</p>
//         <p>Time: {formInfo.time}</p>
//         <p>Phone Number: {formInfo.phoneno}</p>
//       </div>
//     </>
//   );
// };

// export default Section5;
  


import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import pointer from "./Images/pointer.png";

export default function Section5() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const peopRef = useRef();
  // const mesRef = useRef(); // Uncomment this line for the message field
  const formRef = useRef(); // Add a ref for the form

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const time = timeRef.current.value;
    const date = dateRef.current.value;
    const people = peopRef.current.value;
    // const mes = mesRef.current.value; // Uncomment this line for the message field

    window.alert(`Your form has been submitted\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nTime: ${time}\nDate: ${date}\nNumber of people: ${people}`);
  }

  return (
    <>
      <div className="fifthcat" id="Section5">
        <h1 className="ycolor">
          <Image src={pointer} alt="" /> BOOK NOW <Image src={pointer} alt="" />
        </h1>
        <p>Book Your Table Now And Have A Great Meal!</p>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="page-container">
            <div className="column1">
              <span className="details">Your Full Name ?</span>
              <input
                type="text"
                placeholder="Write your name here.."
                name="username"
                ref={nameRef}
                id="p1"
              />
              <span className="details">How many people ?</span>
              <input
                type="number"
                placeholder="Enter the number of people"
                name="people"
                ref={peopRef}
                id="p2"
              />
              <span className="details">What is the date?</span>
              <input
                type="date"
                placeholder="Enter the date"
                name="date"
                ref={dateRef}
                id="p3"
              />
            </div>

            {/* Uncomment this section for the message field
            <div className="column2">
              <span className="details">Your Message</span>
              <textarea
                placeholder="Write your message here..."
                name="message"
                ref={mesRef}
              />
            </div>
            */}
            
            <div className="column2">
              <span className="details">Your email address ?</span>
              <input
                type="email"
                placeholder="Write your email here..."
                name="email"
                ref={emailRef}
                id="p4"
              />
              <span className="details">What time ?</span>
              <input
                type="time"
                placeholder="Enter time..."
                name="time"
                ref={timeRef}
                id="p5"
              />
              <span className="details">Your phone number ?</span>
              <input
                type="tel"
                placeholder="Write your number here"
                name="phone"
                ref={phoneRef}
                id="p6"
                maxLength={10}
              />
            </div>
          </div>
          <button type="submit" className="btn-box">
            Submit
          </button>
        </form>
      </div>
    </>
  );
>>>>>>> c9748e4 (first commits)
}