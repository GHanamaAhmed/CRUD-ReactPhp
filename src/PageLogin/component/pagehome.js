import React, { Component } from "react";
import Container from "./login"
import Photo from "./photo";
import style from "./css.module.css";
class Pagehome extends Component {
    render() {
        return (
            <div className={`${style.cadr0} row w-100`}><Photo /><Container /></div>
        )
    }
}
export default Pagehome