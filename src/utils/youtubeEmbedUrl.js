const embedTemplate = `https://www.youtube.com/embed/`;

const youtubeEmbedUrl = (originalUrl) => {
  // Embed link
  if (originalUrl.includes('youtube.com/embed/')) return originalUrl;

  // Share link
  if (originalUrl.includes('youtu.be')) {
    const [videoId] = originalUrl.replace(/\/$/, '').split('/').reverse();

    return `${embedTemplate}${videoId}`;
  }

  // Fallback for video url
  if (originalUrl.includes('/watch?v=')) {
    const start = originalUrl.indexOf('?');
    const params = URLSearchParams(originalUrl.slice(start + 1));
    const videoId = params.get('v');

    return `${embedTemplate}${videoId}`;
  }

  return null;
};

export default youtubeEmbedUrl;
