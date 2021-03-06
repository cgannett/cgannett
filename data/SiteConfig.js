const config = {
  siteTitle: "CG:Blog", // Site title.
  siteTitleShort: "CG Dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Carlton Gannett: Software Development Thoughts", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: true, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "cgannett-netlify-com", // Disqus shortname.
  postDefaultCategoryID: "Dev", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "cgannett", // Username to display in the author segment.
  userEmail: "carltongannett@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "@CarltonGannett", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Earth", // User location to display in the author segment.
  userAvatar: "https://avatars3.githubusercontent.com/u/11354556?s=460&v=4", // User avatar to display in the author segment.
  userDescription:
    "Be Better every day.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/cgannett",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/carltongannett",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:carltongannett@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Medium",
      url: "https://medium.com/@carltongannett",
      iconClassName: "fa fa-medium"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/carltongannett",
      iconClassName: "fa fa-linkedin"
    }
  ],
  copyright: "Copyright © 2019. Carlton Gannett" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
