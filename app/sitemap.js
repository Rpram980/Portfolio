export default function sitemap() {
  const base = 'https://ramprakash.dev';
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
  ];
}
