import React from 'react'

import "../styles/normalize.css"
import "../styles/style.css"

import Layout from '../components/Layout'

export default function index() {
	return (
		<Layout>
			<div className="lead">
				<h1>Hi, I'm Scott</h1>
				<p>I'm a web developer and writer specializing in modern JavaScript. I make things from scratch, contribute to open source, and write about development in an accessible and intuitive way.</p>
			</div>
		</Layout>
	)
}
