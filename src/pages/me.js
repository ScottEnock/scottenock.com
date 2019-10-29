import React from 'react'

import Header from "../components/header"

export default function me() {
	return (
		<div>
			<Header/>
			<main id="main-container">
				<div className="container">
					<h1>About Me</h1>
					<p>I'm Scott Rowland Gabriel Enock. I know, it's a mouth full. <br /> I'm English. I write in Javascript. I make Videos.</p>
					<p></p>
					<h2>Oh, you want more...</h2>
					<p>I'm 20. This is my castle. I think I'm destined for greatness. <br /> As you can see, I'm unapologetic. What needs saying will be said. This is my home and in my home I do as I like. What you'll find in my home is a place that covers the innerworkings of my mind. <br /> What makes me tick? As Sivers points out, it's simple, I like to create. Create websites, apps, art, books, and thought. <br /> Is genius crazy, or is crazy genius?</p>
				</div>
			</main>
		</div>
	)
}
