const settings = {
  "name": "frontity-gf-demo",
  "state": {
    "frontity": {
      "url": "https://frontity-gf.aamodtgroup.com",
      "title": "Frontity Gravity Forms Demo",
      "description": "This is a Frontity Gravity Forms demo"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "GitHub",
              "https://github.com/aamodtgroup/frontity-gravity-forms"
            ],
            [
              "Issues",
              "https://github.com/aamodtgroup/frontity-gravity-forms/issues"
            ],
            [
              "Aamodt Group",
              "https://aamodtgroup.com"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
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
    "@aamodtgroup/frontity-gravity-forms",
    "@frontity/yoast"
  ]
};

export default settings;
