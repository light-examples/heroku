const { route } = require('light');

const { handler } = route();

module.exports = handler(() => {
  return {
    hello: 'world',
    this: 'is hosted on heroku',
  };
});
