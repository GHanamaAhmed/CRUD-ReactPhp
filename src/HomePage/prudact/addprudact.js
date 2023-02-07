import axios from "axios";
import React, { Component } from "react";
class Addprudact extends Component {
    constructor(props) {
        super(props)
        this.clickcheak = this.clickcheak.bind(this)
        this.add = this.add.bind(this)
    }
    state = {
        dataprudact: {
            namep: null,
            namec: null,
            quntity: null,
            pricep: null,
            prices: null,
            codebar: null
        },
        prudact_name_d: ["", "d-none"]
    }
    clickcheak = (e) => {
        if (e.target.id == "flexRadioDefault1" && e.target.checked) {
            if (this.state.prudact_name_d[1] == "") {
                this.setState(this.state.prudact_name_d.reverse(1))
            }
        } else if (e.target.id == "flexRadioDefault2" && e.target.checked) {
            if (this.state.prudact_name_d[0] == "") {
                this.setState(this.state.prudact_name_d.reverse(1))
            }
        }
    }
    add = (e) => {
        e.preventDefault();
        const data = this.state.dataprudact
        axios.post("http://localhost/SERVICE/project4/learn-react/src/HomePage/prudact/adddata.php", data)
        this.setState(this.state.dataprudact = {
            namep: null,
            namec: null,
            quntity: null,
            pricep: null,
            prices: null,
            codebar: null
        })
        console.log(this.state.dataprudact)
    }
    render() {
        return (
            <div className={`container-fluid popup-add-prudact ${this.props.display_prudact[0]} position-absolute`}>
                <div className="container p-0">
                    <div className="container-fluid bg-light py-2">
                        <h4>Add Prudact</h4>
                    </div>
                    <form className="row g-3 needs-validation p-3" >
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={this.clickcheak} id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                new commodity
                            </label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={this.clickcheak} id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                supply the commodity
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Cusomer Name</label>
                            <select className="form-select" id="validationCustom01" value={this.state.dataprudact.namec} onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, namec: e.target.value } }) }} name="namecustomer" required >
                                <option selected disabled>Choose...</option>
                                <option value={"ahmed"}>ahmed</option>
                                <option value={"mohamed"}>mohamed</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Prudact Name</label>
                            <input type="text" className={`form-control ${this.state.prudact_name_d[0]}`} value={this.state.dataprudact.namep} name="pname" onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, namep: e.target.value } }) }} id="validationCustom02" required />
                            <select className={`form-select ${this.state.prudact_name_d[1]}`} id="validationCustom02" onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, namep: e.target.value } }) }} name="pname2" required >
                                <option selected disabled>Choose...</option>
                                <option value={"ahmed"}>ahmed</option>
                                <option value={"mohamed"}>mohamed</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustomUsername" className="form-label">Quntity</label>
                            <input type="number" className="form-control" name="quntity" value={this.state.dataprudact.quntity} onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, quntity: e.target.value } }) }} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Purchasing price</label>
                            <input type="number" className="form-control" name="pprice" value={this.state.dataprudact.pricep} onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, pricep: e.target.value } }) }} id="validationCustom03" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">selling price</label>
                            <input type="number" className="form-control" name="sprice" value={this.state.dataprudact.prices} onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, prices: e.target.value } }) }} id="validationCustom04" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Profit</label>
                            <input type="number" className="form-control" id="validationCustom05" disabled />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Profit Ratio</label>
                            <input type="number" className="form-control" id="validationCustom06" disabled />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom04" className="form-label">Codebar</label>
                            <input type="number" className="form-control" name="codebar" value={this.state.dataprudact.codebar} onChange={(e) => { this.setState({ dataprudact: { ...this.state.dataprudact, codebar: e.target.value } }) }} id="validationCustom07" required />
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-12 row">
                            <button className="btn btn-primary col-md-1 col-sm-6 mx-3  mt-2" onClick={this.add}>Add</button>
                            <button type={"button"} className="btn btn-danger col-md-1 col-sm-6  mt-2" onClick={() => window.location.reload(false)}>Close</button>
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}
export default Addprudact
