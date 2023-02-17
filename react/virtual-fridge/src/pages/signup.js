import React, { Component }from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Login.css";
import "../style/signin.css"
// import logo from "../style/virtualfridgelogo.png"

class SignUp extends Component {
    handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.email.value);
  
      if (!e.target.email.value) {
        alert("Email is required");
      } else if (!e.target.email.value) {
        alert("Valid email is required");
      } else if (!e.target.password.value) {
        alert("Password is required");
      } else if (
        e.target.email.value === "katherinefeng2023@u.northwestern.edu" &&
        e.target.password.value === "123456"
      ) {
        alert("Successfully logged in");
        e.target.email.value = "";
        e.target.password.value = "";
      } else {
        alert("Wrong email or password combination");
      }
    };
  
    handleClick = e => {
      e.preventDefault();
  
      alert("Goes to registration page");
    };
  
    render() {
      return (
        <div class="section-form">
          {/* <img src={logo} alt="Business view - Reports" /> */}
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="example@email.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button className="primary">Enter</button>
          </form>
        </div>
      );
    }
  }
export default SignUp;