import React, { Component } from "react";
import Listgroup from "./listgroup";
import Account from "./account";
import "./style.css";
import Mycontext from "../../useracount" 
class Navbar extends Component {
    constructor() {
        super()
        this.click = this.click.bind(this)
    }
    state = {
        class_transform:["", "navbar1-transform"],
        class_transformimg:["img", "img-transform"]
    }
    click() {
        this.setState(this.state.class_transform.reverse(1))
        this.setState(this.state.class_transformimg.reverse(1))    
    }
    render() {
        return (
            <div className={`d-flex flex-column justify-content-center navbar1 ${this.state.class_transform[1]} p-0 position-absolute`}>
                <div className="d-flex flex-column position-relative">
                <i  onClick={this.click} className={`fi fi-rr-menu-burger position-absolute ${this.state.class_transformimg[1]}`}></i>
                <Account />
                <Listgroup />
                </div>
            </div>
        )
    }
}
Navbar.contextType=Mycontext
export default Navbar