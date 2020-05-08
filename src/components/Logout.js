import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'
export class Logout extends Component {
    render() {
        return (
            <div className="btn-signup">
                <Link to="/logout">Logout</Link>
                
            </div>
        )
    }
}

export default Logout
