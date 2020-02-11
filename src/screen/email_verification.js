import React from 'react'
import { Link } from 'react-router-dom'
class Email_Verification extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      valid_otp : true,
     email : localStorage.getItem("useremail")};
  }


  render () {
   const {email,valid_otp} = this.state

    return <div className ="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
   <div className="container m-auto ">
        <form className ="bg-white rounded pb_form_v1">
          <h2 className ="link-color" >Verify Your Email Address</h2>
              <h3>Enter 5 digit OTP sent on {email}</h3>
             <input
              type="text"
              className="form-control pb_height-50 reverse"
              placeholder ="Enter OTP"
              id ="user_otp"
              defaultValue =""
              
            />
            <br/>
            {
              valid_otp ? true :<small className ="small-color">Invalid Otp</small>
            }
         <br/>
          <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue">
            Submit
          </button><br/>
          <label >Switch Account  </label><Link to ="/"> <label  className ="link-color">  Login  </label></Link>
          </div>
        </form>
      </div>
    </div>
  }
}
export default Email_Verification