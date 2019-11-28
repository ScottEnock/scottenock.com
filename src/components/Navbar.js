import React from 'react'
import {Link, graphql, useStaticQuery } from "gatsby"

import logo from "../images/takeout-box.png"
import kofi from "../images/kofi.png"
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (

		<nav>
			<div className="nav-container">
				<div className="brand">
					<Link to="/">
						<img src={logo} alt="Evening Alliance Logo" className="favicon" />
						<span className="text">{data.site.siteMetadata.title}</span>
					</Link>
				</div>
				<div className="links">
					<Link to="/me">Me</Link>
					<Link to="/articles">Articles</Link>
					<Link to="/contact">Contact</Link>
					<a href="https://ko-fi.com/scottenock" target="_blank" rel="noopener noreferrer"><img src={kofi} alt="Kofi Page" className="kofi" /></a>
					<ThemeToggle/>
				</div>
			</div>
		</nav>

	)
}


export default Navbar