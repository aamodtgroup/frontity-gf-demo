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
    "@aamodtgroup/block-processors",
    "@aamodtgroup/frontity-contact-form-7",
    "@aamodtgroup/frontity-gravity-forms"
  ]
};

export default settings;
