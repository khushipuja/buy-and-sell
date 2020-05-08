import React from 'react'

function Signout() {

const cancel=()=>{
    window.location="/home";
}

const signout=()=>{
    // var token=localStorage.getItem("token");
    localStorage.removeItem("token");
    window.location="/home"
}

    return (
        <div>
            <h1>Are you sure you want to Signout?</h1>
            <button onClick={signout}>Yes Signout</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    )
}

export default Signout
