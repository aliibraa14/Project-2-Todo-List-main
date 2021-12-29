import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerFunc = (e) => {
    e.preventDefault();
    console.log("reg");
    const newUser = {
      // ES6
      email,
      // "email": "email value in the state"
      password,
      username,
    };
    axios
      .post(`http://localhost:5000/users/register`, newUser)
      .then((response) => {
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="m-3 Login d-flex justify-content-center">
      <form action="" className="d-grid gap-3">
      <div className="form-floating ">
        <input 
          type="email" className="form-control"
          placeholder="Write email here ..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="floatingInput">Email address</label>
       </div><div className="form-floating ">
        <label htmlFor="floatingInput">Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Write password here ..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        </div>
        <div className="form-floating ">
        <label htmlFor="floatingInput">Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Write username here ..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        </div>
    <input type="submit" value="Register" className="btn btn-primary" onClick={registerFunc} 
        // className="btn btn-secondary" 
        />
        <Link to='/login'>Have An Account?</Link>
      </form>
    </div>
  );
}
