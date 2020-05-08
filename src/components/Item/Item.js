import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import{connect} from 'react-redux';
import {addSavedItem} from '../../actions/actions'

const Item = ({ course,addSavedItem }) => {
  return (
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
      <span className={course.isHot ? "course__status hot" : "course__status"}>
        {course.isHot ? "Hot" : null}
      </span>
      <span className="add" onClick={()=>{addSavedItem(course)}}>ADD</span>
    </div>
  );
};

export default connect(null,{addSavedItem})(Item);
