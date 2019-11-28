import React from 'react'
import Layout from '../components/Layout'
import {Link} from "gatsby"

import profilePicture from "../images/profile-picture.jpg"
import ProjectsList from '../components/ProjectsList';

export default function index({data}) {
	const posts = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<div className="lead">
				<h1>Hi, I'm Scott</h1>
				<p>I'm a web developer and writer specializing in modern JavaScript. I've been freelance for an eternity. My passion is creation. Over here I write about life and any development issues I've managed to solve.</p>
				<img className="profile-picture" src={profilePicture} alt=""/>
			</div>
			<section>
				<h2>Latest Articles</h2>
				<div className="posts">
					{posts.map(({node: post}, index) => (
						<Link key={post.id} to={`/articles/${post.fields.slug}`} >
							<div className="post">
								<img src={post.frontmatter.thumbnail && post.frontmatter.thumbnail.childImageSharp.fixed.src} alt=""/>
								<h2>{post.frontmatter.title}</h2>
							</div>
						</Link>  
					))}
				</div>
				<ProjectsList/>
			</section>
		</Layout>
	)
}

export const query = graphql`
{
	allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
		edges {
			node {
			frontmatter {
				title
				date
				thumbnail {
				childImageSharp {
					fixed(width: 50) {
					src
					}
				}
				}
			}
			fields {
				slug
			}
			id
			}
		}
	}
}
  
  
`