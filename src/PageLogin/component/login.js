import axios from 'axios'
import React, { Component} from 'react'
import style from "./css.module.css"
class Login extends Component { render() { return (<h2>Login</h2>) } }
class Username extends Component {
    render() {
        return (
            <div className="mb-3 row">
                <div className="col-9 position-relative">
                    <input type="text" className={`${style.input}`} onChange={(e) => { this.props.username(e.target.value) }} id="staticEmail" placeholder="User Name" />
                    <img src="./icons/user.svg" alt="" className={`position-absolute ${style.icon}`} width="20px" height="20px" />
                </div>
            </div>
        )
    }
}
class Password extends Component {
    constructor() {
        super()
        this.type = ["password", "text"]
        this.display = ["d-none", ""]
        this.clickeye = this.clickeye.bind(this)
    }
    clickeye() {
        this.setState(this.type.reverse(1))
        this.setState(this.display.reverse(1))
    }
    render() {
        return (
            <div className="mb-3 row">
                <div className="col-9 position-relative">
                    <input type={this.type[0]} id="inputPassword" onChange={(e) => { this.props.password(e.target.value) }} className={`${style.input}`} placeholder="Password" />
                    <img src="./icons/unlock.svg" alt="" className={`position-absolute ${style.icon}`} width="20px" height="20px" />
                    <img src="./icons/eye-crossed-free-icon-font.svg" alt="" onClick={this.clickeye} className={`position-absolute ${this.display[1]} ${style.icon_eye}`}
                        width="20px" height="20px" />
                    <img src="./icons/eye-free-icon-font.svg" alt="" onClick={this.clickeye} className={`position-absolute ${this.display[0]} ${style.icon_eye}`} width="20px"
                        height="20px" />
                </div>
            </div>

        )
    }

}
class Sumbit extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
    }
    componentDidMount(){
        localStorage.clear()
    }
    login = async () => {
        if (this.props.inf.username == "" && this.props.inf.password == "") {
            alert("entre username & password")
            return
        }
        await axios.post("http://localhost/SERVICE/project4/learn-react/src/PageLogin/component/login.php", this.props.inf).then((e) => {
            alert(e.data.messeg)
            if (e.data.res == true) {
               localStorage.setItem("username",this.props.inf.username)
               localStorage.setItem("password",this.props.inf.password)
               console.log(localStorage.getItem("username"))
                window.location.replace("http://localhost:3000/home")
            }
        })
    }
    render() {
        return (
            <div className="mb-3 row">
                <div className="col-9">
                    <input type={'button'} value="sumbit" onClick={this.login} className={`${style.btn} w-100`} />
                </div>
            </div>
        )
    }
}

class Container extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        return (
            <div className=" col-6 d-flex justify-content-center align-items-center">
                <form className="w-75">
                    <Login />
                    <Username username={(e) => { this.state.username = e }} />
                    <Password password={(e) => { this.state.password = e }} />
                    <Sumbit inf={this.state} />
                </form>
            </div>
        )
    }
}
export default Container;
