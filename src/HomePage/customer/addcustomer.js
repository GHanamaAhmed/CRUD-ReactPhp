import axios from "axios";
import React, { Component } from "react";
class Addcusomer extends Component {
    constructor(props) {
        super(props);
        this.add=this.add.bind(this)
    }
    state = {
        datacustomer:{
            fname:null,
            lname:null,
            telephone:null
        },
        prudact_name_d: ["", "d-none"]
    }
    add=(e)=>{
        e.preventDefault()
       const data=this.state.datacustomer
        if (data.fname&&data.lname&&data.telephone) {
            axios.post("http://localhost/SERVICE/project4/learn-react/src/HomePage/customer/addcustomer.php",data)
            .then((data)=>console.log(data.data))
        }else{
            alert("entre all data")
        }
    }
    render() {
        return (
            <div className={`container-fluid popup-add-prudact popup-add-customer ${this.props.display_prudact[0]} position-absolute`}>
                <div className="container p-0">
                    <div className="container-fluid bg-light py-2">
                        <h4>Add Customer</h4>
                    </div>
                    <form className="row g-3 needs-validation p-3" noValidate>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">First Name</label>
                            <input type="text" className="form-control" value={this.state.datacustomer.fname} onChange={(e)=>{this.setState(this.state.datacustomer.fname=e.target.value)}} id="validationCustom01" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Last Name</label>
                            <input type="text" className="form-control" value={this.state.datacustomer.lname} onChange={(e)=>{this.setState(this.state.datacustomer.lname=e.target.value)}} id="validationCustom02" required />

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustomUsername" className="form-label">Nemero Telephone</label>
                            <input type="number" className="form-control" value={this.state.datacustomer.telephone} onChange={(e)=>{this.setState(this.state.datacustomer.telephone=e.target.value)}} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        </div>
                        <div className="col-12 row">
                            <button className="btn btn-primary col-md-1 col-sm-6 mx-3  mt-2" type="submit" onClick={this.add}>Add</button>
                            <button type={"button"} className="btn btn-danger col-md-1 col-sm-6  mt-2"onClick={() => window.location.reload(false)}>Close</button>
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}
export default Addcusomer