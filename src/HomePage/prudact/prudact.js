import React, { Component } from "react";
import axios, { Axios } from "axios"
import Addprudact from "./addprudact";
import Editprudact from "./editprudact";
class Prudact extends Component {
    constructor(props) {
        super(props)
        this.addprudact = this.addprudact.bind(this)
        this.editprudact = this.editprudact.bind(this)
    }
    state = {
        data_prudact: [],
        d_prudact: ["d-none", ""],
        d_edite: ["d-none", ""]
    }
    addprudact() {
        this.setState(this.state.d_prudact.reverse(1))
    }
    editprudact(e) {
        e.preventDefault()
        this.setState(this.state.d_edite.reverse(1))
    }
    async componentDidMount() {
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        await axios.post("http://localhost/SERVICE/project4/learn-react/src/PageLogin/component/login.php", { username: username, password: password }).then((e) => {
            if (e.data.res != true) {
                window.location.replace("http://localhost:3000")
            }
        })
        axios.get('http://localhost/SERVICE/project4/learn-react/src/HomePage/prudact/data.php')
            .then((res) => res.data)
            .then(data => {
                this.setState(this.state.data_prudact = data)
            })
    }
    render() {
        function del(params) {
            axios.post("http://localhost/SERVICE/project4/learn-react/src/HomePage/prudact/deleteprudact.php", { id: params })
        }
        return (
            <div className="h-100 container1 prudact d-flex justify-content-center align-items-center">

                <form className="container bg-white p-0" method="GET" action="">
                    <div className="container-fluid bg-light py-1 position-relative d-flex justify-content-between align-items-center">
                        <h4 className="stock">Stock</h4>
                        <h5 className="text-muted">Quantity :</h5>
                        <h5 className="text-muted">Purchasing pric :</h5>
                        <h5 className="text-muted">Selling price :</h5>
                        <h5 className="text-muted">Profit :</h5>
                        <p className="btn btn-success" onClick={this.addprudact}>Add Prudact</p>
                    </div>
                    <div className="d-flex justify-content-between mx-3">
                        <div><p className="d-inline me-1">Max show</p><input type="number" name="" className="form-control" id="" /></div>
                        <input type="button" value="select all" className="btn btn-primary" />
                        <input type="button" value="delet select" className="btn btn-danger" />
                        <input className="form-control" type="text" placeholder="shearch" />
                    </div>
                    <table className="table table-bordered table-hover mt-3">
                        <thead><tr><th scope="col"># <img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Customer Name <img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Name prudact<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Quantity<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Purchasing price<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th scope="col">Selling price<img src="./icons/icons8-up-down-arrow-24.png" alt="" /></th><th>Update</th><th>Delete</th><th>Select</th></tr></thead>
                        <tbody>
                            {this.state.data_prudact.map((element, index) => {
                                return (
                                    <tr><th scope="col">{index}</th><td>{element.id_customer}</td><td>{element.nameprudact}</td><td>{element.quantite}</td><td>{element.sprice}</td><td>{element.pprice}</td><td><button onClick={this.editprudact}><img src="./icons/icons8-edit-64.png" alt="" /></button></td><td><button onClick={() => { del(element.id_command) }}><img src="./icons/icons8-delete.svg" alt="" /></button></td><td><input type="checkbox" name="" id="" /></td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
                <Addprudact display_prudact={this.state.d_prudact}
                />
                <Editprudact display_prudact={this.state.d_edite} />

            </div >
        )
    }
}
export default Prudact