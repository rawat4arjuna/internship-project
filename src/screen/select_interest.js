import React from 'react'

class Select_Interest extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      Interest : []};
  }
  setIntrest(interrest)
  {
   let Interest = this.state.Interest
   console.warn(Interest.indexOf(interrest))
   if(Interest.length === 3)
   {
     Interest[0] = Interest[1]
     Interest[1]= Interest[2]
     Interest.pop()
     Interest.push(interrest)
     this.setState ({ Interest :Interest})
   } 
   else if(Interest.length < 3)
   {
     Interest.push(interrest)
     this.setState ({ Interest :Interest})
   }
   
  }


  async onSubmit()
  {
    const interest = this.state.Interest
   localStorage.setItem('interest',interest)
  if( interest.toString().length > 0) { this.props.history.push('/home')} 
  }
  render() {
    const Interest = this.state.Interest

    return   <div className ="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
    <div className="container m-auto ">

         <div className ="bg-white rounded pb_form_v1">
           <h2>Select Interest</h2>
           <br/>
           <label className ="link-color"> {Interest.toString()}
        </label>
           <div  style = {{display :"flex" ,flexDirection :"row"}}>
           
            <label
              className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
            onClick = {()=>{this.setIntrest("React")}}
            >React</label>
            <label
              className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
            onClick = {()=>{this.setIntrest("Java")}}
            >Java</label>
          </div>
          
          <div  style = {{display :"flex" ,flexDirection :"row-reverse"}}>
           
           <label
            
             className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
           onClick = {()=>{this.setIntrest("Node")}}
           >Node</label>
             <label
            
             className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
           onClick = {()=>{this.setIntrest("SQL")}}
           >SQL</label>
             <label
            
            className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
          onClick = {()=>{this.setIntrest("Kotlin")}}
          >Kotlin</label>
           
         </div>
         <div  style = {{display :"flex" ,flexDirection :"row"}}>
           
           <label
             className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
           onClick = {()=>{this.setIntrest("Python")}}
           >Python</label>
           <br/>
           <label
             className="fbtn btn-secondary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
           onClick = {()=>{this.setIntrest("Dart")}}
           >Dart</label>
           <br/>
         </div>
          <br/>
           <div className="form-group">
           <button type="submit" onClick ={()=>{ this.onSubmit()}} className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue">
             Submit
           </button><br/>
        </div>
         </div>
       </div>
     </div>
  }
}
export default Select_Interest