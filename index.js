module.exports = process.env.WEBCACHE_COV ? require('./lib-cov/webcache') : require('./lib/webcache');