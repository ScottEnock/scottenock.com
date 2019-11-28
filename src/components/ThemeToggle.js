import React, { Component } from 'react'

export default class ThemeToggle extends Component {

    state = {
		theme: window ? localStorage.getItem("theme") : null
	}

	componentDidMount = () => {
		if (this.state.theme === null) {
			localStorage.setItem("theme", "light"); 
			this.setState({theme : "light"});
		};
		document.querySelector("body").setAttribute("theme", this.state.theme);
	}

	componentDidUpdate = () => {
		document.querySelector("body").setAttribute("theme", this.state.theme);
	}

	toggleTheme = () => {
		if (window) {
			
			if (this.state.theme === "light") {
				localStorage.setItem("theme", "dark"); 
				this.setState({theme : "dark"});
				return
			}
			localStorage.setItem("theme", "light"); 
			this.setState({theme : "light"});
		}
	}

    render() {
        return (
            <React.Fragment>
                <input type="checkbox" id="switch" onClick={this.toggleTheme} onChange={e => {}} checked={this.state.theme === "dark"}/><label htmlFor="switch">Toggle</label>
            </React.Fragment>
        )
    }
}
