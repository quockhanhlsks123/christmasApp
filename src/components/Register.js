import React from "react";
import '../components/Register.css'
import axios from "axios";
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPassword: false,
            firstname: "",
            lastname: "",
            email: "",
            password1: "",
            password2: ""
        }
    }

    handleMoveRegister = () => {
        window.location.href = '/'
    }

    showPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword1 = (event) => {
        this.setState({
            password1: event.target.value
        })
    }

    handlePassword2 = (event) => {
        this.setState({
            password2: event.target.value
        })
    }

    handleLogin = async () => {
        try {

        } catch (error) {
            console.log("error: " + error)
        }
        if (this.state.password1 != this.state.password2) {
            alert("password wrong! Try again.")
        }
        if (this.state.firstname == "" || this.state.lastname == "" || this.state.email == "" || this.state.password1 == "" || this.state.password2 == "") {
            alert("Missng parameters")
        }

    }

    render() {
        let isShowPassword = this.state.isShowPassword
        return (
            <div className="container-register">
                <div className="left-container">
                    <div className="left-image">
                    </div>
                </div>

                <div className="right-container">
                    <div className="right-content">
                        <div className="up-content">
                            <span className="span1">
                                Get's stated
                            </span>
                            <span className="span2">
                                don't have an account? <a style={{ color: "#356325", cursor: "pointer" }} onClick={() => this.handleMoveRegister()}>Sign In</a>
                            </span>

                            <div className="signin">
                                <div className="google">
                                    <svg xmlns="http://www.w3.org/2000/svg" color="red" height="16" width="15.25" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                    <span className="gg-text">
                                        Sign in with Google
                                    </span>
                                </div>

                                <div className="facebook">

                                    <svg xmlns="http://www.w3.org/2000/svg" color="white" height="16" width="16" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.7 226.4 209.3 245V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V501C413.3 482.4 504 379.8 504 256z" /></svg>
                                    <span className="fb-text">
                                        Sign in with Facebook
                                    </span>
                                </div>
                            </div>
                            <div className="lineMiddle" >
                                <div>
                                    <hr></hr>
                                </div>
                                <span>or</span>
                                <div>
                                    <hr></hr>
                                </div>

                            </div>
                        </div>

                        <div className="center-content">
                            <div className="firstname">
                                <span>First Name</span>
                                <input type="text" placeholder="quoc" onChange={(event) => this.handleFirstName(event)} />
                            </div>
                            <div className="lastname">
                                <span>Last Name</span>
                                <input type="text" placeholder="khanh" onChange={(event) => this.handleLastName(event)} />
                            </div>
                            <div className="email">
                                <span>Email</span>
                                <input type="email" placeholder="E.gmail.com" onChange={(event) => this.handleEmail(event)} />
                            </div>
                            <div className="password">
                                <span>Password</span>
                                <div className="wrapper">
                                    <div className="password-norepeat">
                                        {isShowPassword == true ?
                                            <div>
                                                <input type="text" placeholder="*********" onChange={(event) => this.handlePassword1(event)} />
                                                <svg onClick={() => this.showPassword()} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M572.5 241.4C518.3 135.6 410.9 64 288 64S57.7 135.6 3.5 241.4a32.4 32.4 0 0 0 0 29.2C57.7 376.4 165.1 448 288 448s230.3-71.6 284.5-177.4a32.4 32.4 0 0 0 0-29.2zM288 400a144 144 0 1 1 144-144 143.9 143.9 0 0 1 -144 144zm0-240a95.3 95.3 0 0 0 -25.3 3.8 47.9 47.9 0 0 1 -66.9 66.9A95.8 95.8 0 1 0 288 160z" /></svg>

                                            </div>
                                            :
                                            <div>
                                                <input type="password" placeholder="*********" onChange={(event) => this.handlePassword1(event)} />
                                                <svg onClick={() => this.showPassword()} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M320 400c-75.9 0-137.3-58.7-142.9-133.1L72.2 185.8c-13.8 17.3-26.5 35.6-36.7 55.6a32.4 32.4 0 0 0 0 29.2C89.7 376.4 197.1 448 320 448c26.9 0 52.9-4 77.9-10.5L346 397.4a144.1 144.1 0 0 1 -26 2.6zm313.8 58.1l-110.6-85.4a331.3 331.3 0 0 0 81.3-102.1 32.4 32.4 0 0 0 0-29.2C550.3 135.6 442.9 64 320 64a308.2 308.2 0 0 0 -147.3 37.7L45.5 3.4A16 16 0 0 0 23 6.2L3.4 31.5A16 16 0 0 0 6.2 53.9l588.4 454.7a16 16 0 0 0 22.5-2.8l19.6-25.3a16 16 0 0 0 -2.8-22.5zm-183.7-142l-39.3-30.4A94.8 94.8 0 0 0 416 256a94.8 94.8 0 0 0 -121.3-92.2A47.7 47.7 0 0 1 304 192a46.6 46.6 0 0 1 -1.5 10l-73.6-56.9A142.3 142.3 0 0 1 320 112a143.9 143.9 0 0 1 144 144c0 21.6-5.3 41.8-13.9 60.1z" /></svg>
                                            </div>
                                        }

                                    </div>
                                    <div className="password-repeat">
                                        {isShowPassword == true ?
                                            <div>
                                                <input type="text" placeholder="*********" onChange={(event) => this.handlePassword2(event)} />
                                                <svg onClick={() => this.showPassword()} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M572.5 241.4C518.3 135.6 410.9 64 288 64S57.7 135.6 3.5 241.4a32.4 32.4 0 0 0 0 29.2C57.7 376.4 165.1 448 288 448s230.3-71.6 284.5-177.4a32.4 32.4 0 0 0 0-29.2zM288 400a144 144 0 1 1 144-144 143.9 143.9 0 0 1 -144 144zm0-240a95.3 95.3 0 0 0 -25.3 3.8 47.9 47.9 0 0 1 -66.9 66.9A95.8 95.8 0 1 0 288 160z" /></svg>

                                            </div>
                                            :
                                            <div>
                                                <input type="password" placeholder="*********" onChange={(event) => this.handlePassword2(event)} />
                                                <svg onClick={() => this.showPassword()} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M320 400c-75.9 0-137.3-58.7-142.9-133.1L72.2 185.8c-13.8 17.3-26.5 35.6-36.7 55.6a32.4 32.4 0 0 0 0 29.2C89.7 376.4 197.1 448 320 448c26.9 0 52.9-4 77.9-10.5L346 397.4a144.1 144.1 0 0 1 -26 2.6zm313.8 58.1l-110.6-85.4a331.3 331.3 0 0 0 81.3-102.1 32.4 32.4 0 0 0 0-29.2C550.3 135.6 442.9 64 320 64a308.2 308.2 0 0 0 -147.3 37.7L45.5 3.4A16 16 0 0 0 23 6.2L3.4 31.5A16 16 0 0 0 6.2 53.9l588.4 454.7a16 16 0 0 0 22.5-2.8l19.6-25.3a16 16 0 0 0 -2.8-22.5zm-183.7-142l-39.3-30.4A94.8 94.8 0 0 0 416 256a94.8 94.8 0 0 0 -121.3-92.2A47.7 47.7 0 0 1 304 192a46.6 46.6 0 0 1 -1.5 10l-73.6-56.9A142.3 142.3 0 0 1 320 112a143.9 143.9 0 0 1 144 144c0 21.6-5.3 41.8-13.9 60.1z" /></svg>
                                            </div>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="up-bottom">
                                <div className="left">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </div>
                                <div className="right">
                                    Forgot your password?
                                </div>
                            </div>

                            <button onClick={() => this.handleLogin()}>Sign in</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
