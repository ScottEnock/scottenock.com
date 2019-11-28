import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from "gatsby"

const articles = ({data}) => {
    const {edges} = data.allMarkdownRemark
    return (
        <Layout>
            <h1>Articles</h1>
            <div className="posts">
              {edges.map( ({node}, index) => (
                <Link key={node.id} to={`/articles/${node.fields.slug}`} >
                  <div className="post">
                    <img src={node.frontmatter.thumbnail.childImageSharp.fixed.src} alt=""/>
                    <div className="text">
                      <h2>{node.frontmatter.title}</h2>
                      <span>{node.frontmatter.date}</span>
                    </div>
                  </div>
                </Link>  
              ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {published: {eq: true} }}, sort: {fields: frontmatter___date, order: DESC} ) {
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

export default articles
