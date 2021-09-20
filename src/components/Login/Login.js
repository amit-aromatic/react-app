import React, { Component } from "react";

class Login extends Component {

  constructor(props) {
      super(props)

      this.state = {
        email: "",
        password: "", 
        errors: {}, 
        formSubmitted: false,
        loading: false
      }
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }
  
  handleSubmit = (e) => {
    alert('A email was submitted: ' + this.state.email + ' with password ' + this.state.password);
    e.preventDefault();
  }

  render() {

    const { errors, formSubmitted } = this.state;
  
    return (
  
    <div className="row-fluid">
      <div className="col col-md-6 offset-md-3">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email"  onChange={this.handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password"  onChange={this.handlePassword} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    )
  };

};



export default Login;
