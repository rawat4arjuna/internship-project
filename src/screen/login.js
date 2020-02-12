import React from 'react'
import { Link } from 'react-router-dom'
import {login} from '../api/loginApi'

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      eye : false,
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
       const res = await  login (data).catch(console.error)
      
       if(typeof res !== "undefined" &&  res !== null)
       {
        if(res.password === password && res.user_email===user_email)
        {
          localStorage.setItem("useremail",user_email)
          localStorage.setItem("password",password)
          if(!res.verified)
          {
            
            
         this.props.history.push('auth')

          }
          else
          {
            if(localStorage.getItem('interest').length > 0)
            {
              this.props.history.push('/home')
            }
            else
            {
              this.props.history.push('/interest')
            }
            
          }
         
        }
        else
        {
          window.alert("Login Failed")
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


eye()
{
  if(this.state.eye)
  {
    this.setState({eye:false})
  }
  else
  {
    this.setState({eye:true})
  }
}
  render () {
   
    const {valid_userEmail,valid_password,eye} =this.state

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
          <div className="input-group mb-3">
  <input type= {eye ? "text": "password"}
              className="form-control pb_height-50 reverse"
              placeholder ="Password"
              id ="password"
              defaultValue =""
              onChange = {()=>{this.setState({password : document.getElementById("password").value})}}
            onBlur ={()=>{this.ValidatePassword()}} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    {
      eye ?  <i className="fa fa-eye"  style = {{ position : "absolute" , transform : '2' ,right : '2%' ,top : "20%"}} onClick = {()=>{this.eye()}} aria-hidden="true"></i> :
      <i class="fa fa-eye-slash" style = {{ position : "absolute" , transform : '2' ,right : '2%' ,top : "20%"}} onClick = {()=>{this.eye()}} aria-hidden="true"></i>
    }
 
  </div>
  
</div>
{
              valid_password ? true :<small className ="small-color">Incorrect Password</small>
            }
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