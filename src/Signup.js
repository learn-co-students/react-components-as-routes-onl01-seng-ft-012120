import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <br />
        <form>
          <div>
            <label htmlFor="fullname">Full Name: </label>
            <input
              type="text"
              name="fullname"
              placeholder="Put First and Last Name"
            />
          </div>
          <div>
            <label htmlFor="username">Desired Username: </label>
            <input type="text" name="username" placeholder="Desired Username" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <inout tpye="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Signup;
