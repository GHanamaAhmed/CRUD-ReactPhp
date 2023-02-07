import React, { Component } from "react";
import Navbar from "./navbar/component/navbar";
import Container from "./container/container";
import Prudact from "./prudact/prudact";
import Customer from "./customer/customer";
import Dashbord from "./dashbord/dashbord";
import Pagehome from "../PageLogin/component/pagehome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
class App extends Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid h-100 position-relative root overflow-hidden">
                        <Navbar />
                        <Routes>
                            <Route path="/" exact element={<Pagehome />} />
                            <Route path="/home" element={<Container />} />
                            <Route path="/stock" element={<Prudact />} />
                            <Route path="/customer" element={<Customer />} />
                            <Route path="/dashbord" element={<Dashbord />} />
                        </Routes>
                    </div>
                </Router>
        )
    }
}
export default App