import React from 'react'
import { Link } from 'react-router-dom'
import {sendmail} from '../api/loginApi'
import {Connection} from '../api/connectionApi'
class Email_Verification extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      valid_otp : true,
     email : localStorage.getItem("useremail")};
  }
async componentDidMount()
{
  sendmail().catch(console.error)
}
  async onSubmit()
  {
    
    if(document.getElementById('user_otp') === '12345')
    {
    try { const db =Connection()
const res = await db.collection('user').updateOne({user_email : localStorage.getItem('useremail')},{verified :false},{security: {authorization : "disabled"}})
console.log("Found docs",res)}catch(err)
{
  console.warn(err)
}
      this.props.history.push('/home')
    }
    this.props.history.push('/home')

  }

  render () {
   const {email,valid_otp} = this.state

    return <div className ="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
   <div className="container m-auto ">
        <form className ="bg-white rounded pb_form_v1">
          <h2 className ="link-color" >Verify Your Email Address</h2>
              <h3>Enter 5 digit OTP sent on {email}</h3>
             <input
              type="number"
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
          <button type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" onClick = {()=>{this.onSubmit()}}>
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