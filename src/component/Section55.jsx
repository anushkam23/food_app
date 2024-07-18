<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import pointer from "./Images/pointer.png";

const MultipleInputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const formRef = useRef();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formRef);
    // console.log(formRef.current.p1.value);

    setUserRegistration({
      ...userRegistration,
      username: formRef.current.p1.value,
      email: formRef.current.p4.value,
    });

    console.log(formRef.current[0].value);

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  console.log(userRegistration);

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
                value={userRegistration.username}
                onChange={handleInput}
                id="p1"
              />
              <span className="details">How many people ?</span>
              <input
                type="number"
                placeholder="how many people ?"
                name="number"
                value={userRegistration.number}
                onChange={handleInput}
                id="p2"
              />
              <span className="details">What is the date ?</span>
              <input
                type="date"
                placeholder="what is the date ?"
                name="date"
                value={userRegistration.date}
                onChange={handleInput}
                id="p3"
              />
              <button type="submit" className="btn-box">
                Submit
              </button>
            </div>

            <div className="column2">
              <span className="details">Your email address ?</span>
              <input
                type="email"
                placeholder="Write your email here..."
                name="email"
                value={userRegistration.email}
                onChange={handleInput}
                id="p4"
              />
              <span className="details">What time ?</span>
              <input
                type="time"
                placeholder="Enter time..."
                name="time"
                value={userRegistration.time}
                onChange={handleInput}
                id="p5"
              />
              <span className="details">Your phone number ?</span>
              <input
                type="tel"
                placeholder="Write your number here"
                name="phone"
                value={userRegistration.phone}
                onChange={handleInput}
                id="p6"
                maxLength={10}
              />
            </div>
          </div>
        </form>
      </div>

      <div>
        {records.map((curElem) => (
          <div className="showDataStyle" key={curElem.id}>
            <p>Full Name: {curElem.username} </p>
            <p>Number of People: {curElem.number} </p>
            <p>Date: {curElem.date} </p>
            <p>Email: {curElem.email} </p>
            <p>Time: {curElem.time} </p>
            <p>Phone Number: {curElem.phone} </p>
          </div>
        ))}
      </div>
    </>
  );
};

=======
import React, { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import pointer from "./Images/pointer.png";

const MultipleInputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const formRef = useRef();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formRef);
    // console.log(formRef.current.p1.value);

    setUserRegistration({
      ...userRegistration,
      username: formRef.current.p1.value,
      email: formRef.current.p4.value,
    });

    console.log(formRef.current[0].value);

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  console.log(userRegistration);

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
                value={userRegistration.username}
                onChange={handleInput}
                id="p1"
              />
              <span className="details">How many people ?</span>
              <input
                type="number"
                placeholder="how many people ?"
                name="number"
                value={userRegistration.number}
                onChange={handleInput}
                id="p2"
              />
              <span className="details">What is the date ?</span>
              <input
                type="date"
                placeholder="what is the date ?"
                name="date"
                value={userRegistration.date}
                onChange={handleInput}
                id="p3"
              />
              <button type="submit" className="btn-box">
                Submit
              </button>
            </div>

            <div className="column2">
              <span className="details">Your email address ?</span>
              <input
                type="email"
                placeholder="Write your email here..."
                name="email"
                value={userRegistration.email}
                onChange={handleInput}
                id="p4"
              />
              <span className="details">What time ?</span>
              <input
                type="time"
                placeholder="Enter time..."
                name="time"
                value={userRegistration.time}
                onChange={handleInput}
                id="p5"
              />
              <span className="details">Your phone number ?</span>
              <input
                type="tel"
                placeholder="Write your number here"
                name="phone"
                value={userRegistration.phone}
                onChange={handleInput}
                id="p6"
                maxLength={10}
              />
            </div>
          </div>
        </form>
      </div>

      <div>
        {records.map((curElem) => (
          <div className="showDataStyle" key={curElem.id}>
            <p>Full Name: {curElem.username} </p>
            <p>Number of People: {curElem.number} </p>
            <p>Date: {curElem.date} </p>
            <p>Email: {curElem.email} </p>
            <p>Time: {curElem.time} </p>
            <p>Phone Number: {curElem.phone} </p>
          </div>
        ))}
      </div>
    </>
  );
};

>>>>>>> c9748e4 (first commits)
export default MultipleInputs;