import React from "react";
import { withAsyncAction } from "../../redux/HOCs";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: "",
      count: 0,
      image: "",
    };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload);
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count,
      });
    });
  };

  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: "",
      });
    });
  };

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  handleDelete = (messageId) => {
    this.props.deleteMessage(messageId).then(() => {
      this.fetchMessages();
    });
  };
  
    handleLike = (messageId) => {
      this.props.addLike(messageId).then(() => {
        this.fetchMessages();
       // if value.likes 
      
      });
  
  
  };

  handleDislike = (likeId) => {
    this.props.removeLike(likeId).then(() => {
      this.fetchMessages();
     
    
    });


};
  
  


  render() {
    
    let display = <div>No Messages Found</div>;
    if (this.state.messages) {
      display = this.state.messages.map((value) => {
         //console.log(value.likes[0].username);

        return (
          <li key={value.id}>
            {value.text}
            <button onClick={() => this.handleDelete(value.id)}>Delete</button>
            <button onClick={() => this.handleLike(value.id)}><img src = {"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/271/thumbs-up_1f44d.png"} height="9px" width="9px"  /></button>
            <button onClick={() => this.handleDislike(value.likes[0].id)}><img src = {"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/271/thumbs-down_1f44e.png"} height="9px" width="9px"  /></button>
            <span>{value.likes.length}</span>
            
          </li>
        );
      });
    }

    return (
      <div className="Messages">
        <div className="ListMessage">{display}</div>
        <div className="NewMessage">
          <input
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button onClick={this.newMessageHandler}> Send Message </button>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Messages);
