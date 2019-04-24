import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import VideoComponent from "./VideoComponent";
import Login from "./chat/Login";
import ChatApp from "./chat/ChatApp";

import "@progress/kendo-theme-material/dist/all.css";
import "./styles/styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            loggedIn: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleLogin(event) {
        event.preventDefault();
        this.setState({ loggedIn: true });
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    render() {
        let loginOrChat;
        if (this.state.loggedIn) {
            loginOrChat = <ChatApp username={this.state.username} />;
        } else {
            loginOrChat = (
                <Login
                    handleLogin={this.handleLogin}
                    handleUsernameChange={this.handleUsernameChange}
                    username={this.state.username}
                />
            );
        }

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar title="React Twilio Video" />
                    <VideoComponent />
                    <div className="container">
                        <div className="row mt-3 justify-content-center">
                            {loginOrChat}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
