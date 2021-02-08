import React from "react"
import { withAsyncAction } from "../../redux/HOCs"


function UserInfo (props) {
    return (
        <div>
            <div>
                <img src={props.profilePic}></img>
            </div>
            <div>
                <h1>{props.username}</h1>
            </div>
        </div>
    )
}

export default withAsyncAction("profile", "all")(UserInfo)