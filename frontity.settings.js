const settings = {
  "name": "test-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@aamodtgroup/agtech",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp-frontity-gf.aamodtgroup.com",
          "homepage": "home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "@aamodtgroup/block-processors",
    "@aamodtgroup/frontity-gravity-forms"
  ]
};

export default settings;
