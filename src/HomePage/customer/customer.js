import axios from "axios";
import React, { Component } from "react";
import Addcusomer from "./addcustomer";
class Customer extends Component {
    constructor(props) {
        super(props)
        this.addprudact = this.addprudact.bind(this)
    }
    state = {
        datacutomer: [],
        d_prudact: ["d-none", ""]
    }
    addprudact() {
        this.setState(this.state.d_prudact.reverse(1))
    }
    async componentDidMount() {
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        await axios.post("http://localhost/SERVICE/project4/learn-react/src/PageLogin/component/login.php", { username: username, password: password }).then((e) => {
            if (e.data.res != true) {
                window.location.replace("http://localhost:3000")
            }
        })
        await axios.get('http://localhost/SERVICE/project4/learn-react/src/HomePage/customer/customer.php').then((data) => { this.setState(this.state.datacutomer = data.data) })
    }
    render() {
        function del(params) {
            axios.post("http://localhost/SERVICE/project4/learn-react/src/HomePage/customer/deletecustomer.php",{id:params})
        }
        return (
            <div className="h-100 container1 prudact customer d-flex justify-content-center align-items-center">

                <form className="container bg-white p-0" method="GET" action="">
                    <div className="container-fluid bg-light py-1 position-relative d-flex justify-content-between align-items-center">
                        <h4>Customer</h4>
                        <p className="btn btn-success" onClick={this.addprudact}>Add Customer</p>
                    </div>
                    <div className="d-flex justify-content-between mx-3">
                        <div><p className="d-inline me-1">Max show</p><input type="number" name="" className="form-control" id="" /></div>
                        <input type="button" value="select all" className="btn btn-primary" />
                        <input type="button" value="delet select" className="btn btn-danger" />
                        <input className="form-control" type="text" placeholder="shearch" />
                    </div>
                    <table className="table table-bordered table-hover mt-3">
                        <thead><tr><th scope="col"># <img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">First name<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Last name<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Nemero Telephone<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th>Update</th><th>Delete</th><th>Select</th></tr></thead>
                        <tbody>
                            {this.state.datacutomer.map((e, i) => {
                                return (
                                    <tr><th scope="col">{i}</th><td>{e.fname}</td><td>{e.lname}</td><td>{e.NT}</td><td><a href=""><img src="./icons/icons8-edit-64.png" alt="" /></a></td><td><button onClick={()=>{del(e.id_customer)}}><img src="./icons/icons8-delete.svg" /></button></td><td><input type="checkbox" name="id" id="" /></td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
                <Addcusomer display_prudact={this.state.d_prudact} />
            </div >
        )
    }
}
export default Customer