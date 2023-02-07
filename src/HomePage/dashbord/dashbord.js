import axios from "axios";
import React, { Component } from "react";
import Mycontext from "../useracount";

import { Chart_1, Chart_2, Chart_3, Chart_4, Chart_5, Chart_6 } from "./chart";
class Dashbord extends Component {
    async componentDidMount(){
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
            <div className="h-100 container1 prudact dashbord overflow-auto">
                <div className="container p-0">
                    <div className="container-fluid py-2 position-relative">
                        <h4>Prudacts</h4>
                    </div>
                    <div className="container-fluid row gap-3 pb-4">
                        <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center p-0">
                            <div className="box box-down box-1 my-3 m-md-0 shadow-sm d-flex">
                                <div className="cont">
                                    <p>Supervisor chart</p>
                                    <h4 className="m-0">3.888</h4>
                                    <p className="rate">20%</p>

                                </div>
                                <Chart_1 />
                            </div>
                            <div className="box box-down box-2 my-3 m-md-0 shadow-sm d-flex">
                                <div className="cont">
                                    <p>Supervisor chart</p>
                                    <h4 className="m-0">3.888</h4>
                                    <p className="rate">20%</p>

                                </div>
                                <Chart_2 />
                            </div>
                            <div className="box box-down box-3 my-3 m-md-0 shadow-sm d-flex">
                                <div className="cont">
                                    <p>Supervisor chart</p>
                                    <h4 className="m-0">3.888</h4>
                                    <p className="rate">20%</p>
                                </div>
                                <Chart_3 />
                            </div>
                            <div className="box box-down box-4 my-3 m-md-0 shadow-sm d-flex">
                                <div className="cont">
                                    <p>Supervisor chart</p>
                                    <h4 className="m-0">3.888</h4>
                                    <p className="rate">20%</p>

                                </div>
                                <Chart_4 />
                            </div>
                        </div>
                        <div className="col-12 p-0 d-flex flex-column flex-md-row justify-content-between">
                            <div className="w-100 bg-white shadow-sm me-1">
                                <h4 className="chart-steat">line Chart</h4>
                                <Chart_5 />
                            </div>
                            <div className="w-100 bg-white shadow-sm ms-1 mt-2 mt-md-0">
                                <h4 className="chart-steat">Bar Chart</h4>
                                <Chart_6 />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="col-12 col-md-5 position-relative bg-white py-2 px-4 me-0 me-md-2 shadow-sm">
                                <h4 className="customer-steat">Customer Steat</h4>
                                <div className="d-flex steate flex-column mt-2 gap-3">
                                    <div className="d-flex align-items-center justify-content-between gap-5">
                                        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <div>name user</div>
                                        <div className="d-flex w-50 align-items-center" >
                                            <div className="rang">
                                                <div className="rang-rate bar-rate-1"></div>
                                            </div>
                                            <p className="seate-rate mb-0 ms-1 text-rate-1">50%</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-5">
                                        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <div>name user</div>
                                        <div className="d-flex w-50 align-items-center" >
                                            <div className="rang">
                                                <div className="rang-rate bar-rate-2"></div>
                                            </div>
                                            <p className="seate-rate mb-0 ms-1 text-rate-2">14%</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-5">
                                        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <div>name user</div>
                                        <div className="d-flex w-50 align-items-center" >
                                            <div className="rang">
                                                <div className="rang-rate bar-rate-3"></div>
                                            </div>
                                            <p className="seate-rate mb-0 ms-1 text-rate-3">80%</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-5">
                                        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <div>name user</div>
                                        <div className="d-flex w-50 align-items-center" >
                                            <div className="rang">
                                                <div className="rang-rate bar-rate-4"></div>
                                            </div>
                                            <p className="seate-rate mb-0 ms-1 text-rate-1">16%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="prenext">
                                    <p className="position-relative"><i className="fi fi-rr-angle-small-left"></i> prev</p>
                                    <p className="position-relative">next <i className="fi fi-rr-angle-small-right"></i></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 bg-white position-relative shadow-sm mt-3 mt-md-0">
                                <div className="w-100 py-2 px-3 me-2 ">
                                    <h4 className="customer-steat">Customer Steat</h4>
                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="prenext bottom-0 end-0 pb-2 position-absolute">
                                    <p className="position-relative"><i className="fi fi-rr-angle-small-left"></i> prev</p>
                                    <p className="position-relative">next <i className="fi fi-rr-angle-small-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashbord