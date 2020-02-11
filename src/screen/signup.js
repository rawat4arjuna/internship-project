import React from 'react'
import { Link } from 'react-router-dom'
import {signup,checkEmail} from '../api/registerApi'
class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      Terms :false,
      email_exist :false,
      valid_userEmail :true,
      valid_password :true,
      valid_location : true,
      valid_userName :true,
      password :  "",
    user_email :"",
    location : "",
    user_name : ""};
  }

  async onSubmit()
  {
    const {password,user_email,location,user_name} =this.state
    const data = {
      password :  password,
    user_email :user_email,
    location : location,
    user_name : user_name};
    const count = await checkEmail(user_email)
    console.warn("data",count)
    if(count === 0)
    {
      if(this.ValidateEmail() && this.validateUserName() && this.ValidatePassword() && this.state.Terms) 
      {
       const res = await  signup (data)
       console.warn("data",res)
      }
    }
    else
    {
      this.setState({email_exist:true})
    }

   
    
  }

  ValidateEmail() 
  {
 if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("user_email").value))
  {
    this.setState({valid_userEmail:true})
    return (true)
  }
  this.setState({valid_userEmail:false})
    return (false)
  }

  ValidatePassword()
  {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  
   if (paswd.test(document.getElementById("password").value))
  {
    this.setState({valid_password:true})
    console.warn("done")
    return (true)
  }
  this.setState({valid_password:false})
    return (false)
  }
  
  validateUserName()
  {
    var name=  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
    if (name.test(document.getElementById("user_name").value))
   {
     this.setState({valid_userName:true})
     console.warn("done")
     return (true)
   }
   this.setState({valid_userName:false})
     return (false)
  }

onChecked()
{
  if(this.state.Terms)
  {
    this.setState({Terms : false})
    console.warn("false")
  }
  else
  {
    this.setState({Terms : true})
    console.warn("true")
  }
}

  render () {
    const {valid_userEmail ,valid_userName, valid_password,valid_location,email_exist} =this.state
   
    return <div className ="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
   <div className="container m-auto ">
        <div className ="bg-white rounded pb_form_v1" >
          <h2>Sign Up  For Free</h2>
         
          <div >
           
            <input
              type="email"
              className="form-control pb_height-50 reverse"
              placeholder ="Email"
              defaultValue =""
              id ="user_email"
              onChange = {()=>{this.setState({user_email : document.getElementById("user_email").value})}}
              onBlur = {()=>{this.ValidateEmail()}}
            />{
              valid_userEmail ? true :<small className ="small-color">Incorrect Email</small>
              
            }
            {
              email_exist ? <small className ="small-color">Incorrect Email</small>:false
            }
            <br/>
          </div>
          <div>
          
            <input
              type="password"
              className="form-control pb_height-50 reverse"
              placeholder ="Password"
              id ="password"
              defaultValue =""
              onChange = {()=>{this.setState({password : document.getElementById("password").value})}}
            onBlur ={()=>{this.ValidatePassword()}}
            ></input>
            {
              valid_password ? true :<small className ="small-color">Incorrect Password</small>
            }
          </div>
          <br/>
          <div >
           
            <input
              type="text"
              className="form-control pb_height-50 reverse"
              placeholder ="Full Name"
              id ="user_name"
              defaultValue =""
              onChange = {()=>{this.setState({user_name : document.getElementById("user_name").value})}}
            />
            <br/>
            {
              valid_userName ? true :<small className ="small-color">Incorrect Name</small>
            }
          </div>
          
          <div >
           
            <input
              type="text"
              className="form-control pb_height-50 reverse"
              placeholder ="Location"
              id ="location"
              defaultValue =""
              onChange = {()=>{this.setState({location : document.getElementById("location").value})}}
            />
           
          </div>
          <br/>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox"
              onClick ={()=>{this.onChecked()}}
            />
           
            <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to all Terms & conditions
            </label>
          </div>
          <div className="form-group">
          <button type="submit" onClick = { ()=>{this.onSubmit()}} className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue">
            Submit
          </button><br/>
          <label >New to the Site  </label><Link to ="/"> <label  className ="link-color">  Sign In </label></Link>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Signup