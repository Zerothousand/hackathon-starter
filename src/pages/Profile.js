import React from "react";
import Menu from "../components/menu/Menu";
import Messages from "../components/messages/Messages"
import { userIsAuthenticated } from "../redux/HOCs";
import UserInfo from "../components/landing page/landing-page"

class Profile extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <UserInfo profilePic="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg" username={this.props.match.params.username} />
        <Messages username={this.props.match.params.username} />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
