const path = require("path");

module.exports.onCreateNode = ({node, actions}) =>{
    const {createNodeField} = actions;

    if (node.internal.type === "MarkdownRemark") {

        const slug = path.basename(node.fileAbsolutePath, ".md").replace(/ /g, "-");

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }

}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const blogTemplate = path.resolve("./src/templates/post.js");
    
    const {data} = await graphql(`
    {
        allFile(filter: {extension: {eq: "md"}}) {
          nodes {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
    }
    `);

    data.allFile.nodes.forEach(node => {
        const {slug} = node.childMarkdownRemark.fields
        createPage({
            component: blogTemplate,
            path: `/articles/${slug}`,
            context: {
                slug
            }
        })
    })
}