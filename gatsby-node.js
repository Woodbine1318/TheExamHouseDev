exports.createPages = async ({ actions, graphql }) => {
  const {
    data: { allContentfulBlogPost: posts },
  } = await graphql(`
    query PaginatedBlogPosts {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        totalCount
        edges {
          node {
            id
            slug
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `);

  posts.edges.forEach(({ node, next, previous }) => {
    actions.createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve('./src/templates/blog-post.jsx'),
      context: { id: node.id, next, previous },
    });
  });
};
