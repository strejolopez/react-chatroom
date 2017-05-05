import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {addMessage} from '../api/messaging'



const styles = {
    room: {
        display:'flex',
        backgroundColor:'grey',
        height:'9000'
    },
    username: {
        fontSize:50,
        color:'black',
        fontWeight:'bold',
        marginRight:5
    },
    timestamp: {
        fontsize:10,
        color:'black'
    },
    bullet: {
        listStyle:'none',
    },
    topbox: {
        fontSize:30,
        height:500,
        width:400,
        wordWrap:'break-word'
    },
    messageContainer: {
        backgroundColor:'grey',
        border:'5px solid black',
        marginBottom:10
    },
    might: {
       marginLeft:70,
        marginTop:200,
        fontSize:40,
        textAlign:'center'
    },
    msg: {
        color:'red'
    }
}



class Chatroom extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            username: this.props.username,
            timestamp: moment().format('LTS'),
            message: this.state.message
        })
        this.setState({
            message: ''
        })

    }

    componentWillMount() {
        if (!this.props.username) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div style={styles.room}>
                <div style={styles.topbox}>
                    <ul style={styles.bullet}>
                        {this.props.messages.map((msg)=>(
                        <li>
                                <div style={styles.messageContainer}>
                                <div style={styles.timestamp}>
                                    <span style={styles.username}>{msg.username}</span>
                                    {msg.timestamp}
                                </div>
                                <div style={styles.msg}>
                                    {msg.message} 
                                </div>
                            </div>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="formContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input style={styles.might} placeholder="Insert Message" onChange={this.handleChange} name="message" type="text" value={this.state.message} />
                    </form>
                </div>
            </div>    
        )
    }
}

function mapStatetoProps(appState) {
    return {
        messages: appState.messages,
        username: appState.username
    }
}

export default connect(mapStatetoProps)(Chatroom)