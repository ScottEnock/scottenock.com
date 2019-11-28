import { Component } from 'react'

export default class HandleScroll extends Component {

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {   
        const topOfPage = window.scrollY < 10;
        if (topOfPage) return document.querySelector("nav").classList.remove("scroll");
        document.querySelector("nav").classList.add("scroll");
    }

    render() {
        return null
    }
}
