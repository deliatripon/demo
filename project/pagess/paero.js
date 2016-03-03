module.exports = {
  url: 'http://www.aerosky.ro',
  elements: {
    LocalityFromInput: {
      selector: '//input[@id="TextBoxLocalityFrom"]'
      locateStrategy: 'xpath'
    },
    LocalityToInput: {
      selector: '//input[@id="TextBoxLocalityTo"]'
      locateStrategy: 'xpath'
    },
      submit: {
        selector: '//input[@id="ButtonSearch"]',
        locateStrategy: 'xpath'
      }
  }
};
