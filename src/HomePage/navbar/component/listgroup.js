import React, { Component, Suspense } from "react";
import lists from "./list";
import { Link, NavLink } from "react-router-dom";
class Listgroup extends Component {
    constructor(props) {
        super(props);
    };
    state = {
        indexactive: 0,
        list: lists,
    };


    render() {
        const active = (index) => {
            this.setState({ indexactive: index });
        }
        const isactive = (index) => {
            if (index == this.state.indexactive) {
                return " item-active";
            }
            return "";
        }
        const colortext = (index) => {
            if (index == this.state.indexactive) {
                return "text-purpul";
            }
            return "text-white";
        }
        return (
            <ul className="navbar-list list-group m-0">
               <div></div>
                {this.state.list.list.map((element, index) =>

                    <li key={index} className={element.className + isactive(index)} onClick={() => active(index)}><Link className={colortext(index)} to={element.to}><i className={element.iclassname}></i><p>{element.text}</p></Link></li>

                )}
                <div></div>
            </ul>
        )
    };
};
export default Listgroup