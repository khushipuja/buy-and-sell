import React, { Component } from 'react'
import axios from 'axios';

export class Jobs extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       product:'',
       description:'',
       avatar:'',
       cost:''
    }
  }
  
 changeHandler=(e)=>{

this.setState({
  ...this.state,
  [e.target.name]:e.target.value
})
}

changeHandlerimage=(e)=>{
 
 

  this.setState({
    ...this.state,
    avatar:e.target.value
  })
  console.log(this.state.avatar);
  
}

//when submit button is clicked i want to make post request to store products in product database

submitHandler=(e)=>{
  e.preventDefault();
  const product=this.state;
  axios.post('http://localhost:8000/api/products_save',product).then(res=>{
  // console.log(res.data);
  
  window.location="/about";
  
}).catch(err=>{
  console.log(err);
  
})


  }
  










  render() {
    return (
      <div>
      <h1>Jobs</h1>
<form  encType="multipart/form-data" onSubmit={(e)=>{this.submitHandler(e)}}>
  <label>Product Name</label><br></br><br></br>
  <input type="text" placeholder="enter name of product" name="product" value={this.state.product} onChange={(e)=>{this.changeHandler(e)}}></input>
  <br></br><br></br>
  <label>Description of Product</label><br></br><br></br>
  <input type="text" placeholder="enter description of product" name="description" value={this.state.description} onChange={(e)=>{this.changeHandler(e)}}></input>
  <br></br><br></br>
  <label>Product Image</label><br></br><br></br>
  <input type="file" placeholder="enter name of product" name="avatar"  value={this.state.avatar}  onChange={(e)=>{this.changeHandlerimage(e)}}></input>
  

  <br></br><br></br>


  <label>Product  Cost</label><br></br><br></br>
  <input type="text" placeholder="enter cost of product" name="cost"  value={this.state.cost} onChange={(e)=>{this.changeHandler(e)}}></input>
  <br></br><br></br>

  <button type="submit">Post Product</button>

</form>
      </div>
    )
  }
}

export default Jobs
