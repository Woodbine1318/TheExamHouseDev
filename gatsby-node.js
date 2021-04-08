const path = require('path');
const fs = require('fs');

exports.onPostBuild = () => {
  // if (fs.existsSync(path.join(__dirname), 'public/.well-known')) return;

  fs.mkdirSync(path.join(__dirname, 'public/.well-known'));
  fs.copyFileSync(path.join(__dirname, 'assetlinks.json'), path.join(__dirname, 'public/.well-known/assetlinks.json'));
};

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

  // Create a page for each blog post
  // Each page will contain previous/next links
  posts.edges.forEach(({ node, next, previous }) => {
    actions.createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve('./src/templates/blog-post.jsx'),
      context: { id: node.id, next, previous },
    });
  });

  // Create paginated blog index
  const postsPerPage = Number(process.env.BLOG_INDEX_LIMIT);
  const totalPages = Math.ceil(posts.totalCount / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    const currentPage = i + 1;
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages.length;
    const nextPage = isLastPage ? null : `/blog/${currentPage + 1}`;
    const previousPage = isFirstPage ? null : `/blog${currentPage === 2 ? '' : `/${currentPage - 1}`}`;

    actions.createPage({
      path: isFirstPage ? '/blog' : `/blog/${currentPage}`,
      component: require.resolve('./src/templates/paginated-blog.jsx'),
      context: {
        postsPerPage,
        skip: i * postsPerPage,
        nextPage,
        previousPage,
      },
    });
  });
};
