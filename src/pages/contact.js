import React from 'react'

import Header from "../components/header"

import mail from "../images/letter.png"

export default function contact() {
	return (
		<div>
			<Header/>
			<main id="main-container">
				<div className="container">
					<div className="inline">
						<h1>Let's be Penpals </h1>
						<img src={mail} className="favicon-right" alt="(An emoji of a letter.)" />
					</div>
					<p>Sign up and I'll let you know when I post a new article. No spam, just information.</p>
					<form action="" className="newsletter-form">
						<input type="email" required placeholder="Email Adress"/>
						<input type="submit" value="submit"/>
					</form>
				</div>
			</main>
		</div>
	)
}
