import React from "react";
import {connect} from 'react-redux';

import SavedItem from "../SavedItem";


const Blog = (props) => {
  console.log(props.saved);
const saved=props.saved;
return(
  saved.length?
saved.map(course => (
  
 <SavedItem  key={course.id} course={course}></SavedItem>
  
)):<div>You have not added elements</div>

)
 
};

const getSavedFromStore=(state)=>{
  return{
    saved:state.savedList.saved
  }
}
export default connect(getSavedFromStore)(Blog);
