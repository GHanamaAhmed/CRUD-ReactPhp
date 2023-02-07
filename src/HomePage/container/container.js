import axios from "axios";
import React, { Component } from "react";
import "./style.css";
class Container extends Component {
    async componentDidMount() {
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        await axios.post("http://localhost/SERVICE/project4/learn-react/src/PageLogin/component/login.php", { username: username, password: password }).then((e) => {
            if (e.data.res != true) {
                window.location.replace("http://localhost:3000")
            }
        })
    }
    render() {
        return (
            <div className="h-100 container1">
                <div className="container-fluid card-prix position-relative">
                    <h1>0.00DZ</h1>
                    <div className="container position-absolute bottom-0 d-flex justify-content-around align-items-center">
                        <p>Total Prix:  0.00DZ</p>
                        <p>Max Prix:  0.00DZ</p>
                        <p>Min Prix:  0.00DZ</p>
                    </div>
                </div>
                <div className="container bg-light d-flex justify-content-between mt-2 align-items-center">
                    <h4>Table</h4>
                    <p className="btn btn-success my-1">Sell</p>
                </div>
                <form className="container bg-white pt-2" method="GET" action="">
                    <div className="d-flex justify-content-between">
                        <div><p className="d-inline me-1">Max show</p><input type="number" name="" className="form-control" id="" /></div>
                        <input type="button" value="select all" className="btn btn-primary" />
                        <input type="button" value="delet select" className="btn btn-danger" />
                        <input className="form-control" type="text" placeholder="shearch" />
                    </div>
                    <table className="table table-bordered table-hover mt-3">
                        <thead><tr><th scope="col"># <img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Name prudact<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Quantity<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">prix<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th>Update</th><th>Delete</th><th>Select</th></tr></thead>
                        <tbody><tr><th scope="col">1</th><td>prodact1</td><td>2</td><td>555</td><td><a href=""><img src="./icons/icons8-edit-64.png" alt="" /></a></td><td><a href=""><img src="./icons/icons8-delete.svg" alt="" /></a></td><td><input type="checkbox" name="id" id="" /></td></tr></tbody>
                    </table>
                </form>
            </div>
        )
    }
}
export default Container