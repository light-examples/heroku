const light = require('light');

module.exports = light({
  path: '/',
  async handler() {
    return {
      hello: 'world',
      this: 'is hosted on heroku',
    };
  },
});
