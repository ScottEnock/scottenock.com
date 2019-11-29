import React, { Component } from 'react'
import axios from "axios"

export default class Newsletter extends Component {

    state = {
        email: "",
        loading: false,
        submitted: false,
        error: ""
    }
    
    handleChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, error: ""});

        try {
            const response = await axios.post("/.netlify/functions/mail-list", {
                email: this.state.email
            });

            if (response.status === 200) this.setState({submitted: true, email: ""});
        } catch (error) {
            this.setState({error: error.response.data.message});
        }

        this.setState({loading: false});
    }

    render() {

        const form = <form className="newsletter-form" onSubmit={this.handleSubmit} >
            <input onChange={this.handleChange} type="email" required placeholder="Email Adress" value={this.state.email}/>
            <input type="submit" value="submit" />
        </form>

        return (
            <React.Fragment>
                {!this.state.loading && !this.state.submitted ? form : null }
                {this.state.loading && <p>Loading...</p> }
                {this.state.submitted && <h4>Congratulations! You're now on my pen pal list!</h4> }
                {this.state.error && <span className="error">{`Whoops... We've experienced an error: ${this.state.error}`}</span> }
            </React.Fragment>
        )
    }
}
