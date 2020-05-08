import React, { Component } from 'react'
import courses from "../../data.json";
import Item from "../Item/Item.js";
import "./ItemList.css";
import lodash from 'lodash';



export class ItemList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       courses,
       inputSearch:'',
       sortTerm:'',
       sortOrder:'asc'
    }
  }
  

changeHandler=(e)=>{
console.log(e.target.value);


this.setState({
  inputSearch:e.target.value
});


}

handleSort=(e)=>{
  
  this.setState({
   
    sortTerm:e.target.value

  })
 console.log(this.state.sortTerm);
 
}
handleOrder=(e)=>{
  this.setState({
    sortOrder:e.target.value
  })
  console.log(this.state.sortOrder);
  
}

  render() {

    const filtered=this.state.courses.filter(c=>c.title.toLowerCase().includes(this.state.inputSearch.toLowerCase()));
    const sorted=lodash.orderBy(filtered, [this.state.sortTerm], [this.state.sortOrder]);


    return(

<div>
<form className="itemList__form">
  <input type="text" placeholder="search for courses" className="form__input" onChange={this.changeHandler} value={this.state.inputSearch}></input>
  <select onChange={this.handleSort} className="term__input">
    <option>Select category</option>
    <option value="price">Price</option>
    <option value="students">Students</option>
    <option value="title">Title</option>
  </select>
  <select onChange={this.handleOrder} className="order__input">
  
    <option value="asc">Increasing</option>
    <option value="desc">Decreasing </option>
    
  </select>
  
</form>

    
    {sorted.length?

    

      <div className="courses">
        {
        
        sorted.map(course => (
          <Item key={course.id} course={course} />
          
        ))
        }
      </div>:<div className="No__item"><h1>No items found!!</h1></div>
  }
  
</div>

    );





   
  }
}

export default ItemList;




