import React, { useEffect,useState } from "react";
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import UserItem from '../UserItem'
const About = (props) => {
  

   const [product, setproduct] = useState([])

  const [user,setuser]=useState(null);
  
    useEffect(() => {

      

      try {
        const token=localStorage.getItem("token");
        
        let  user_new = jwtDecode(token);
         setuser(user_new);
         console.log("new user is",user_new);
         
        
      } catch (error) {
        console.log(error);
        
      }

    
      axios.get("http://localhost:8000/api/getproduct").then(res=>{
        console.log(res.data);
        setproduct(res.data)
        
      }).catch(err=>{console.log(err);
      })

    },[]);


  
  return (
    
    user?<div><h1>Welcome {user.username}</h1>
    {
      product.length?product.map(item=>{ return <UserItem key={item._id} obj={item}/>}):<div>You have not posted any items to sell</div>
    }
    
    </div>:<div>Welcome User!</div>
   
    

    
    )
};

export default About;
