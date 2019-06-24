
const env = process.env.APP_ENV

switch (env) {
  case 'dev':
    module.exports = require('./store.dev')
    break
  case 'prod':
    module.exports = require('./store.prod')
    break
}
