import React from "react";
import SignIn from "./SignIn";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: localStorage.getItem("username"),
            id_user: localStorage.getItem("id_user")
        }
    }

    handleLogOut = () => {
        window.location.href = "/"
    }

    render() {
        console.log(localStorage.getItem("username"))
        console.log(localStorage.getItem("id_user"))
        return (
            <div>
                <button onClick={() => this.handleLogOut()}>log out</button>
            </div>
        )
    }
}

export default Home