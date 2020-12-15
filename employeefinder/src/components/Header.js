import React, {Component} from "react";
import '../index.css';

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>EmployeeFind</h1>
                <p>Click the Name to filter by first name, or use the search bar to find a specific employee!</p>
            </div>
        )
    }
}



