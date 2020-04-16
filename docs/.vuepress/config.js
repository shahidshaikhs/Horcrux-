module.exports = {
  host: "localhost",
  title: "The Exocortex",
  description: "I keep it full of notes for reference and sharing. Most are related to web development but could honestly be about anything - nonfiction, fiction, general life skills and topics, and whatever else I want remember without relying on my unreliable brain.",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicons/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicons/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/favicons/safari-pinned-tab.svg",
        color: "#3a0839"
      }
    ],
    ["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml"
      }
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  themeConfig: {
    nav: [{ text: "Portfolio", link: "https://shahidshaikh.com" }],
    sidebar: [
      // "/",
      {
        title: "🧁 Javascript ES6",
        children: [
          "/notes/javascript/letAndVar",
          "/notes/javascript/datatypes",
          "/notes/javascript/ternary",
          "/notes/javascript/eventbubbling",
          "/notes/javascript/delegation",
          "/notes/javascript/methodsOrFunctions",
          "/notes/javascript/callback",
          "/notes/javascript/promises",
          "/notes/javascript/async",
          "/notes/javascript/hoisting",
          "/notes/javascript/closures",
          "/notes/javascript/spreadrest",
          "/notes/javascript/this",
          "/notes/javascript/oops",
          "/notes/javascript/classes",
          "/notes/javascript/getpost",
          "/notes/javascript/localstorage",
        ]
      },
      {
        title: "🦊 Cascading Style Sheets",
        children: [
          "/notes/css/boxmodal",
          "/notes/css/position",
          "/notes/css/aligncenter",
          "/notes/css/specificity",
          "/notes/css/units",
          "/notes/css/keyframes",
          "/notes/css/hardwareA"
        ]
      }
    ],
    logo: "/assets/images/logo.png"
  }
};
