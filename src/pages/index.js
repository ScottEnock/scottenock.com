import React from 'react'

import "../styles/normalize.css"
import "../styles/style.css"

import Header from "../components/header"

export default function index() {
	return (
		<div>
			<Header/>
			<div id="main-container">
				<div className="container">
					<div className="lead">
						<h1>Hi, I'm Scott</h1>
						<p>I'm a web developer and writer specializing in modern JavaScript. I make things from scratch, contribute to open source, and write about development in an accessible and intuitive way.</p>
						<a className="github-button" href="https://github.com/ntkme" data-size="large" aria-label="Follow @ntkme on GitHub">Follow @ntkme</a>
					</div>
				</div>
				<div className="container">
					This will be some more content
				</div>
			</div>
		</div>
	)
}
