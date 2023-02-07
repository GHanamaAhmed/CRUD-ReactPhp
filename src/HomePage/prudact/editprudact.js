import React, { Component } from "react";
class Editprudact extends Component {
    constructor(props) {
        super(props);
        this.closeprudact = this.closeprudact.bind(this)
        this.clickcheak = this.clickcheak.bind(this)
    }
    state = {
        prudact_name_d: ["", "d-none"]
    }
    closeprudact() {
        this.setState(this.props.display_prudact.reverse(1))
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
        console.log(e.target.checked)
    }
    render() {
        return (
            <div className={`container-fluid popup-add-prudact ${this.props.display_prudact[0]} position-absolute`}>
                <div className="container p-0">
                    <div className="container-fluid bg-light py-2">
                        <h4>Edit Prudact</h4>
                    </div>
                    <form className="row g-3 needs-validation p-3" noValidate>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={this.clickcheak} id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                new commodity
                            </label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={this.clickcheak} id="flexRadioDefault2"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                supply the commodity
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Cusomer Name</label>
                            <select className="form-select" id="validationCustom01" required >
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Prudact Name</label>
                            <input type="text" className={`form-control ${this.state.prudact_name_d[0]}`} id="validationCustom02" required />
                            <select className={`form-select ${this.state.prudact_name_d[1]}`} id="validationCustom02" required >
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustomUsername" className="form-label">Quntity</label>
                            <input type="number" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Purchasing price</label>
                            <input type="number" className="form-control" id="validationCustom03" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Profit Ratio</label>
                            <input type="number" className="form-control" id="validationCustom03" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">selling price</label>
                            <input type="number" className="form-control" id="validationCustom03" disabled />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Profit Ratio</label>
                            <input type="number" className="form-control" id="validationCustom03" disabled />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom04" className="form-label">Codebar</label>
                            <input type="number" className="form-control" id="validationCustom04" required />
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-12 row">
                            <button className="btn btn-primary col-md-1 col-sm-6 mx-3  mt-2" type="submit">Add</button>
                            <button className="btn btn-danger col-md-1 col-sm-6  mt-2" onClick={this.closeprudact}>Close</button>
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}
export default Editprudact
