import React from 'react'

import mail from "../images/letter.png"
import Layout from '../components/Layout'

export default function contact() {
	return (
		<Layout>
			<div className="inline">
				<h1 style={{display: "inline-block"}} >Let's be Penpals </h1>
				<img src={mail} className="icon" alt="(An emoji of a letter.)" />
			</div>
			<p style={{marginBottom: "40px"}} >Sign up and I'll let you know when I post a new article. No spam, just information.</p>
			<form action="" className="newsletter-form">
				<input type="email" required placeholder="Email Adress"/>
				<input type="submit" value="submit"/>
			</form>
		</Layout>
	)
}
