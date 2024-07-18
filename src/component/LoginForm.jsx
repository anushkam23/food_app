<<<<<<< HEAD

// export default LoginForm;
// import React, { useRef } from 'react';
// import './LoginForm.css';

// const LoginForm = () => {
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = usernameRef.current.value;
//     const password = passwordRef.current.value;

//     // Display the submitted data in an alert
//     alert(`Username: ${username}\nPassword: ${password}`);
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" ref={usernameRef} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" ref={passwordRef} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };



import React, { useState } from 'react';
import './LoginForm.css'; 
import { Link } from 'react-router-dom';
export default LoginForm;
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Store the submitted data
    const data = {
      username,
      password,
    };

    setSubmittedData(data);
  };

  return (


    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="submitted-data">
          <h4>"Login successful!"</h4>
          <p> {submittedData.username}</p>
          <p>Password: hidden</p>
        </div>
      )}
    </div>
    
  );
}











=======

// export default LoginForm;
// import React, { useRef } from 'react';
// import './LoginForm.css';

// const LoginForm = () => {
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = usernameRef.current.value;
//     const password = passwordRef.current.value;

//     // Display the submitted data in an alert
//     alert(`Username: ${username}\nPassword: ${password}`);
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" ref={usernameRef} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" ref={passwordRef} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };



import React, { useState } from 'react';
import './LoginForm.css'; 
import { Link } from 'react-router-dom';
export default LoginForm;
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Store the submitted data
    const data = {
      username,
      password,
    };

    setSubmittedData(data);
  };

  return (


    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="submitted-data">
          <h4>"Login successful!"</h4>
          <p> {submittedData.username}</p>
          <p>Password: hidden</p>
        </div>
      )}
    </div>
    
  );
}











>>>>>>> c9748e4 (first commits)
