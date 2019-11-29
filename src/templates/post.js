import React from 'react'
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import {graphql} from "gatsby"

export default function post({data}) {
    const postData = data.markdownRemark;
    const {frontmatter} = postData;
    const mainImage = frontmatter.thumbnail.childImageSharp.fixed.src;

    return (
        <Layout>
            <Helmet>
              <title>{frontmatter.title && frontmatter.title} - Scott Rowland Enock</title>
              <meta name="description" content={frontmatter.description && frontmatter.description} />
            </Helmet>
            <div className="header">
              <img src={mainImage && mainImage} alt="" className="header-image"/>
              <div className="header-info">
                <h1>{frontmatter.title && frontmatter.title}</h1>
                <div className="frontmatter">
                  <span>{frontmatter.date}</span>
                  /
                  <a href={`http://twitter.com/share?text=Just read Scott's latest article: "${frontmatter.title}" and thought I'd share it!&url=https://scottenock.com/articles/${postData.fields.slug}&via=scottenock`} target="_blank" rel="noopener noreferrer">Share</a>
                  /
                  <a href={`https://github.com/ScottEnock/scottenock.com/tree/master/src/posts/${postData.fields.slug}.md`} target="_blank" rel="noopener noreferrer">Edit</a>
                </div>
                <div className="tag-container">
                  {frontmatter.tags && frontmatter.tags.map((tag, index) => <div key={index} className="tag">{tag}</div> )}
                </div>
              </div>
            </div>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: postData.html }}></div>
        </Layout>
    )
}

export const query = graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date(formatString: "MMMM Do YYYY")
        title
        tags
        description
        thumbnail {
            childImageSharp {
            fixed(width: 100) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      html
    }
}  
`