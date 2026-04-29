const nextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/work.html", destination: "/work", permanent: true },
      { source: "/conceptuals.html", destination: "/conceptuals", permanent: true },
      { source: "/real-projects.html", destination: "/real-projects", permanent: true },
      { source: "/bim.html", destination: "/bim", permanent: true },
      { source: "/profile.html", destination: "/profile", permanent: true },
      { source: "/archive.html", destination: "/archive", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/aeon-flux.html", destination: "/project/aeon-flux", permanent: true },
      { source: "/resilient-nexus.html", destination: "/project/resilient-nexus", permanent: true },
      { source: "/veridian-elan.html", destination: "/project/veridian-elan", permanent: true }
    ];
  }
};

export default nextConfig;
