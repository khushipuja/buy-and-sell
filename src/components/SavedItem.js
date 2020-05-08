import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {removeSavedItem} from '../actions/actions'
function SavedItem({course,removeSavedItem}) {

    return (
        course?
        <div className="course">
        <div className="course__img--container">
          <img
            src={course.courseImage}
            alt={course.title}
            className="course__img"
          />
        </div>
        <Link className='course__link' to={`/courses/${course.id}`}>
          <h4 className="course__title">{course.title}</h4>
        </Link>
        <span className="course__author">By: {course.author}</span>
        <span className="course__price">{course.price}$</span>
         <span onClick={()=>{removeSavedItem(course.id)}}>DElete</span>
        </div>:<div>No element added</div>
    )
}

export default connect(null,{removeSavedItem})(SavedItem)
