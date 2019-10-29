import React from 'react'
import {Link} from "gatsby"

import EaLogo from "../images/logo.png"
import kofi from "../images/kofi.png"
import moon from "../images/moon.png"

export default function header() {
	return (
		<nav>
			<div className="nav-container">
				<div className="brand">
					<Link to="/">
						<img src={EaLogo} alt="Evening Alliance Logo" className="favicon" />
						<span className="text">Evening Alliance</span>
					</Link>
				</div>
				<div className="links">
					<Link to="/me">Me</Link>
					<Link to="/blog">Articles</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/"><img src={kofi} alt="Kofi Page" className="kofi" /></Link>
					<Link to="/"><img src={moon} alt="Dark Mode" className="favicon" /></Link>
				</div>
			</div>
		</nav>
	)
}
