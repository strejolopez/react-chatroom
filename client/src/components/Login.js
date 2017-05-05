import React, { Component } from 'react'
import { login } from '../api/messaging'




const styles = {
    container: {
        margin:'auto',
        marginLeft:400,
        marginTop:200,
    },
    word: {
        fontSize:50
    }
}

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username)
        this.props.history.push('/chatroom')
    }

    render() {
        return (
            <div style={styles.container}>
                <form onSubmit={this.handleSubmit}>
                    <input style={styles.word} placeholder="Enter your username" name="username" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default Login 