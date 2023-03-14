const Robots = () => {
  return null;
};

export const getServerSideProps = async ({ req, res }) => {
  const baseUrl = `https://${
    req.headers["host"] || req.headers["x-forwarded-host"]
  }`;

  const robots = `# *
User-agent: *
Allow: /

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", `max-age=${60 * 60 * 1}`); // 1 hour cache
  res.write(robots);
  res.end();

  return {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
    robots,
  };
};

export default Robots;
