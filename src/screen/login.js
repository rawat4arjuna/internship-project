import React from 'react'
import { Link } from 'react-router-dom'
import {login,sendmail} from '../api/loginApi'
class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      falied :false,
      valid_userEmail :true,
      valid_password :true,
      password :  "",
    user_email :""};
  }





async loginSubmit()
{
  
  const {password,user_email} =this.state
    const data = {
      password :  password,
    user_email :user_email}
    
      if(this.ValidateEmail()  && this.ValidatePassword()) 
      {
       const res = await  login (data)
       console.warn("data",res)
       if(res !== null)
       {
        if(res.password === password && res.user_email===user_email)
        {
          localStorage.setItem("useremail",user_email)
          localStorage.setItem("password",password)
          if(!res.verified)
          {
            sendmail()
            
         this.props.history.push('auth')

          }
         
        }
        else
        {
 
        }

       }
       
       
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



  render () {
   
    const {valid_userEmail,valid_password} =this.state

    return <div className ="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
   <div className="container m-auto ">
        <div className ="bg-white rounded pb_form_v1">
          <h2>Log In  For Free</h2>
          <br/>
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
         
         <br/>
          <div className="form-group">
          <button type="submit" onClick ={()=>{this.loginSubmit()}} className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue">
            Submit
          </button><br/>
          <label >New to the Site  </label><Link to ="/signup"> <label  className ="link-color">  Sign Up </label></Link>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Login