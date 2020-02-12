import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      res : []};
  }
  
  render() {
   

    return   <div className ="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
    <div className="container m-auto ">

         <div className ="bg-white rounded pb_form_v1">
           <h1>WELCOME</h1>
           <br/>
       
      
           <div  style = {{display :"flex" ,flexDirection :"row"}}>
           <label className ="link-color"> Name : </label>
          
             <label
            
            className="fbtn btn-secondary   pb_btn-pill  btn-shadow-blue"
         
          >Kotlin</label>
           
         </div>
         <br/>
         <div  style = {{display :"flex" ,flexDirection :"row"}}>
           <label className ="link-color"> Email :</label>
          
             <label
            
            className="fbtn btn-secondary   pb_btn-pill  btn-shadow-blue"
         
  >{localStorage.getItem('useremail')}</label>
           
         </div>
         <div  style = {{display :"flex" ,flexDirection :"row"}}>
           <label className ="link-color"> Intrest : </label>
          
             <label
            
            className="fbtn btn-secondary   pb_btn-pill  btn-shadow-blue"
          
          >{localStorage.getItem('interest')}</label>
           
         </div>
         </div>
       </div>
     </div>
  }
}
export default Home