import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';

export class UserItem extends Component {

constructor(props) {
    super(props)

    this.state = {
         user:null
    }
}

componentDidMount(){
    const token=localStorage.getItem("token");
    

    try{
        let  user_new = jwtDecode(token);
         this.setState({
             user:user_new
         })
         console.log("new user is",user_new);
         
        
      } catch (error) {
        console.log(error);
      }
    }

    render(props) {

        
        const product=this.props.obj;
        console.log(product.image);
        
        return (
            
                
      
            <div className="course">
            <div className="course__img--container">
              <img
                src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt={product.description}
                className="course__img"
              />
            </div>
            
              <h4 className="course__title">{product.description}</h4>
           
        {this.state.user?<span className="course__author">By: {this.state.user.username}</span>:<span>user</span>}
            <span className="course__price">{product.cost}$</span>
          
            
            </div>
 
            
        )
    }
}

export default UserItem
